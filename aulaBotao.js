let botao = document.querySelector(".botao");
let contaClikes = 0;
botao.addEventListener("click", e =>{
    contaClikes++;
    if(contaClikes >= 10){
    botao.style.background = "red";
    botao.innerHTML = "Quebrei"
    }
});
   