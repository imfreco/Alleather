const express = require('express')
//const nodemailer = require('nodemailer')
const morgan = require('morgan')
const server = express()

//settings
server.set('port', 3000)

//middlewares
server.use(morgan('dev'))
server.use(express.json())

//routes
server.use('/api/person', require('./routes/person'))
server.use('/api/article', require('./routes/article'))
server.use('/api/functionality', require('./routes/functionality'))
server.use('/api/employee', require('./routes/employee'))
server.use('/api/phone_per', require('./routes/phone_per'))
server.use('/api/provider', require('./routes/provider'))
server.use('/api/categorie',require('./routes/categorie'))
server.use('/api/size',require('./routes/size'))
server.use('/api/color',require('./routes/color'))
server.use('/api/stock',require('./routes/stock'))
server.use('/api/wish',require('./routes/wish'))
server.use('/api/invoice',require('./routes/invoice'))
server.use('/api/detail',require('./routes/detail'))

//static files
server.use(express.static(__dirname + '/public'))

//server is listening
server.listen(server.get('port'), () => {
    console.log('Server on port ' + server.get('port'))
})