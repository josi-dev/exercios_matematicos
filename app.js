
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






function cal() {
    var desafio = document.getElementById("desafio").innerHTML
    var resultado = document.getElementById("resultado").value
    if(eval(desafio) == resultado) {
        document.write("<dialog open id='certo'><img src='https://vitapromotora.sistemayuppie.com.br/public/assets/sucess.gif' width='60%'></dialog>")
        document.getElementById("certo").style.textAlign = 'center'
document.getElementById("certo").style.border = 'none'
    }else {
        document.write("<dialog open id='certo'><img src='https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif' width='60%'></dialog>")
        document.getElementById("certo").style.textAlign = 'center'
document.getElementById("certo").style.border = 'none'
    }
    
    
}




