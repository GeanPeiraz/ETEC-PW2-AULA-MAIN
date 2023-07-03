const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const livroController = require('./controller/livroController');
app.use('/', livroController);

const categoriaController = require('./controller/livroController');
app.use('/', categoriaController);

app.listen(3000, ()=>{ 
    console.log('SERVIDOR RODANDO EM - http://localhost:3000'); 
});