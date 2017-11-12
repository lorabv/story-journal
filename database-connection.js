const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const hostname = 'localhost'
const database = 'story-journal'

mongoose.connect(`mongodb://${hostname}/${database}`, { useMongoClient: true })
