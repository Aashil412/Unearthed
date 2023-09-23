import express from "express";
import giftsRouter from './routes/gifts.js'
const app = express()

app.use('/public',express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
  })
  
app.use('/gifts',giftsRouter)

app.listen(3001, () => {
    console.log('Server listening on http://localhost:3001')
})