const listBotoes = document.querySelectorAll('.box-botoes input')
const tela = document.querySelectorAll('.tela input')

function clicar(event){
    tela[0].value += event;
}
function apagar(){
    tela[0].value =''
}
function excluirUltimo(){
    let a = clicar()
    console.log(a)
}