const API = "http://localhost:3000";

async function login() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {

        const resposta = await fetch(`${API}/professor/listar`);
        const professores = await resposta.json();

        const professor = professores.find(p => p.email === email && p.senha === senha);

        if (professor) {

            localStorage.setItem("professorId", professor.id);
            localStorage.setItem("professorNome", professor.nome);

            window.location.href = "professor.html";

        } else {

            alert("Email ou senha inválidos.");

        }

    } catch {

        alert("Erro ao conectar ao servidor.");

    }

}

async function listarTurmas() {

    const tabela = document.getElementById("listaTurmas");

    if (!tabela) return;

    tabela.innerHTML = "";

    const resposta = await fetch(`${API}/turma/listar`);
    const turmas = await resposta.json();

    turmas.forEach(turma => {

        tabela.innerHTML += `
            <tr>
                <td>${turma.id}</td>
                <td>${turma.nome}</td>
                <td>
                    <button onclick="visualizar(${turma.id})">
                        Visualizar
                    </button>

                    <button onclick="excluirTurma(${turma.id})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;

    });

}

async function cadastrarTurma() {

    const nome = document.getElementById("nomeTurma").value;
    const professorId = Number(localStorage.getItem("professorId"));

    if (nome == "") {

        alert("Digite o nome da turma.");
        return;

    }

   await fetch(`${API}/turma/cadastrar`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nome,
        professorId
    })
});

    alert("Turma cadastrada.");

    window.location.href = "professor.html";

}

async function excluirTurma(id) {

    if (confirm("Deseja excluir esta turma?")) {

        await fetch(`${API}/turma/excluir/${id}`, {
            method: "DELETE"
        });

        listarTurmas();

    }

}

function visualizar(id) {

    localStorage.setItem("turmaId", id);

    window.location.href = "atividades.html";

}

async function listarAtividades() {

    const tabela = document.getElementById("listaAtividades");

    if (!tabela) return;

    tabela.innerHTML = "";

    const resposta = await fetch(`${API}/atividade/listar`);
    const atividades = await resposta.json();

    const turmaId = Number(localStorage.getItem("turmaId"));

    atividades
        .filter(a => a.turmaId === turmaId)
        .forEach(atividade => {

            tabela.innerHTML += `
                <tr>
                    <td>${atividade.id}</td>
                    <td>${atividade.descricao}</td>
                    <td>
                        <button onclick="excluirAtividade(${atividade.id})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;

        });

}

async function cadastrarAtividade() {

    const descricao = document.getElementById("descricao").value;
    const turmaId = Number(localStorage.getItem("turmaId"));

    if (descricao == "") {

        alert("Digite a descrição.");
        return;

    }

    const resposta = await fetch(`${API}/atividade/cadastrar`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            descricao,
            turmaId
        })

    });

    alert("Atividade cadastrada.");

    window.location.href = "atividades.html";

}

async function excluirAtividade(id) {

    if (confirm("Deseja excluir esta atividade?")) {

        await fetch(`${API}/atividade/excluir/${id}`, {
            method: "DELETE"
        });

        listarAtividades();

    }

}

function logout() {

    localStorage.clear();

    window.location.href = "index.html";

}

window.onload = () => {

    listarTurmas();
    listarAtividades();

};