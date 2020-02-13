import getUserId from '../utils/getUserId';

const Query = {
    async getBooks(parent, args, { prisma }, info) {
        let opArgs = {}
        const { where, orderBy, first, skip ,selection} = args;
        opArgs.where = where;
        opArgs.orderBy = orderBy;
        opArgs.first = first;
        opArgs.skip = skip;
        const books = await prisma.query.books(opArgs, selection);
        const count = await prisma.query.booksConnection(null, `{aggregate {count}}`);
        const totalCount = count.aggregate.count;
        return {
            books,
            totalCount
        }
    },
    async getBook(parent, { id }, { prisma }, info) {
        return prisma.query.book({
            where: {
                id
            }
        }, info);
    },
    async getCategories(parent, args, { prisma, info }) {
        const { orderBy, first, skip } = args;
        return prisma.query.bookCategories({
            orderBy,
            first,
            skip
        }, info);
    },
    async getCategory(parent, { id }, { prisma, info }) {
        return prisma.query.bookCategory({
            where: {
                id
            }
        }, info);
    },
    async getAuthors(parent, args, { prisma }, info) {
        const { name, orderBy, first, skip } = args;
        const opArgs = {
            orderBy,
            first,
            skip
        }
        if (name){
            opArgs.where = {
                OR: [{
                    realName_contains: name
                },{
                    pseudonym_contains: name
                }]
            }
        }
        return prisma.query.authors(opArgs,info);
    },
    async getAuthor(parent, {id}, { prisma }, info) {
        return prisma.query.author({
            where: {
                id
            }
        },info);
    },
    async getCollections(parent, args, { prisma }, info) {
        const { name, orderBy, first, skip } = args;
        const opArgs = {
            orderBy,
            first,
            skip
        }
        if (name){
            opArgs.where = {
                collectionName_contains: name
            }
        }
        return prisma.query.collections({
            where: {
                id
            }
        },info);
    },
    async getCollection(parent, {id},{prisma},info){
        return prisma.query.collection({
            where: {
                id
            }
        },info);
    },
    async getBookReviewsByBook(parent, {id},{prisma},info){
        return prisma.query.bookReviews({
            where: {
                book: {
                    id: id
                }
            }
        },info);
    },
    async getUserAddresses(parent, args,{prisma,httpContext},info){
        const userId = getUserId(httpContext);
        return prisma.query.userAddresses({
            where: {
                user: {
                    id: userId
                }
            }
        },info);
    }
}

export default Query;