const express = require("express");

const router = express.Router();

const { 
    cadastrarProfessor,
    listarProfessor,
    atualizarProfessor,
    buscarProfessor,
    excluirProfessor} = require("../controllers/professor.controller");

router.post("/cadastrar", cadastrarProfessor);
router.get("/listar", listarProfessor);
router.get("/buscar/:id", buscarProfessor);
router.put("/atualizar/:id", atualizarProfessor);
router.delete("/excluir/:id", excluirProfessor);

module.exports = router;
