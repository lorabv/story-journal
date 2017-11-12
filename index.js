const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('./database-connection')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'pug')

const idea = require('./routes/idea')
const tag = require('./routes/tag')

app.use('/idea', idea)
app.use('/tag', tag)

app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server listening.')
})
