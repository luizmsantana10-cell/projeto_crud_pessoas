//importando arquivos
import{calDesconto} from './script_calculos.js'

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

    //CHAMANDO A FUNÇAO addpessoa E PASSANDO O OBJETO LITERAL pessoa
    addPessoa(pessoa)

    formPessoa.reset()

})

//CRIANDO A FUNÇÃO ADICIONAR PESSOA
const addPessoa = (objPessoa) => {
    //ADICIONADO O OBJETO LITERAL NO ARRAY PESSOAS
    pessoas.push(objPessoa)

    listpessoas()
}

//FUNÇAO PARA LISTAR PESSOAS DO ARRAY
const listpessoas = () => {

    divLista.innerHTML = ''


    pessoas.forEach((elem, i) =>{

        const result = calDesconto(elem)


        divLista.innerHTML += `${i + 1} -
        Nome: ${elem.nome} <br>
        Idade: ${elem.idade} anos,<br>
        Renda: ${parseFloat(elem.renda).toFixed(2).replace('.', ',')} <br>
        Desconto: ${calDesconto(elem).toFixed(2).replace('.', ',')}<br>
        Resultado final: ${(elem.renda - result).toFixed(2).replace('.', ',')}`

    })
}
