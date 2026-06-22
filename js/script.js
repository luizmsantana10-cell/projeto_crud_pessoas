// PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

//CRIANDO O ARRAY PESSOAS
const pessoas = []


//CAPTURA O EVENTO submit do formulario
formPessoa.addEventListener('submit', (evt) => {
    //INTERROMPE O EFEITO PADRÃO DE SUBMETER OD DADOS DO FORMULARIO
    evt.preventDefault()

    //CRIAR UM OBJETO FORMULARIO
    const dadosFormPessoa = new FormData(formPessoa)

    //CRIAR UM OBJETO LITERAL
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

})

