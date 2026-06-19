import express from 'express'
import bookRoutes from './routes/bookRoutes.js'
import db from './db.js'
import dotenv from 'dotenv'
const app = express()

app.use(express.json())
dotenv.config()

app.use(express.static('public'))

app.use('/api/books',bookRoutes)
app.get('/',(req,res)=>{
    res.send('Welcome to book managemt system!!')
})

const PORT = process.env.PORT||5001
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
    db()
})