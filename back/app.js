const express = require('express')
const cors = require('cors')
const { createToken } = require('./src/services/crypto.config.js')
const app = express()
const port = 4010

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/createToken', async (req, res) => {
  try {
    console.log('req.body', req.body);
    const { wallet } = req.body
    return await createToken(wallet)
  } catch (error) {
    res.send('Hello World!')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})