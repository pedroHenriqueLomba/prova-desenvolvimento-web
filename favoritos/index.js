async function carregaInsereFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const listaFavoritos = document.getElementById('lista-favoritos');
    favoritos.forEach(favorito => {
        const item = document.createElement('li');
        item.className = 'list-item';
        const span = document.createElement('span');
        span.innerHTML = favorito.nome;
        item.appendChild(span);
        listaFavoritos.appendChild(item);
    });
}

carregaInsereFavoritos();