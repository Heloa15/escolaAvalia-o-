const prisma = require("../data/prisma");

const cadastrarProfessor = async (req, res) => {
    const data = req.body;

    const item = await prisma.professor.create({
        data
    });

    res.json(item).status(201).end();
};

const listarProfessor = async (req, res) => {
    const lista = await prisma.professor.findMany();

    res.json(lista).status(200).end();
};

const buscarProfessor = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.professor.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizarProfessor = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.professor.update({
        where: { id : Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluirProfessor = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.professor.delete({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrarProfessor,
    listarProfessor,
    buscarProfessor,
    atualizarProfessor,
    excluirProfessor
}
