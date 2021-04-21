// Sintaxis common js //
// const express = require('express');

// Sintaxis Import // 
import express from 'express';
import router from './routes/index.js';


const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next) => {

    const year = new Date()

    res.locals.actualYear = year.getFullYear()

    return next();

});


// Definir carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);


app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})

