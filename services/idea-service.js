const fs = require('fs')

const IdeaModel = require('../models/idea-model')

async function findAll() {
    return IdeaModel.find().populate('tags')
}

async function add(idea) {
    return IdeaModel.create(idea)
}

async function del(id) {
    return IdeaModel.remove({ id })
}

async function find(id) {
    return IdeaModel.findOne({ id }).populate('tags')
}

module.exports = {
    findAll,
    find,
    add,
    del
}
