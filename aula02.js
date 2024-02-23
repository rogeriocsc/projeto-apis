const endpoint="http://localhost:8080/"
let res=fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})

// Conjunto de dados que a API está retornando.