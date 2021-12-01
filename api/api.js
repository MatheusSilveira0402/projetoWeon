const express = require('express')
const app = express()
const multer = require('multer')



app.use(function(req, res, next){

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./../src/image")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})
console.log(upload.single("file"))

app.get("/upload", (req, res) => {
    res.send('to aqui')
})


app.post("/upload",upload.single('file') ,(req, res) => {
    console.log(req.body)
    res.send("Aquivo recebido");
})

app.listen(8000, ()=> {
    console.log('servidor rodando na porta 8000')
})