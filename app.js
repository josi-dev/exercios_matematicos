let dadosMultiUm
let dadosMultiDois
let dadosDiviUm
let dadosDiviDois



function soma(num1,num2) {
    
    let desafio = document.getElementById("desafio").innerHTML = num1 + " + " + num2
    
    
    let opcao = document.getElementById("opcao").style.display = 'block'
    
    let nivelSoma = document.getElementById("nivelSoma").style.display = 'none'
        
    let nivelMenos = document.getElementById("nivelMenos").style.display = 'none'
        
        let nivelMultiplicar = document.getElementById("nivelMultiplicar").style.display = 'none'
    
    let nivelDivisor = document.getElementById("nivelDivisor").style.display = 'none'
    
    
    document.querySelectorAll("p")[1].innerHTML = "+"
    
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










function menos(num1,num2) {
    
    let desafio = document.getElementById("desafio").innerHTML = num1 + " - " + num2
    
    
    let opcao = document.getElementById("opcao").style.display = 'block'
    
    let nivelSoma = document.getElementById("nivelSoma").style.display = 'none'
    
    let nivelMenos = document.getElementById("nivelMenos").style.display = 'none'
    
    let nivelMultiplicar = document.getElementById("nivelMultiplicar").style.display = 'none'
    
    let nivelDivisor = document.getElementById("nivelDivisor").style.display = 'none'
    
    
    
    
    
    
    let caixa_esquerda = document.getElementById("img_esquerda")
   
       for (i = 0; i < num1; i++) {
          let abacate = "<img src='https://cdn-icons-png.flaticon.com/512/2503/2503796.png' width='60'>"
           document.getElementById("img_esquerda").innerHTML = caixa_esquerda.innerHTML + abacate

         console.log(i)
       }
    
    let macaSub = [...document.querySelectorAll("img")]
    
    macaSub.map((ele) => {
        ele.addEventListener("click", (evt) => {
            let evtMaca = evt.target
            evtMaca.style.opacity = '0.2'
        })
    })
    
    
    
    
    
}








function multiplicar(num1,num2) {
    
    let desafio = document.getElementById("desafio").innerHTML = num1 + " × " + num2
    
    let opcao = document.getElementById("opcao").style.display = 'block'
    
    let nivelSoma = document.getElementById("nivelSoma").style.display = 'none'
        
    let nivelMenos = document.getElementById("nivelMenos").style.display = 'none'
    
    let nivelMultiplicar = document.getElementById("nivelMultiplicar").style.display = 'none'
    
    let nivelDivisor = document.getElementById("nivelDivisor").style.display = 'none'
    
    
    dadosMultiUm = num1
    dadosMultiDois = num2
    
    
    let banana = "<img src='https://cdn-icons-png.flaticon.com/512/6482/6482627.png' width='60'>"
    
    var complemento = 1
    
    for (i = 0; i < num2; i++) {
       var caixa_esquerda =  document.getElementById("img_esquerda").innerHTML

 document.getElementById("img_esquerda").innerHTML =caixa_esquerda + "<div style='border:1px solid purple;margin:2vw 1vw 0px 1vw;border-radius:4px;'></div>"
       
       }
    
    function adicionar() {
           
       
      if(0 < num2) {
        
        for (i = 0; i < num1; i++) {
            var box = document.querySelectorAll("div")[complemento].innerHTML
            
            document.querySelectorAll("div")[complemento].innerHTML = box + banana
            
            
        }
        ++complemento
        
    }
    
    
    }
    
    var tempo = setInterval(function () {
        adicionar()
        if(complemento > num2) {
        clearInterval(tempo)
        console.log("entrou aqui")
    }
    },400)
    
    
}








function divisor(num1,num2) {
    
    let desafio = document.getElementById("desafio").innerHTML = num1 + " ÷ " + num2
    
    let desafioSinal = num1 + " / " + num2
    
    let opcao = document.getElementById("opcao").style.display = 'block'
    
    let nivelSoma = document.getElementById("nivelSoma").style.display = 'none'
        
    let nivelMenos = document.getElementById("nivelMenos").style.display = 'none'
        
        let nivelMultiplicar = document.getElementById("nivelMultiplicar").style.display = 'none'
    
    let nivelDivisor = document.getElementById("nivelDivisor").style.display = 'none'
    
    
    for (i = 0; i < num2; i++) {
        
        var img_esquerda =  document.getElementById("img_esquerda").innerHTML
        
        document.getElementById("img_esquerda").innerHTML = img_esquerda + "<div style='border:1px solid purple;margin:2vw 1vw 0px 1vw;border-radius:4px;'></div>"
        

    }
    
    dadosDiviUm = num1
    dadosDiviDois = num2
    
    var complemento = 1
    var abacaxi = "<img src='https://cdn-icons-png.flaticon.com/512/6866/6866524.png' width='60'>"
    
    function adicionar() {
           let desafioSinal = num1 + " / " + num2
       
      if(0 < num2) {
        
        for (i = 0; i < eval(desafioSinal); i++) {
            var box = document.querySelectorAll("div")[complemento].innerHTML
            
            document.querySelectorAll("div")[complemento].innerHTML = box + abacaxi
            
            
        }
        ++complemento
        
    }
    
    
    }
    
    
    
    var tempo = setInterval(function () {
        adicionar()
        if(complemento > num2) {
        clearInterval(tempo)
        console.log("entrou aqui")
    }
    },400)
    
    
    
    
}











function cal() {
    let desafio = document.getElementById("desafio").innerHTML
    var resultado = document.getElementById("resultado").value
    var testeMulti = dadosMultiUm + " × " + dadosMultiDois
    var testeDivi = dadosDiviUm + " ÷ " + dadosDiviDois
    
    if(desafio == testeMulti) {
    
        
        
        var desafioMulti = dadosMultiUm + " * " + dadosMultiDois

        
        if(eval(desafioMulti) == resultado) {
            document.write("<dialog open id='certo'><img src='https://vitapromotora.sistemayuppie.com.br/public/assets/sucess.gif' width='60%'></dialog>")
        document.getElementById("certo").style.textAlign = 'center'
document.getElementById("certo").style.border = 'none'
        }else {
            document.write("<dialog open id='certo'><img src='https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif' width='60%'></dialog>")
        document.getElementById("certo").style.textAlign = 'center'
document.getElementById("certo").style.border = 'none'
        }
        
        
        
        
        
    }else if (desafio == testeDivi) {
    
    var desafioDivi = dadosDiviUm + " / " + dadosDiviDois
    
    
    if(eval(desafioDivi) == resultado) {
        document.write("<dialog open id='certo'><img src='https://vitapromotora.sistemayuppie.com.br/public/assets/sucess.gif' width='60%'></dialog>")
        document.getElementById("certo").style.textAlign = 'center'
document.getElementById("certo").style.border = 'none'
    }else {
        document.write("<dialog open id='certo'><img src='https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif' width='60%'></dialog>")
        document.getElementById("certo").style.textAlign = 'center'
document.getElementById("certo").style.border = 'none'
    }
    
    
    
    
    }else {
        
    
    
    
    
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
    
}//fucao

var dii = document.getElementById("nivelDivisor")

var uuu = document.createElement("div")
uuu.setAttribute("style","color:red;")
uuu.innerHTML = "5"
uuu.setAttribute("onclick","divisor(60,2)")
dii.appendChild(uuu)