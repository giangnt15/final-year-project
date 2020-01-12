const Query = {
    getBooks(parent,args, {prisma},info){
        return prisma.query.books(null, info);
    }
}

export default Query;