function senha(){
    return '@hhhhh'.replace(/[h]/g, () =>     //replace substitua 
    ((Math.random() * 12 | 0).toString(12))
    )
}
console.log(senha())

const buton = document.querySelector('.buton')

buton.onclick = ()=>{
    const saida = document.querySelector('.saida').value = senha()
}

const qualquer = 'olaaa'.replace(/[a]/g,)


const dark = document.querySelector('.dark');
const btn = document.querySelector('.btn');



btn.onclick = function(){
    this.classList.toggle('active')
    dark.classList.toggle('active')
}

