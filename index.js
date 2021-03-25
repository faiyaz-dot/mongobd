const express = require('express');


const app = express()

app.get('/', function (req, res) {
    res.send('I know how to oper node ..YAYA');
  })

  app.listen(3000, () => console.log('listening to port 3000'));