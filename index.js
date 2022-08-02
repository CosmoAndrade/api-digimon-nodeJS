const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000

const api = axios.create({
    baseURL:"https://digimon-api.vercel.app/api/digimon"
})


app.get('/', async (req, res) => {
    const  retorno =  await api.get("https://digimon-api.vercel.app/api/digimon")
  res.send(retorno.data)
})

app.get('/:name/:id', async (req, res) => {
    const {name , id } = req.params

    const  retorno =  await api.get(`/${name}/${id}`)
  res.send(retorno.data)
  
  //http://localhost:3000/name/agumon
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
