const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const TagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ideas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Idea'
    }]
})
TagSchema.plugin(AutoIncrement, {inc_field: 'tag_id'})

const TagModel = mongoose.model('Tag', TagSchema)

module.exports = TagModel
