function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.querySelector('#resultados-pesquisa');

    // Inicializa uma string vazia para armazenar os resultados 
    let resultados = "";

    let campoPesquisa = document.querySelector('#campo-pesquisa').value

    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
        
        // Condção para pesquisar pelo atleta específico
        if (dado.titulo.includes(campoPesquisa)) {
            // Cria um novo elemento
            // Constrói o HTML de cada resultado, utilizando template literals (``) para facilitar a interpolação
            resultados += `
      <div class="item-resultado"> 
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta"> ${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Saiba mais!</a>
      </div>`;
        }
    }
 // Atribui o HTML construído à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}

