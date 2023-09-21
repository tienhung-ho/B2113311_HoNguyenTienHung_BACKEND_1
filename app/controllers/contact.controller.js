
module.exports.create = (req, res) => {
    res.send({ mesage: 'Create handler'})
}

module.exports.findAll = (req, res) => {
    res.send({ mesage: 'find all handler'})
}

module.exports.findOne = (req, res) => {
    res.send({ mesage: 'find One handler'})
}

module.exports.update = (req, res) => {
    res.send({ mesage: 'update handler'})
}

module.exports.delete = (req, res) => {
    res.send({ mesage: 'delete handler'})
}

module.exports.deleteAll = (req, res) => {
    res.send({ mesage: 'deleteAll handler'})
}

module.exports.findAllFavorite = (req, res) => {
    res.send({ mesage: 'findAllFavorite handler'})
}
