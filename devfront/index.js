
const express = require("express")
const app = express()
const PORT = 3000

//cada um é uma rota
app.get("/", (req,res)=>{
    res.send("oi node")

})

app.get("/infasul", (req,res)=>{
    res.send("oi infasul")

})


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

console.log("oi node")