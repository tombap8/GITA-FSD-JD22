const express = require('express')
let cors = require('cors')
const app = express()
const port = 3000;

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/1/:id/:pw', (req, res)=>{
    const q = req.params

    console.log(q.id)
    console.log(q.pw)



    res.send({'user': q.pw})
})

app.get('/2/:id', (req, res)=>{
  const p = req.params
  const q = req.query

  console.log(p)
  console.log(q)
  res.send({'note':'2'})
  })

app.get('/3/:name/', (req, res)=>{
  const {name} = req.params

  if(name == "kosi"){
    console.log("1")
    res.send({'note':"kosi1"})
  }
  else if(name == "sokismi"){
    console.log("2")
    res.send({'note':"kosi2"})
  }
  else if(name == "krsil"){
    console.log("3")
    res.send({'note':"kosi3"})
  }
  else{
    console.log("?")
    res.send({'note':'?'})
  }
})

app.get('/4/:id', (req, res)=>{
  
  res.send({'note':'4'})
})


app.listen(port, ()=>{
    console.log("start");
})