// HTTPS
// Hypet Text Transfer Protocol Secure
// Hyper Tex Markup Language

const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hola Koders!')
})

app.get('/holi', (req, res)=>{
    res.send('Entraste a Holi!')
})

app.listen(3000, (err) => {
    if(err){
        console.log(`Something went wrong ${err}`)
    }
    console.log("Listening on port 3000...")
})