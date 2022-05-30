const express = require('express');

let app = express();

// console.log(app);

// craindo rota
app.get('/', (req, res)=>res.send("ola Daniel"));
app.get('/contato', (req, res)=>res.send(["ola Daniel","de dia ", "de noite"]));

//craindo um servidor

app.listen(3000, ()=>console.log("servidor rodando na porta 3000"))