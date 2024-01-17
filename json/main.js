// console.log("Trabalhando com JSON");

// const objetoJS = {
//     nome: 'João',
//     idade: 27,
//     estrangeiro: false
// }


// const stringJSON = JSON.stringify(objetoJS)
// console.log(stringJSON);
// console.log(typeof(stringJSON));

// const parseJSON = JSON.parse(stringJSON)
// console.log(parseJSON);
// console.log(typeof(parseJSON));
// console.log(parseJSON.nome);
fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: {
        name: 'João Pedro',
        job: 'WEB DEV'
    }
} )
.then ((response) => response.json)
.then ((data) => console.log(data))
.catch((error) => console.log(error))