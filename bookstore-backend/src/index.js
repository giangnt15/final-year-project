import {GraphQLServer} from 'graphql-yoga';
import prisma from './prisma';
import {resolvers, fragmentReplacements} from './resolvers/index';
import env from './env';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context(httpContext){
        return {
            prisma,
            httpContext,
            env
        }
    },
    fragmentReplacements
})

server.start({
    port: env.GRAPHQL_PORT
},()=>console.log(`Running on port ${env.GRAPHQL_PORT}`));