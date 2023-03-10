
function operacao(num1,num2) {
    
    let desafio = document.getElementById("desafio").innerHTML = num1 + " + " + num2
    
    
    let opcao = document.getElementById("opcao").style.display = 'block'
    
    let nivel = document.getElementById("nivel").style.display = 'none'
        
    
        
    
    
    
    
    
    
    
    
    let maca = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpR6L3K5vIsga06fSkNH8AjU7QAKUQTqqVYA&usqp=CAU' width='60'>"
    
    let caixa_esquerda = document.getElementById("img_esquerda")
   
       for (i = 0; i < num1; i++) {
           document.getElementById("img_esquerda").innerHTML = caixa_esquerda.innerHTML + maca
       }




     let uva = "<img src='https://cdn-icons-png.flaticon.com/512/1514/1514922.png' width='60'>"

     let caixa_direita = document.getElementById("img_direita")

     
     for (i = 0; i < num2; i++) {
         document.getElementById("img_direita").innerHTML = caixa_direita.innerHTML + uva
     }




}



/*

let resultado = eval(desafio)
    
    function cal() {
    let tentativa = document.getElementById("resultado")
        if(tentativa == resultado) {
            document.write("<img src='https://static.wixstatic.com/media/1c92b2_352bfdb524654143b0879a274cd14463~mv2.gif'>")
        }

*/



