const express = require('express')
const app = express()
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "upload/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

app.get("/", (req, res) => {
    res.send('bem vindo')
})

app.post("/upload",upload.single("file") ,(req, res) => {
    res.send("Aquivo recebido");
})

app.listen(8000, ()=> {
    console.log('servidor rodando na porta 8000')
})