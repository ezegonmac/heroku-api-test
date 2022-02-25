const express = require('express')
const app = express()

//  Enviroment variable OR hardcoded value
//  Locally: port 3000 / Server: variable 
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})