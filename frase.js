document.addEventListener('DOMContentLoaded', async () => {
    fraseExibicao = document.getElementById('FraseExibicao');
    autorFrase = document.getElementById('Autor');
    fraseExibicao.innerText = 'Carregando...';
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';
    const response = await fetch(url);
    const result = await response.json();
    FraseExibicao.innerText = result.data[0].quoteText;
    Autor.innerText = result.data[0].quoteAuthor;
});