fetch (`https://viacep.com.br/ws/01001000/json/`).then(response => {
    return response.json()

}).then(corpo => {
    document.getElementById("rua").value = corpo.logradouro;
    document.getElementById("bairro").value = corpo.bairro;
    document.getElementById("cidade").value = corpo.localidade;
    document.getElementById("estado").value = corpo.uf;

})