// script.js
document.querySelectorAll('.opcoes-papel button').forEach(button => {
    button.addEventListener('click', function() {
        const imagem = this.getAttribute('data-imagem');
        document.getElementById('produto-imagem').src = imagem;
    });
});
