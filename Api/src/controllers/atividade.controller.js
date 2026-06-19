const prisma = require("../data/prisma");

const cadastrarAtividade = async (req, res) => {
    const data = req.body;

    const item = await prisma.atividade.create({
        data
    });

    res.status(201).json(item);
};

const listarAtividade = async (req, res) => {
    const lista = await prisma.atividade.findMany();

    res.status(200).json(lista);
};

const buscarAtividade = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.atividade.findUnique({
        where: { id: Number(id) }
    });

    res.status(200).json(item);
};

const atualizarAtividade = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.atividade.update({
        where: { id: Number(id) },
        data: dados
    });

    res.status(200).json(item);
};

const excluirAtividade = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.atividade.delete({
        where: { id: Number(id) }
    });

    res.status(200).json(item);
};

module.exports = {
    cadastrarAtividade,
    listarAtividade,
    buscarAtividade,
    atualizarAtividade,
    excluirAtividade
};