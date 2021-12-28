const poke = document.querySelector('[data-input]')
const botao = document.querySelector('[data-botao]')

botao.addEventListener('click', () => {
    const valor = poke.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    .then((Response) => {
        return Response.json();
    })

    .then((data) => {
        //apagapoke()
        listar(data)
    })

    .catch((erro) => {
        console.log('Erro: ' + erro)
    })

})

function listar(data) {
    const ul = document.querySelector('[data-ul]')
    const li = document.createElement('li')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    li.setAttribute('data-li', 'lista')

    div1.classList.add('col')
    div2.classList.add('col')

    li.appendChild(div1)
    li.appendChild(div2)

    ul.appendChild(li)
    li.classList.add('row', `${data.types[0].type.name}`, 'm-2', 'rounded-pill')

    const id = document.createElement('p')
    div1.appendChild(id)

    id.innerText = '#' + data.id

    const nome = document.createElement('p')
    div1.appendChild(nome)

    nome.innerText = data.name

    const tipo = document.createElement('p')
    div1.appendChild(tipo)

    tipo.innerText = data.types[0].type.name

    const img = document.createElement('img')
    img.setAttribute('src', `${data.sprites.front_default}`)

    div2.appendChild(img)

}

function apagapoke() {
    const lista = document.querySelectorAll('[data-li]')
    lista.forEach(pokemon => {
        pokemon.classList.add('d-none')
    })

}


