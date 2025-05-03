// script.js
document.querySelectorAll('.opcoes-papel button').forEach(button => {
    button.addEventListener('click', function() {
        const imagem = this.getAttribute('data-imagem');
        document.getElementById('produto-imagem').src = imagem;
    });
});

// Função para abrir detalhes do produto em nova guia
function abrirDetalhes(produto) {
    let escala = '';
    const nomeLower = produto.nome.toLowerCase();
    if (nomeLower.includes('guardanapo')) {
        escala = "escala_guardanapo.png";
    } else if (nomeLower.includes('saco')) {
        escala = "escala_saco.png";
    }
    const numeroWpp = typeof WHATSAPP_NUMBER !== 'undefined' ? WHATSAPP_NUMBER : '';
    const layout = typeof LAYOUT_STYLE !== 'undefined' ? LAYOUT_STYLE : 'futurista';
    const linkWpp = `https://wa.me/${numeroWpp}?text=Olá! Encontrei este produto no seu catálogo e gostaria de comprá-lo: ${encodeURIComponent(produto.nome)}%0A${encodeURIComponent(produto.imagem)}`;
    const win = window.open('', '_blank');
    let style = '';
    // FUTURISTA 2
    if (layout === 'futurista2') {
        style = `body { background: #181c2f; color: #fff; font-family: 'Orbitron', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #23284a; border-radius: 24px; box-shadow: 0 8px 32px #3f51b5aa; border: 2.5px solid #3f51b5; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 2em; color: #3f51b5; margin-bottom: 16px; text-transform: uppercase; }
        .product-description { font-size: 1em; color: #b0c7ff; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 16px; box-shadow: 0 2px 10px #3f51b5aa; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Orbitron', sans-serif; }
        .btn-back { background: #3f51b5; color: #fff; }
        .btn-whatsapp { background: #25D366; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1.1em; } }`;
    }
    // FUTURISTA 3
    else if (layout === 'futurista3') {
        style = `body { background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%); color: #fff; font-family: 'Orbitron', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #1a2a3a; border-radius: 24px; box-shadow: 0 8px 32px #00c6ff99; border: 2.5px solid #00c6ff; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 2em; color: #00c6ff; margin-bottom: 16px; text-transform: uppercase; }
        .product-description { font-size: 1em; color: #b0eaff; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 16px; box-shadow: 0 2px 10px #00c6ff99; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Orbitron', sans-serif; }
        .btn-back { background: #00c6ff; color: #fff; }
        .btn-whatsapp { background: #25D366; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1.1em; } }`;
    }
    // EXECUTIVO 2
    else if (layout === 'executivo2') {
        style = `body { background: #f0f4f8; color: #222; font-family: 'Roboto', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #fff; border-radius: 16px; box-shadow: 0 2px 10px #b2bec3; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 1.2em; color: #0984e3; margin-bottom: 16px; font-weight: 600; }
        .product-description { font-size: 1em; color: #444; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 12px; box-shadow: 0 2px 10px #b2bec3; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 6px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Roboto', sans-serif; }
        .btn-back { background: #0984e3; color: #fff; }
        .btn-whatsapp { background: #25D366; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1em; } }`;
    }
    // EXECUTIVO 3
    else if (layout === 'executivo3') {
        style = `body { background: #eaeaea; color: #222; font-family: 'Roboto', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #fff; border-radius: 8px; box-shadow: 0 2px 10px #636e72; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 1.2em; color: #636e72; margin-bottom: 16px; font-weight: 700; }
        .product-description { font-size: 1em; color: #444; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 8px; box-shadow: 0 2px 10px #636e72; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 4px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Roboto', sans-serif; }
        .btn-back { background: #636e72; color: #fff; }
        .btn-whatsapp { background: #25D366; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1em; } }`;
    }
    // EXECUTIVO (padrão)
    else if (layout === 'executivo') {
        style = `body { font-family: 'Roboto', sans-serif; background: #f5f5f5; color: #222; margin: 0; padding: 0; }
            .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
            .product-details { background: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 30px; }
            .product-header { text-align: center; margin-bottom: 30px; }
            .product-name { font-family: 'Roboto', sans-serif; font-size: 1.3em; color: #2c3e50; margin-bottom: 16px; text-transform: none; }
            .product-description { font-size: 1em; color: #444; margin-bottom: 20px; }
            .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
            .product-images img { max-width: 320px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
            .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
            .btn { padding: 12px 24px; border: none; border-radius: 6px; font-family: 'Roboto', sans-serif; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; }
            .btn-back { background: #2c3e50; color: #fff; }
            .btn-whatsapp { background: #25D366; color: #fff; }
            .btn:hover { opacity: 0.85; }
            @media (max-width: 768px) {
                .product-images { flex-direction: column; align-items: center; }
                .product-images img { max-width: 100%; }
                .action-buttons { flex-direction: column; }
                .product-name { font-size: 1em; }
            }
        `;
    } else {
        // FUTURISTA (padrão)
        style = `body { font-family: 'Roboto', sans-serif; background: #0a0a0a; margin: 0; padding: 0; color: #fff; }
            .container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
            .product-details { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 20px; padding: 40px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); }
            .product-header { text-align: center; margin-bottom: 40px; }
            .product-name { font-family: 'Orbitron', sans-serif; font-size: 2.5em; color: #00ff9d; margin-bottom: 20px; text-transform: uppercase; }
            .product-description { font-size: 1.2em; line-height: 1.6; color: #ccc; margin-bottom: 30px; }
            .product-images { display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; margin-bottom: 40px; }
            .product-images img { max-width: 400px; border-radius: 15px; box-shadow: 0 4px 20px rgba(0, 255, 157, 0.2); transition: transform 0.3s; }
            .product-images img:hover { transform: scale(1.05); }
            .action-buttons { display: flex; justify-content: center; gap: 20px; margin-top: 40px; }
            .btn { padding: 15px 30px; border: none; border-radius: 10px; font-family: 'Orbitron', sans-serif; font-size: 1.1em; cursor: pointer; transition: all 0.3s; text-decoration: none; }
            .btn-back { background: #333; color: #fff; }
            .btn-whatsapp { background: #25D366; color: #fff; }
            .btn:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0, 255, 157, 0.3); }
            @media (max-width: 768px) {
                .product-images { flex-direction: column; align-items: center; }
                .product-images img { max-width: 100%; }
                .action-buttons { flex-direction: column; }
                .product-name { font-size: 0.95em; word-break: break-word; line-height: 1.1; }
            }
        `;
    }
    win.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${produto.nome}</title>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <style>${style}</style>
        </head>
        <body>
            <div class="container">
                <div class="product-details">
                    <div class="product-header">
                        <h1 class="product-name">${produto.nome}</h1>
                        <p class="product-description">${produto.descricao || ''}</p>
                    </div>
                    <div class="product-images">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                        ${escala ? `<img src="${escala}" alt="Escala" class="escala-img">` : ''}
                    </div>
                    <div class="action-buttons">
                        <button class="btn btn-back" onclick="window.close()">
                            <i class="fas fa-arrow-left"></i> Voltar
                        </button>
                        <a href="${linkWpp}" class="btn btn-whatsapp" target="_blank">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
    win.document.close();
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

        // Imagem
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        img.onclick = () => abrirDetalhes(produto);
        div.appendChild(img);

        // Nome
        const nomeDiv = document.createElement('div');
        nomeDiv.className = 'produto-nome';
        nomeDiv.textContent = produto.nome;
        div.appendChild(nomeDiv);

        // Tags (opcional, se quiser adicionar depois)
        if (produto.tags && Array.isArray(produto.tags)) {
            const tagsDiv = document.createElement('div');
            tagsDiv.className = 'produto-tags';
            produto.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'produto-tag';
                tagEl.textContent = tag;
                tagsDiv.appendChild(tagEl);
            });
            div.appendChild(tagsDiv);
        }

        // Tamanhos (opcional, se quiser adicionar depois)
        if (produto.tamanhos && Array.isArray(produto.tamanhos)) {
            const tamanhosDiv = document.createElement('div');
            tamanhosDiv.className = 'produto-tamanhos';
            produto.tamanhos.forEach(tam => {
                const tamEl = document.createElement('span');
                tamEl.className = 'produto-tamanho';
                tamEl.textContent = tam;
                tamanhosDiv.appendChild(tamEl);
            });
            div.appendChild(tamanhosDiv);
        }

        // Botão VER MAIS
        const btn = document.createElement('button');
        btn.className = 'btn-vermais';
        btn.onclick = () => abrirDetalhes(produto);
        btn.innerHTML = `<span class=\"vermais-content\">VER MAIS <i class='fas fa-arrow-right'></i></span>`;
        div.appendChild(btn);

        container.appendChild(div);
    });
}

// Renderiza a barra de letras A-Z
function renderLetras(produtos) {
    const letrasDiv = document.getElementById('letras');
    letrasDiv.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const btn = document.createElement('button');
        btn.textContent = letra;
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

// Função de busca
function filtrarProdutos(termo) {
    const produtosFiltrados = produtosGlobais.filter(produto => 
        produto.nome.toLowerCase().includes(termo.toLowerCase())
    );
    renderProdutos(produtosFiltrados);
    renderLetras(produtosFiltrados);
}

// Event listeners
document.getElementById('busca').addEventListener('input', (e) => {
    filtrarProdutos(e.target.value);
});

// Carrega os produtos e inicializa tudo
fetch('produtos.json')
    .then(response => response.json())
    .then(produtos => {
        produtosGlobais = produtos.slice().sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
        renderProdutos(produtosGlobais);
        renderLetras(produtosGlobais);
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
