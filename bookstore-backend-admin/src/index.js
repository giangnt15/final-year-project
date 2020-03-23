import { GraphQLServer } from 'graphql-yoga';
import prisma from './prisma';
import { resolvers, fragmentReplacements } from './resolvers/index';
import env from './env';
import sgMailer from "@sendgrid/mail";
import mySqlConnection from './DB/DBContext';

sgMailer.setApiKey(env.SENDGRID_API_KEY);

// mySqlConnection.query(`
//  call Proc_GetBestSeller(0,3,null,null);
// `, (err,res,fields)=>{
//     if (err){
//         console.log(err);
//         throw err;
//     }
//     console.log(res[0].length)
// });

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context(httpContext) {
        return {
            prisma,
            httpContext,
            env,
            mySqlConnection,
            sgMailer
        }
    },
    fragmentReplacements
});

server.get('/account-activation/:activationToken', async (req,res)=>{
    const activationToken = req.params.activationToken;
    const authToken = await prisma.query.authToken({
        where: {
            token: activationToken
        }
    }, `{id token expiredAfter type createdAt user{id}}`);
    if (!authToken) {
        res.send("Token không hợp lệ")
    }
    if (moment(authToken.createdAt).add(authToken.expiredAfter, 'milliseconds').isBefore(moment())) {
        res.send("Token đã hết hạn.")
    }
    await prisma.mutation.updateUser({
        where: {
            id: authToken.user.id
        },
        data: {
            isActive: true
        }
    });
    res.send("Tài khoản của bạn đã được kích hoạt. Giờ bạn đã có thể đăng nhập.");
});

server.start({
    port: env.GRAPHQL_PORT
}, () => console.log(`Running on port ${env.GRAPHQL_PORT}`));