import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import getUserId from '../utils/getUserId';

const Mutation = {
    async signUp(parent, { data }, { prisma, env }, info) {
        const hashed = await bcrypt.hash(data.password, 10);
        const user = await prisma.mutation.createUser({
            data: {
                ...data,
                password: hashed
            }
        });
        return {
            user,
            token: jwt.sign({
                userId: user.id,
            }, env.JWT_SECRET)
        }
    },
    async login(parent,{data}, {prisma,env},info){
        const {email,password} = data;
        const user = await prisma.query.user({
            where: {
                email
            }
        });
        if (!user){
            throw new Error("Wrong username or password!");
        }
        const matched = await bcrypt.compare(password ,user.password);
        if (!matched){
            throw new Error("Wrong username or password!");
        }
        return {
            user,
            token: jwt.sign({
                userId: user.id,
            }, env.JWT_SECRET)
        }
    },
    async createBook(parent, data, {prisma,httpContext,env},info){
        const userId = getUserId(httpContext);
        const user = await prisma.query.user({
            where: {
                userId
            }
        });
        if (!user){
            throw new Error("Account not found!")
        }
        if (user.role!=="ADMIN"){
            throw new Error("You don't have required privileges!")
        }
        return prisma.mutation.createBook({
            data
        },info);
    }
}

export default Mutation;