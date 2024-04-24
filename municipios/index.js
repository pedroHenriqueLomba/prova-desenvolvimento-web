async function carregaInsereCidades() {
    const urlParams = new URLSearchParams(window.location.search);
    const uf = urlParams.get('uf');
    if (!uf) {
        window.location.href = '/';
    }
    const cidades = await (await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)).json()
    const listaCidades = document.getElementById('lista-municipios');
    cidades.forEach(cidade => {
        console.log(cidade);
        const item = document.createElement('li');
        item.className = 'list-item';
        const span = document.createElement('span');
        const button = document.createElement('button');
        span.innerHTML = cidade.nome;
        button.innerHTML = 'Favoritar';
        item.appendChild(span);
        item.appendChild(button);
        listaCidades.appendChild(item);
        button.addEventListener('click', () => {
            const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            favoritos.push({ nome: cidade.nome });
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
        });
    });
}

function insereNomePagina() {
    const titulo = document.getElementById('titulo-pagina');
    const urlParams = new URLSearchParams(window.location.search);
    const uf = urlParams.get('uf');
    titulo.innerHTML = `Municípios de ${uf}`;
}

carregaInsereCidades();
insereNomePagina();