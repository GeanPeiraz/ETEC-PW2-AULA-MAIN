const sequelize  = require('sequelize');

const connection = require('../database/database');

const livro = connection.define(
    'tbl_livro',
    {
        nome_livro:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        autor_livro:{
            type: sequelize.STRING(500),
            allowNull:false
      
        },
        categoria_livro:{
            type: sequelize.STRING(500),
            allowNull:false

        },
    }

);

//livro.sync({force:true});


module.exports = livro; 