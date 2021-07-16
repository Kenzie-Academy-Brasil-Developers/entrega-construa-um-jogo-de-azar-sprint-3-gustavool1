let btnJokenpo = document.getElementById("btn-jogarP")
let pedra = document.getElementById("pedra")
let papel = document.getElementById("papel")
let tesoura = document.getElementById("tesoura")
let possiveisJogadas = ['pedra', 'papel', 'tesoura']
let playerJogada;
let resultContainer = document.getElementsByClassName("jokenpo-result")[0]
let txt = document.createElement("p")
btnJokenpo.addEventListener("click", verificandoVencedor)
function verificandoVencedor(e){
    let randomN = Math.floor(Math.random()*3)
    
    e.preventDefault()
    if(pedra.checked){
        playerJogada = 'pedra'
        if(possiveisJogadas[randomN] === 'pedra'){
          
          txt.innerHTML =  `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, empate`
        }if(possiveisJogadas[randomN]=== 'papel'){
          txt.innerHTML =  `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, você perdeu`
        }if(possiveisJogadas[randomN] === 'tesoura'){
          txt.innerHTML =  `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, você ganhou`
        }
    }if(papel.checked){
        
        playerJogada = 'papel'
        if(possiveisJogadas[randomN]=== 'pedra'){
          txt.innerHTML =  `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, você ganhou`
        }if(possiveisJogadas[randomN]=== 'tesoura'){
          txt.innerHTML =  `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, você perdeu`
        }if(possiveisJogadas[randomN] === 'papel'){
          txt.innerHTML =  `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, empate`
        }
        
    }if(tesoura.checked){
        
        playerJogada = 'tesoura'
        if(possiveisJogadas[randomN] === 'pedra'){
           txt.innerHTML = `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, você perdeu`
        }if(possiveisJogadas[randomN] === 'papel'){
           txt.innerHTML = `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, você ganhou`
        }if(possiveisJogadas[randomN] === 'tesoura'){
           txt.innerHTML = `O computador escolheu <strong>${possiveisJogadas[randomN]}</strong>, empate`
        }
        console.log(playerJogada)
    }

    resultContainer.appendChild(txt)
}