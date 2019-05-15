const { forwardTo } = require('prisma-binding');

const Query = {
    // forwardto lets you just push an pull data to your db without writing
    // a query like the ones below, but if you want to do auth or antyhing like that
    // you should still manually write the query
    items: forwardTo('db')
    // async items(parent, args, ctx, info) {
    //     const items = await ctx.db.query.items();

    //     return items;
    // },
    // dogs(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     return global.dogs;
    // },
};

module.exports = Query;
