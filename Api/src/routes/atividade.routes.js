const express = require("express");
const router = express.Router();

const { 
    cadastrarAtividade, 
    listarAtividade, 
    buscarAtividade, 
    atualizarAtividade, 
    excluirAtividade
    } = require("../controllers/atividade.controller");

router.post("/cadastrar", cadastrarAtividade);
router.get("/listar", listarAtividade);
router.get("/buscar/:id", buscarAtividade);
router.put("/atualizar/:id", atualizarAtividade);
router.delete("/excluir/:id", excluirAtividade);

module.exports = router;