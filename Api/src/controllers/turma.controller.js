const prisma = require("../data/prisma");

const cadastrarTurma = async (req, res) => {
    const data = req.body;

    const item = await prisma.turma.create({
        data
    });

    res.status(201).json(item);
};

const listarTurma = async (req, res) => {
    const lista = await prisma.turma.findMany();

    res.status(200).json(lista);
};

const buscarTurma = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.turma.findUnique({
        where: { id: Number(id) }
    });

    res.status(200).json(item);
};

const atualizarTurma = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.turma.update({
        where: { id: Number(id) },
        data: dados
    });

    res.status(200).json(item);
};

const excluirTurma = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.turma.delete({
        where: { id: Number(id) }
    });

    res.status(200).json(item);
};

module.exports = {
    cadastrarTurma,
    listarTurma,
    buscarTurma,
    atualizarTurma,
    excluirTurma
};