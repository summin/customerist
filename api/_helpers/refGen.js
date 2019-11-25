
const refGen = function (collection, entry) {
    const gen = function () {
        const ref =  Math.floor(10000 * Math.random())
        return ref
    }
    return gen()
}

module.exports = refGen
