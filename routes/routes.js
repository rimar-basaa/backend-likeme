const express = require('express');
const { traerPosts, agregarPosts } = require('../consultas');
const router = express.Router();

router.get("/posts", async (req, res) => {
    const resultado = await traerPosts();
    res.json(resultado);
});

router.post("/posts", async (req, res) => {
    console.log(req.body);
    const data = req.body;
    if (data.titulo == '' || data.url == '' || data.descripcion == ''){
        res.status(400).json({ message: "TODOS los campos son Obligatorios" });//prueba
        //res.send("TODOS los campos son Obligatorios");
        console.log("TODOS los campos son Obligatorios")
    } else {
        const { titulo, url, descripcion } = req.body;
        await agregarPosts(titulo, url, descripcion);
        res.status(200).json({ message: "Posts agregado" });//prueba
        //res.send("posts agregado");
        console.log("posts agregado");
    };
    
});

module.exports = router;