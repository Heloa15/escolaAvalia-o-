const express = require("express");

const router = express.Router();

const { 
    cadastrarTurma,
    listarTurma,
    atualizarTurma,
    buscarTurma,
    excluirTurma} = require("../controllers/turma.controller");

router.post("/cadastrar", cadastrarTurma);
router.get("/listar", listarTurma);
router.get("/buscar/:id", buscarTurma);
router.put("/atualizar/:id", atualizarTurma);
router.delete("/excluir/:id", excluirTurma);

module.exports = router;
