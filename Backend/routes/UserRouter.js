const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/users', controller.GetAllUserProfile)
Router.get('/:userId', controller.GetIndividualUserProfile)
Router.delete('/:userId', controller.DeleteAccount)

//Auth
Router.post('/register', controller.CreateNewUser)
Router.post('/login', controller.Login)
Router.post('/login1', controller.Login1)
