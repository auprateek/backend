const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000
const JsonData = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
};

app.get('/', (req, res) => {
  res.send('Hello Gippi, Chippi, Tippi!')
})
app.get('/login', (req,res)=>{
  res.send('<h1>Hello Prateek </h1>')
})
app.get('/getdata', (req, res)=> {
  res.json(JsonData);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})