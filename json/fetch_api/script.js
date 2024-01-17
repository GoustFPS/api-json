// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario')
const usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario = document.getElementById('helper-text-usuario')

// 2. Funções
function gerarUsuario(){
//(METODO DIDÁTICO)const resposta = fetch('https://random-data-api.com/api/v2/users')
//     console.log(resposta);

// const tratarResp =    resposta.then((res)=> {
//         console.log(res)
//         return res.json()
//     })
//     tratarResp.then ((data) =>{
//         console.log(data) })// 
helperTextUsuario.innerText = `Carregando...`
const resposta = fetch('https://random-data-api.com/api/v2/users')
.then((res) => res.json())
.then((data) => {
// Criando elemento
const usuario = document.createElement('div')
// Manipulando elemento
usuario.innerHTML = `
<img src="${data.avatar}">
<span><strong>Username:</strong> ${data.username}</strong></span>`
usuario.classList.add('usuario')
// Adicionando no DOM
usuariosContainer.appendChild(usuario)
// Limpar o campo
helperTextUsuario.innerText= ``
console.log(data)
})
.catch((error) => {
    helperTextUsuario.innerText = `Não foi possível gerar um usuário`
    alert('Não foi possível gerar um usuário')
    console.log(error)
})
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)

// -------- Gerador de postagens -------- //
// 1. Captura de elementos
const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')
const btnPost = document.getElementById('btn-post')
const postContainer = document.getElementById('posts-container')
const helperTextPost = document.getElementById('helper-text-post')

// 2. Funções
function gerarPost(e){
    helperTextPost.innerText = ''
    e.preventDefault()

    const jsonBody = JSON.stringify({
        titulo: postTitle.value,
        mensagem: postBody.value
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: jsonBody
    })

    .then(res => res.json())
    .then(data => {
        console.log(data)

        const post = document.createElement('div')
        post.classList.add('postagem')
    post.innerHTML = `
        <h3>${data.id} - ${data.titulo}</h3>
        <p>${data.mensagem}</p>
    `
    postContainer.appendChild(post)

        // Limpar o formulário
        postTitle.value = ''
        postBody.value = ''
        alert('Postagem criada com sucesso!')
    })
    .catch((error) => {
        console.log(error)
        helperTextPost.innerText = 'Não foi possível gerar a postagem'
    })
}

// 3. Eventos
    btnPost.addEventListener('click', (e) => gerarPost(e))