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
    async updateBook(parent, {id,data}, { prisma, httpContext, env }, info){
        const userId = getUserId(httpContext);
        const user = await prisma.query.user({
            where: {
                id: userId
            }
        });
        if (!user) {
            throw new Error("Account not found!")
        }
        if (user.role !== "Admin") {
            throw new Error("You don't have required privileges!")
        }
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
        const user = await prisma.query.user({
            where: {
                id: userId
            }
        });
        if (!user) {
            throw new Error("Account not found!")
        }
        if (user.role !== "Admin") {
            throw new Error("You don't have required privileges!")
        }
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
    }
}

export default Mutation;