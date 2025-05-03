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
    // Paletas para detalhes
    if (layout === 'futurista') {
        style = `body { background: #0A0A1E; color: #00FFFF; font-family: 'Orbitron', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #000033; border-radius: 24px; box-shadow: 0 8px 32px #00FFFF; border: 2.5px solid #00FFFF; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 2em; color: #00FFFF; margin-bottom: 16px; text-transform: uppercase; text-shadow: 0 0 8px #FF00FF, 0 0 2px #33FF33; }
        .product-description { font-size: 1em; color: #33FF33; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 16px; box-shadow: 0 2px 10px #00FFFF; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Orbitron', sans-serif; }
        .btn-back { background: #00FFFF; color: #000033; }
        .btn-whatsapp { background: #33FF33; color: #000033; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1.1em; } }`;
    } else if (layout === 'futurista2') {
        style = `body { background: #120458; color: #4CC9F0; font-family: 'Orbitron', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #3A0CA3; border-radius: 24px; box-shadow: 0 8px 32px #6E3CBC; border: 2.5px solid #4CC9F0; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 2em; color: #4CC9F0; margin-bottom: 16px; text-transform: uppercase; text-shadow: 0 0 8px #F72585; }
        .product-description { font-size: 1em; color: #F72585; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 16px; box-shadow: 0 2px 10px #6E3CBC; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Orbitron', sans-serif; }
        .btn-back { background: #4CC9F0; color: #120458; }
        .btn-whatsapp { background: #F72585; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1.1em; } }`;
    } else if (layout === 'futurista3') {
        style = `body { background: #10002B; color: #C77DFF; font-family: 'Orbitron', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #3C096C; border-radius: 24px; box-shadow: 0 8px 32px #7B2CBF; border: 2.5px solid #C77DFF; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 2em; color: #C77DFF; margin-bottom: 16px; text-transform: uppercase; text-shadow: 0 0 8px #7B2CBF; }
        .product-description { font-size: 1em; color: #7B2CBF; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 16px; box-shadow: 0 2px 10px #C77DFF; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Orbitron', sans-serif; }
        .btn-back { background: #C77DFF; color: #10002B; }
        .btn-whatsapp { background: #7B2CBF; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1.1em; } }`;
    } else if (layout === 'executivo') {
        style = `body { background: #DAD7CD; color: #2C3333; font-family: 'Roboto', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #fff; border-radius: 10px; box-shadow: 0 2px 10px #1F4172; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 1.2em; color: #0F2C59; margin-bottom: 16px; font-weight: 600; }
        .product-description { font-size: 1em; color: #A27B5C; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 10px; box-shadow: 0 2px 10px #DAD7CD; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 6px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Roboto', sans-serif; }
        .btn-back { background: #0F2C59; color: #fff; }
        .btn-whatsapp { background: #A27B5C; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1em; } }`;
    } else if (layout === 'executivo2') {
        style = `body { background: #E8E8E8; color: #2C3639; font-family: 'Roboto', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #fff; border-radius: 16px; box-shadow: 0 2px 10px #3F4E4F; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 1.2em; color: #3F4E4F; margin-bottom: 16px; font-weight: 600; }
        .product-description { font-size: 1em; color: #A27B5C; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 12px; box-shadow: 0 2px 10px #3F4E4F; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 6px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Roboto', sans-serif; }
        .btn-back { background: #3F4E4F; color: #fff; }
        .btn-whatsapp { background: #A27B5C; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1em; } }`;
    } else if (layout === 'executivo3') {
        style = `body { background: #F1F1F1; color: #1A374D; font-family: 'Roboto', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #fff; border-radius: 8px; box-shadow: 0 2px 10px #6998AB; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 1.2em; color: #1A374D; margin-bottom: 16px; font-weight: 700; }
        .product-description { font-size: 1em; color: #406882; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 8px; box-shadow: 0 2px 10px #6998AB; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 4px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Roboto', sans-serif; }
        .btn-back { background: #406882; color: #fff; }
        .btn-whatsapp { background: #6998AB; color: #fff; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1em; } }`;
    } else {
        // fallback futurista
        style = `body { background: #0A0A1E; color: #00FFFF; font-family: 'Orbitron', sans-serif; margin:0; padding:0; }
        .container { max-width: 900px; margin: 0 auto; padding: 30px 10px; }
        .product-details { background: #000033; border-radius: 24px; box-shadow: 0 8px 32px #00FFFF; border: 2.5px solid #00FFFF; padding: 30px; }
        .product-header { text-align: center; margin-bottom: 30px; }
        .product-name { font-size: 2em; color: #00FFFF; margin-bottom: 16px; text-transform: uppercase; text-shadow: 0 0 8px #FF00FF, 0 0 2px #33FF33; }
        .product-description { font-size: 1em; color: #33FF33; margin-bottom: 20px; }
        .product-images { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
        .product-images img { max-width: 320px; border-radius: 16px; box-shadow: 0 2px 10px #00FFFF; }
        .action-buttons { display: flex; justify-content: center; gap: 16px; margin-top: 30px; }
        .btn { padding: 12px 24px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; transition: all 0.3s; text-decoration: none; font-family: 'Orbitron', sans-serif; }
        .btn-back { background: #00FFFF; color: #000033; }
        .btn-whatsapp { background: #33FF33; color: #000033; }
        .btn:hover { opacity: 0.85; }
        @media (max-width: 768px) { .product-images { flex-direction: column; align-items: center; } .product-images img { max-width: 100%; } .action-buttons { flex-direction: column; } .product-name { font-size: 1.1em; } }`;
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

// Função de busca
function filtrarProdutos(termo) {
    const produtosFiltrados = produtosGlobais.filter(produto => 
        produto.nome.toLowerCase().includes(termo.toLowerCase())
    );
    renderProdutos(produtosFiltrados);
}

document.getElementById('busca').addEventListener('input', (e) => {
    filtrarProdutos(e.target.value);
});

// Carrega os produtos e inicializa tudo
fetch('produtos.json')
    .then(response => response.json())
    .then(produtos => {
        produtosGlobais = produtos.slice().sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
        renderProdutos(produtosGlobais);
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
