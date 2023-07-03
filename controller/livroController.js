const express = require('express');
const livroModel = require('../model/livroModel');

const router = express.Router();

router.post('/categoria/inserir', (req,res)=>{

    let nome_categoria = req.body.nome_categoria;
    
    categoriaModel.create(
        {nome_categoria}
    ).then(
        ()=>{
            res.send('CATEGORIA INSERIDA')
        }   
    )

res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

router.get('/categoria/selecionar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO!');

})


router.put('/categoria/alterar', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

router.delete('/categoria/excluir', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.exports = router;