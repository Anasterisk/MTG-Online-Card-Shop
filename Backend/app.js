const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const { request } = require('express')

const PORT = process.env.PORT || 3001

const AppRouter = require('./routes/AppRouter')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response)=>{
    response.send({msg: 'Server Runing'})
})
app.use('/api',AppRouter)

app.listen(PORT,()=>console.log(`Server running on Port: ${PORT}`))