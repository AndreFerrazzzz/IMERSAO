function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.querySelector('#resultados-pesquisa');

    // Inicializa uma string vazia para armazenar os resultados 
    let resultados = "";

    let campoPesquisa = document.querySelector('#campo-pesquisa').value

    if (campoPesquisa == '') {
        section.innerHTML = 'Nada foi encontrado'
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
            titulo = dado.titulo.toLocaleLowerCase()
            descricao = dado.descricao.toLocaleLowerCase()
            tags = dado.tags.toLocaleLowerCase()

        // Condção para pesquisar pelo atleta específico pelo nome descrção ou palavra-chave
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
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

    //Se o resultado não tiver nada/ não existir  
    if (!resultados){
        section.innerHTML = '<p>Nada foi encontrado. Você precisa digitar um nome de atleta ou esporte</p>'
        return
    }


    // Atribui os resultados gerados na seção HTML
    section.innerHTML = resultados;
}

