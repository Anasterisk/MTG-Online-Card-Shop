const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ListRouter =  require('./ListRouter')
const CardRouter =  require('./CardRouter')

Router.use('/users',UserRouter)
Router.use('/lists',ListRouter)
Router.use('/cards',CardRouter)

module.exports = Router