const Query = {
    async getBooks(parent,args, {prisma},info){
        let opArgs = {}
        const {name, authorName, isbn, orderBy, first,skip} = args;
        opArgs.where = {
            title_contains: name,
            isbn_contains: isbn
        }
        opArgs.orderBy = orderBy;
        opArgs.first = first;
        opArgs.skip = skip;
        if (authorName){
            opArgs.where.author = {
                OR: [{
                    realName_contains: authorName
                }]
            }
        }
        return prisma.query.books(opArgs, info);
    }
}

export default Query;