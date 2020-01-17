import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import getUserId from '../utils/getUserId';
import checkAdmin from '../utils/adminAuth';

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
    async login(parent, { data }, { prisma, env }, info) {
        const { email, password } = data;
        const user = await prisma.query.user({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error("Wrong username or password!");
        }
        const matched = await bcrypt.compare(password, user.password);
        if (!matched) {
            throw new Error("Wrong username or password!");
        }
        return {
            user,
            token: jwt.sign({
                userId: user.id,
            }, env.JWT_SECRET)
        }
    },
    async updateUser(parent, {data}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        const userExist = await prisma.exists.User({
            id: userId
        })
        if (!userExist) throw new Error('User not existed!');
        return prisma.mutation.updateUser({
            where: {
                id: userId
            },
            data
        },info);
    },
    async updateBook(parent, {id,data}, { prisma, httpContext, env }, info){
        const userId = getUserId(httpContext);
        checkAdmin(userId,prisma);
        const bookExists = await prisma.exists.Book({
            id
        });
        if (!bookExists){
            throw new Error("Book not found");
        }
        const opArgs = {
            where: {
                id
            },
            data: {
                ...data,
            }
        }
        if (data.categories){
            const categories = data.categories.map(item => ({
                id: item
            }));
            opArgs.data.categories = {
                connect: categories
            }
        }
        if (data.authors){
            const authors = data.authors.map(item => ({
                id: item
            }));
            opArgs.data.authors = {
                connect: authors
            }
        }
        if (data.publisher){
            const publisher = {
                connect: {
                    id: data.publisher
                }
            }
            opArgs.data.publisher = publisher;
        }
        return prisma.mutation.updateBook(opArgs,info);
    },
    async createBook(parent, {data}, { prisma, httpContext, env }, info) {
        const userId = getUserId(httpContext);
        checkAdmin(userId,prisma);
        const idsCategories = data.categories.map(item => ({
            id: item
        }));

        const idsAuthors = data.authors.map(item => ({
            id: item
        }));
      
        return prisma.mutation.createBook({
            data: {
                ...data,
                categories: {
                    connect: idsCategories
                },
                authors: {
                    connect: idsAuthors
                },
                publisher: {
                    connect: {
                        id: data.publisher
                    }
                }
            }
        }, info);
    },
    async createCollection(parent, {data}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        checkAdmin(userId,prisma);
        return prisma.mutation.createCollection({
            data
        },info)
    },
    async updateCollection(parent, {data,id}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        checkAdmin(userId,prisma);
        return prisma.mutation.updateCollection({
            where: {
                id
            },
            data
        },info)
    },
    async createUserAddress(parent, {data}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        return prisma.mutation.createUserAddress({
            data: {
                ...data,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        },info);
    },
    async updateUserAddress(parent, {data,id}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        const addressExisted = await prisma.exists.UserAddress({
            user: {
                id: userId
            },
            id
        })
        if (!addressExisted) throw new Error('Address not existed!');
        return prisma.mutation.updateUserAddress({
            where: {
                id
            },
            data
        },info)
    },
    async createBookCategory(parent, {data}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        checkAdmin(userId, prisma);
        return prisma.mutation.createBookCategory({
            data
        },info)
    },
    async updateBookCategory(parent, {data,id}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        checkAdmin(userId, prisma);
        return prisma.mutation.createBookCategory({
            where: {
                id
            },
            data
        },info)
    },
    async createPublisher(parent, {data}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        checkAdmin(userId, prisma);
        return prisma.mutation.createPublisher({
            data
        },info)
    },
    async updatePublisher(parent, {data,id}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        checkAdmin(userId, prisma);
        return prisma.mutation.updatePublisher({
            where: {
                id
            },
            data
        },info)
    },
    async createAuthor(parent, {data}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        checkAdmin(userId, prisma);
        return prisma.mutation.createAuthor({
            data
        },info)
    },
    async updateAuthor(parent, {data,id}, {prisma,httpContext},info){
        const userId = getUserId(httpContext);
        checkAdmin(userId, prisma);
        return prisma.mutation.updateAuthor({
            where: {
                id
            },
            data
        },info)
    },
}

export default Mutation;