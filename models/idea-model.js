const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const IdeaSchema = mongoose.Schema({
    summary: {
        type: String,
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }]
})
IdeaSchema.plugin(AutoIncrement, {inc_field: 'id'})

const IdeaModel = mongoose.model('Idea', IdeaSchema)

module.exports = IdeaModel
