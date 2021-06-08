const tela = document.querySelector('.tela input')
const btn = document.querySelectorAll('.box-botoes input')

console.log(btn)
btn.forEach(item =>{
    item.addEventListener('click',()=>{
        if(item.value == 'C'){
            tela.value = ''
        }else if(item.value == '<'){
            let valorUnit = tela.value
            tela.value = valorUnit.substring(0,valorUnit.length -1)
        }else if(item.value == '='){
            if(item.value == ''){
                tel.value = '0'
            }else{
                let res = eval(tela.value)
                tela.value = res
            }
        }else{
            tela.value += item.value
            console.log(tela.value)
        }
    })
})