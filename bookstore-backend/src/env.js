require('dotenv').config({
    path: 'config/dev.env'
})

const env = {
    GRAPHQL_PORT: process.env.GRAPHQL_PORT,
    PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
    PRISMA_SECRET: process.env.PRISMA_SECRET,
    JWT_SECRET: process.env.JWT_SECRET
}

export default env;