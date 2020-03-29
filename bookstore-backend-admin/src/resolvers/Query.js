import getUserId from '../utils/getUserId';
import checkAdmin, { getUserRole } from '../utils/adminAuth';
import prisma from '../prisma';

const Query = {
    async getBooks(parent, args, { prisma }, info) {
        let opArgs = {}
        const { where, orderBy, first, skip, selection } = args;
        opArgs.where = where;
        opArgs.orderBy = orderBy;
        opArgs.first = first;
        opArgs.skip = skip;
        const books = await prisma.query.books(opArgs, selection);
        const count = await prisma.query.booksConnection({ where }, `{aggregate {count}}`);
        const totalCount = count.aggregate.count;
        return {
            books,
            totalCount
        }
    },
    async getBook(parent, { id }, { prisma }, info) {
        const book = await prisma.query.book({
            where: {
                id
            }
        }, info);
        console.log(book);
        return book;
    },
    async getCategories(parent, args, { prisma }, info) {
        const { where, orderBy, first, skip } = args;
        const categories = await prisma.query.bookCategories({
            where,
            orderBy,
            first,
            skip
        }, info);
        return categories;
    },
    async getCategoriesPaging(parent, args, { prisma }, info) {
        const { where, orderBy, first, skip } = args;
        const categories = await prisma.query.bookCategories({
            where,
            orderBy,
            first,
            skip
        }, `{id name createdAt updatedAt}`);
        const count = await prisma.query.bookCategoriesConnection({ where }, `{aggregate {count}}`);
        return {
            categories,
            totalCount: count.aggregate.count
        }
    },
    async getCategory(parent, { id }, { prisma, info }) {
        return prisma.query.bookCategory({
            where: {
                id
            }
        }, info);
    },
    async getAuthors(parent, args, { prisma }, info) {
        const { where, orderBy, first, skip } = args;
        const opArgs = {
            where,
            orderBy,
            first,
            skip
        }
        return prisma.query.authors(opArgs, info);
    },
    async getAuthor(parent, { id }, { prisma }, info) {
        return prisma.query.author({
            where: {
                id
            }
        }, info);
    },
    async getCollections(parent, args, { prisma }, info) {
        const { name, orderBy, first, skip } = args;
        const opArgs = {
            orderBy,
            first,
            skip
        }
        if (name) {
            opArgs.where = {
                collectionName_contains: name
            }
        }
        const totalCount = await prisma.query.collectionsConnection({
            where: {
                collectionName_contains: name
            }
        }, `{aggregate{count}}`);
        const collections = await prisma.query.collections(opArgs);
        return {
            collections,
            totalCount: totalCount.aggregate.count
        }
    },
    async getCollection(parent, { id }, { prisma }, info) {
        return prisma.query.collection({
            where: {
                id
            }
        }, info);
    },
    async getBookReviewsByBook(parent, { bookId, orderBy, first, skip }, { prisma }, info) {
        console.log(bookId)
        const bookReviews = await prisma.query.bookReviews({
            where: {
                book: {
                    id: bookId
                }
            },
            orderBy,
            first,
            skip
        }, `{id reviewHeader reviewText rating createdAt updatedAt author{id username avatar} replies(orderBy: updatedAt_ASC){id text author{id fullName username avatar} updatedAt}}`);
        const totalCount = await prisma.query.bookReviewsConnection({
            where: {
                book: {
                    id: bookId
                }
            }
        }, `{aggregate {count}}`);
        const fiveStar = await prisma.query.bookReviewsConnection({ where: { rating: 5, book: { id: bookId } } }, `{aggregate {count}}`);
        const fourStar = await prisma.query.bookReviewsConnection({ where: { rating: 4, book: { id: bookId } } }, `{aggregate {count}}`);
        const threeStar = await prisma.query.bookReviewsConnection({ where: { rating: 3, book: { id: bookId } } }, `{aggregate {count}}`);
        const twoStar = await prisma.query.bookReviewsConnection({ where: { rating: 2, book: { id: bookId } } }, `{aggregate {count}}`);
        const oneStar = await prisma.query.bookReviewsConnection({ where: { rating: 1, book: { id: bookId } } }, `{aggregate {count}}`);
        return {
            bookReviews,
            totalCount: totalCount.aggregate.count,
            fiveStar: fiveStar.aggregate.count,
            fourStar: fourStar.aggregate.count,
            threeStar: threeStar.aggregate.count,
            twoStar: twoStar.aggregate.count,
            oneStar: oneStar.aggregate.count
        }
    },
    async getBookReviews(parent, { where, orderBy, first, skip }, { prisma }, info) {
        const bookReviews = await prisma.query.bookReviews({
            where,
            orderBy,
            first,
            skip
        }, `{id reviewHeader reviewText rating createdAt updatedAt book{id title thumbnail} author{id username avatar} replies(orderBy: updatedAt_ASC){id text author{id fullName username avatar} updatedAt}}`);
        const totalCount = await prisma.query.bookReviewsConnection({
            where
        }, `{aggregate {count}}`);
        return {
            bookReviews,
            totalCount: totalCount.aggregate.count,
        }
    },
    async getUserAddresses(parent, args, { prisma, httpContext }, info) {
        const userId = getUserId(httpContext);
        return prisma.query.userAddresses({
            where: {
                user: {
                    id: userId
                }
            }
        }, info);
    },
    async getPublishers(parent, { where, orderBy, first, skip }, { prisma }, info) {
        return prisma.query.publishers({
            where,
            orderBy,
            first,
            skip
        }, info);
    },
    async getItemStockQty(parent, { id }, { prisma }, info) {
        const book = await prisma.query.book({
            where: {
                id
            }
        }, `{availableCopies}`);
        return {
            qty: book.availableCopies,
            id
        };
    },
    async getProvinces(parent, args, { prisma }, info) {
        return prisma.query.provinces(undefined, info);
    },
    async getDistricts(parent, { provinceId }, { prisma }, info) {
        return prisma.query.districts({
            where: {
                province: {
                    id: provinceId
                }
            }
        }, info);
    },
    async getWards(parent, { districtId }, { prisma }, info) {
        return prisma.query.wards({
            where: {
                district: {
                    id: districtId
                }
            }
        }, info);
    },
    async getOrders(parent, { where, orderBy, first, skip, selection }, { prisma, httpContext }, info) {
        const userId = getUserId(httpContext);
        const userRole = await getUserRole(userId, prisma);
        if (userRole === "User") {
            const orders = await prisma.query.orders({
                where: where ? {
                    ...where,
                    customer: {
                        id: userId
                    }
                } : {
                        customer: {
                            id: userId
                        }
                    },
                orderBy,
                first,
                skip
            }, selection);
            const totalCount = await prisma.query.ordersConnection({
                where: where ? {
                    ...where,
                    customer: {
                        id: userId
                    }
                } : {
                        customer: {
                            id: userId
                        }
                    }
            }, `{aggregate{count}}`);
            return {
                orders,
                totalCount: totalCount.aggregate.count
            }
        } else {
            const orders = await prisma.query.orders({
                where,
                orderBy,
                first,
                skip
            }, selection);
            const totalCount = await prisma.query.ordersConnection({
                where
            }, `{aggregate{count}}`);
            return {
                orders,
                totalCount: totalCount.aggregate.count
            }
        }
    },
    async getOrderById(parent, { id }, { prisma, httpContext }, info) {
        const userId = getUserId(httpContext);
        const role = await getUserRole(userId, prisma);
        console.log(role)
        if (role === "User") {
            const orders = await prisma.query.orders({
                where: {
                    id,
                    customer: {
                        id: userId
                    }
                },
            }, info);
            if (orders.length === 0) {
                throw new Error("Đơn hàng không tồn tại.");
            }
            return orders[0];
        } else if (role === "Admin") {
            return prisma.query.order({
                where: {
                    id
                },
            }, info);
        } else {
            throw new Error("Bạn không có quyền xem đơn hàng này.")
        }
    },
    async getReviewRepliesByReview(parent, { reviewId }, { prisma }, info) {
        return prisma.query.bookReviewReplies({
            where: {
                bookReview: {
                    id: reviewId
                }
            }
        }, info);
    },
    async getWishList(parent, args, { prisma, httpContext, info }) {
        const userId = getUserId(httpContext);
        const user = await prisma.query.user({
            where: {
                id: userId
            }
        }, `{id wishList{id title thumbnail reviews{id rating}}}`);
        return {
            statusCode: 200,
            message: "Đã bỏ khỏi danh sách ưa thích",
            data: {
                books: user.wishList
            }
        }
    },
    async getBestSeller(parent, { first, skip, dateFrom, dateTo }, { mySqlConnection }, info) {
        let books = [];
        let totalCount = 0;
        const getBooks = () => new Promise((res, rej) => {
            mySqlConnection.query(`
            CALL Proc_GetBestSeller(${skip},${first}, ${dateFrom ? `'${dateFrom}'` : 'null'}, ${dateTo ? `'${dateTo}'` : 'null'} );
            `, (err, res0, fields) => {
                if (err) {
                    console.log(err);
                    rej(err);
                }
                books = res0[0];
                mySqlConnection.query(`
                CALL Proc_CountBestSeller(${dateFrom ? `'${dateFrom}'` : 'null'}, ${dateTo ? `'${dateTo}'` : 'null'});
                `, (err, res1, fields) => {
                    if (err) {
                        console.log(err);
                        rej(err);
                    }
                    totalCount = res1[0][0].totalCount;
                    res({
                        books,
                        totalCount
                    });
                });
            });

        });
        try {
           const result = await getBooks();
            if (result.books && result.books.length > 0) {
                const books1 = prisma.query.books({
                    where: {
                        id_in: result.books.map(item=>item.id)
                    }
                },`{
                    id
                    title
                    basePrice
                    description
                    thumbnail
                    images
                    dimensions
                    translator
                    format
                    isbn
                    publishedDate
                    availableCopies
                    pages
                    discounts{
                      id
                      from
                      to
                      discountRate
                    }
                    publisher{
                      id
                      name
                    }
                    authors{
                      id
                      pseudonym
                    }
                    categories{
                      id
                      name
                    }
                  }`)
                return {
                    books: books1,
                    totalCount
                }
            }
            throw new Error();
        } catch (ex) {
            return {
                books: [],
                totalCount: 0
            }
        }
    },
    async getUsers(parent, {where, orderBy, first,skip,selection}, {httpContext, prisma}, info){
        // const userId = getUserId(httpContext);
        // const userRole = getUserRole(userId, prisma);
        // if (userRole!=="Admin"){
        //     return {
        //         users: [],
        //         totalCount: 0
        //     }
        // }else{
            const users = await prisma.query.users({
                where,
                orderBy,
                first,
                skip
            },selection);
            const count = await prisma.query.usersConnection({where}, `{aggregate{count}}`);
            return {
                users,
                totalCount: count.aggregate.count
            }
        // }
    }
}

export default Query;