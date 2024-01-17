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

// 2. Funções

// 3. Eventos