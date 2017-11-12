const fs = require('fs')

const TagModel = require('../models/tag-model')

async function findAll() {
    return TagModel.find().populate('ideas')
}

async function add(tag) {
    return TagModel.create(tag)
}

async function del(tag_id) {
    return TagModel.remove({ tag_id })
}

async function find(tag_id) {
    return TagModel.findOne({ tag_id }).populate('ideas')
}

module.exports = {
    findAll,
    find,
    add,
    del
}
