// script.js
document.querySelectorAll('.opcoes-papel button').forEach(button => {
    button.addEventListener('click', function() {
        const imagem = this.getAttribute('data-imagem');
        document.getElementById('produto-imagem').src = imagem;
    });
});

// Função para abrir detalhes do produto em nova guia (mantenha a versão mais recente que você já usa)
function abrirDetalhes(produto) {
    // ... (sua função já ajustada para detalhes) ...
}

// Variável global para os produtos
let produtosGlobais = [];

// Renderiza os produtos na tela
function renderProdutos(produtos) {
    const container = document.getElementById('produtos');
    container.innerHTML = '';
    produtos.forEach((produto, idx) => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.id = 'produto-' + idx;

        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        img.onclick = () => abrirDetalhes(produto);

        const nomeDiv = document.createElement('div');
        nomeDiv.className = 'produto-nome';
        nomeDiv.textContent = produto.nome;

        div.appendChild(img);
        div.appendChild(nomeDiv);
        container.appendChild(div);

        if (idx < produtos.length - 1) {
            const sep = document.createElement('div');
            sep.className = 'separador';
            container.appendChild(sep);
        }
    });
}

// Renderiza a barra de letras A-Z
function renderLetras(produtos) {
    const letrasDiv = document.getElementById('letras');
    letrasDiv.innerHTML = '';
    // Sempre mostra A-Z
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const btn = document.createElement('button');
        btn.textContent = letra;
        // Só habilita se houver produto com essa letra
        btn.disabled = !produtos.some(p => p.nome[0].toUpperCase() === letra);
        btn.onclick = () => {
            const idx = produtos.findIndex(p => p.nome[0].toUpperCase() === letra);
            if (idx !== -1) {
                document.getElementById('produto-' + idx).scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        };
        letrasDiv.appendChild(btn);
    }
}

// Carrega os produtos e inicializa tudo
fetch('produtos.json')
    .then(response => response.json())
    .then(produtos => {
        // Ordena os produtos por nome (ordem alfabética)
        produtosGlobais = produtos.slice().sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
        renderProdutos(produtosGlobais);
        renderLetras(produtosGlobais);

        // Filtro por nome
        document.getElementById('busca').addEventListener('input', function() {
            const termo = this.value.trim().toLowerCase();
            const filtrados = produtosGlobais
                .filter(p => p.nome.toLowerCase().includes(termo))
                .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
            renderProdutos(filtrados);
            renderLetras(filtrados);
        });
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
