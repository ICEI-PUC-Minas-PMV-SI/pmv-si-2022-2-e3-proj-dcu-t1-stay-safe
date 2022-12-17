//------------------------------SLOGAN------------------------------
const textDisplay = document.getElementById('slogan')
// nessa linha são definidas as tres frases que serão animadas
const phrases = ['Não é egoismo priorizar a saúde mental', 'Quem cuida da mente cuida da vida', 'Sem saúde mental não há saúde', 'Você não está sozinho']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()


//================================
const passwordInput = document.getElementById("passwd")
const eyeSvg = document.getElementById("eyeSvg")

function eyeClick(){
    let inputTypeIsPassword = passwordInput.type == "password"
    if (inputTypeIsPassword) {
        showPassword()
    }
    else{
        hidePassword()
    }
}
function showPassword(){
    passwordInput.setAttribute("type", "text")
    eyeSvg.setAttribute("src", "img/view.png")
}
function hidePassword() {
    passwordInput.setAttribute("type", "password")
    eyeSvg.setAttribute("src", "img/olhoFechado.png")
}


//============================

let capa_cadastro = document.querySelector("#capa_cadastro")
let cadastrar = document.querySelector("#cadastrar")
let cadastro1 = document.querySelector("#cadastro1")
let fechar1 = document.querySelector("#fechar1")
let fechar2 = document.querySelector("#fechar2")
let voltar1 = document.querySelector("#voltar1")
let psicologo = document.querySelector(".psicologo")
let comum = document.querySelector(".comum")
let documentoDoPsicologo = document.querySelector(".documentoDoPsicologo")
let cadastroPsicologo = document.querySelector("#cadastroPsicologo")

cadastrar.addEventListener('click', function(){
  capa_cadastro.setAttribute('style', 'display: block;')
  cadastro1.setAttribute('style', 'display: block;')
});

psicologo.addEventListener('click', function(){
  cadastroPsicologo.setAttribute('style', 'display: block;')
  documentoDoPsicologo.setAttribute('style', 'display: block;')
});

comum.addEventListener('click', function(){
  cadastroPsicologo.setAttribute('style', 'display: block;')
  documentoDoPsicologo.setAttribute('style', 'display: none;')
  labelCrm.setAttribute('style', 'display: none;')
  certificacaoCrm.setAttribute('style', 'display: none;')

});

fechar1.addEventListener('click', function(){
  capa_cadastro.setAttribute('style', 'display: none;')
  cadastro1.setAttribute('style', 'display: none;')
});

fechar2.addEventListener('click', function(){
  capa_cadastro.setAttribute('style', 'display: none;')
  cadastro1.setAttribute('style', 'display: none;')
  cadastroPsicologo.setAttribute('style', 'display: none;')
});

voltar1.addEventListener('click', function(){
  cadastroPsicologo.setAttribute('style', 'display: none;')
});

capa_cadastro.addEventListener('click', function(){
  capa_cadastro.setAttribute('style', 'display: none;')
  cadastro1.setAttribute('style', 'display: none;')
  cadastroPsicologo.setAttribute('style', 'display: none;')
});

//================================
const passwordInput2 = document.getElementById("senhaCadastroPsicologo")
const eyeSvg2 = document.getElementById("eyeSvg2")

function eyeClick2(){
    let inputTypeIsPassword2 = passwordInput2.type == "password"
    if (inputTypeIsPassword2) {
        showPassword2()
    }
    else{
        hidePassword2()
    }
}
function showPassword2(){
    passwordInput2.setAttribute("type", "text")
    eyeSvg2.setAttribute("src", "img/view.png")
}
function hidePassword2() {
    passwordInput2.setAttribute("type", "password")
    eyeSvg2.setAttribute("src", "img/olhoFechado.png")
}

//================================
const passwordInput3 = document.getElementById("confirmarSenhaCadastroPsicologo")
const eyeSvg3 = document.getElementById("eyeSvg3")

function eyeClick3(){
    let inputTypeIsPassword3 = passwordInput3.type == "password"
    if (inputTypeIsPassword3) {
        showPassword3()
    }
    else{
        hidePassword3()
    }
}
function showPassword3(){
    passwordInput3.setAttribute("type", "text")
    eyeSvg3.setAttribute("src", "img/view.png")
}
function hidePassword3() {
    passwordInput3.setAttribute("type", "password")
    eyeSvg3.setAttribute("src", "img/olhoFechado.png")
}
//----------------------------------------------------------
let error = document.querySelector('#error');
let fecharError = document.querySelector('#fecharError');

function entrarr(){
  let email2 = document.querySelector('#email');
  let passwd = document.querySelector('#passwd');
  let listaUser = []  
  let userValid = {
      nome : '',
      sobrenome : '',
      email : '',
      senha : '',
      sexo : '',
      data : '',
   }
   listaUser = JSON.parse(localStorage.getItem('listaUser'))

   listaUser.forEach((item) => {
    if(email2.value == item.emailCad && passwd.value == item.senhaCad){
        userValid = {
          nome : item.nomeCad,
          sobrenome : item.sobrenomeCad,
          email : item.emailCad,
          senha : item.senhaCad,
          sexo : item.generoCad,
          data : item.dataCad,
        }
     }
  });

  if(email2.value == userValid.email && passwd.value == userValid.senha){
    let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
    localStorage.setItem('token', token)
        window.location.href='logado-inicio.html'

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } 
    else{
      email2.setAttribute('style', 'border-color: #E81330')
      passwd.setAttribute('style', 'border-color: #E81330')
      error.setAttribute('style', ' display: block')
      email2.focus()
  }  
} 

fecharError.addEventListener('click', function(){
  error.setAttribute('style', 'display: none;')
});