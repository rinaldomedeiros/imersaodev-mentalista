var tentativas = 3
var numeroSecreto = parseInt(Math.random() * 9)
var form = document.getElementById('formulario')
var campo = document.getElementById('campo')
var chute = 0
var textoTentativas = document.createElement("h3")

titulo.appendChild(textoTentativas)

textoTentativas.textContent = "Você tem " + tentativas + " tentativas.";

form.addEventListener('submit', function(e) {
    var chute = campo.value
    
    while(tentativas > 0){
    if(chute == numeroSecreto){
      alert("Parabéns, você acertou!!!")
      tentativas = -1
      textoTentativas.textContent = "Você Venceu!!! \n Pressione F5 para reiniciar."
    }else if(chute < numeroSecreto){
      alert("O número secreto é maior.")
      tentativas = tentativas -1
      textoTentativas.textContent = "Você tem " + tentativas + " tentativas."
      break
    }else if(chute > numeroSecreto){
      alert("O número secreto é menor.")
      tentativas = tentativas -1
      textoTentativas.textContent = "Você tem " + tentativas + " tentativas."
      break
    }    
  }
    
  if(tentativas == 0){
    alert("Você perdeu. \n O número correto era " + numeroSecreto)
    textoTentativas.textContent = "GAME OVER!!! \n Pressione F5 para reiniciar."
    tentativas = -1
  }    
      
    // impede o envio do form
    e.preventDefault()
  })



