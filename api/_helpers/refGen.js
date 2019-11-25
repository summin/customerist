
const refGen = function (collection, entry) {
    const gen = function () {
        const ref =  Math.floor(10000 * Math.random())
        return ref
    }
    return gen()
}

module.exports = refGen

// const gen = async function() {
//     const ref = await db[collection].count() + Math.floor(100 * Math.random())
//     if (await db[collection].findOne({ [entry]: ref })) {
//         gen();
//     }
//     return ref
// }
// return gen