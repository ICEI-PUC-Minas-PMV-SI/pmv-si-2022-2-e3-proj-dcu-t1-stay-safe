let estrela1 = document.querySelector("#estrela1")
let estrela2 = document.querySelector("#estrela2")
let estrela3 = document.querySelector("#estrela3")
let estrela4 = document.querySelector("#estrela4")
let estrela5 = document.querySelector("#estrela5")
let estrela01 = document.querySelector("#estrela01")
let estrela02 = document.querySelector("#estrela02")
let estrela03 = document.querySelector("#estrela03")
let estrela04 = document.querySelector("#estrela04")
let estrela05 = document.querySelector("#estrela05")

let capaAvaliacaoDoSite = document.querySelector("#capaAvaliacaoDoSite")
let avaliacaoDoSite = document.querySelector("#avaliacaoDoSite")
let fecharAvaliacaoDoSite = document.querySelector("#fecharAvaliacaoDoSite")
let enviarFeedback = document.querySelector("#enviarFeedback")

enviarFeedback.addEventListener('click', function(){
    alert( "Obrigado por avaliar a nossa aplicação")
    window.location.href='logado-inicio.html'
});

fecharAvaliacaoDoSite.addEventListener('click', function(){
    capaAvaliacaoDoSite.setAttribute('style', 'display: none;')
    avaliacaoDoSite.setAttribute('style', 'display: none;')
});

estrela1.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: none;')
    estrela03.setAttribute('style', 'display: none;')
    estrela04.setAttribute('style', 'display: none;')
    estrela05.setAttribute('style', 'display: none;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});

estrela2.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: flex;')
    estrela03.setAttribute('style', 'display: none;')
    estrela04.setAttribute('style', 'display: none;')
    estrela05.setAttribute('style', 'display: none;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});

estrela3.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: flex;')
    estrela03.setAttribute('style', 'display: flex;')
    estrela04.setAttribute('style', 'display: none;')
    estrela05.setAttribute('style', 'display: none;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});
estrela4.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: flex;')
    estrela03.setAttribute('style', 'display: flex;')
    estrela04.setAttribute('style', 'display: flex;')
    estrela05.setAttribute('style', 'display: none;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});

estrela5.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: flex;')
    estrela03.setAttribute('style', 'display: flex;')
    estrela04.setAttribute('style', 'display: flex;')
    estrela05.setAttribute('style', 'display: flex;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});



estrela01.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: none;')
    estrela03.setAttribute('style', 'display: none;')
    estrela04.setAttribute('style', 'display: none;')
    estrela05.setAttribute('style', 'display: none;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')

});

estrela02.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: flex;')
    estrela03.setAttribute('style', 'display: none;')
    estrela04.setAttribute('style', 'display: none;')
    estrela05.setAttribute('style', 'display: none;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});

estrela03.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: flex;')
    estrela03.setAttribute('style', 'display: flex;')
    estrela04.setAttribute('style', 'display: none;')
    estrela05.setAttribute('style', 'display: none;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});
estrela04.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: flex;')
    estrela03.setAttribute('style', 'display: flex;')
    estrela04.setAttribute('style', 'display: flex;')
    estrela05.setAttribute('style', 'display: none;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});

estrela05.addEventListener('click', function(){
    estrela01.setAttribute('style', 'display: flex;')
    estrela02.setAttribute('style', 'display: flex;')
    estrela03.setAttribute('style', 'display: flex;')
    estrela04.setAttribute('style', 'display: flex;')
    estrela05.setAttribute('style', 'display: flex;')

    capaAvaliacaoDoSite.setAttribute('style', 'display: flex;')
    avaliacaoDoSite.setAttribute('style', 'display: flex;')
});

//------------------------------------------------------

let emailNewsletter = document.querySelector("#emailNewsletter")
let validEmail = false

function inscricao() {
    validEmail = false

    if(emailNewsletter.value.length > 0){
        validEmail = true
      }
      if(validEmail){ 
        let listaNewsletter = JSON.parse(localStorage.getItem("listaNewsletter") || "[]");
       
        listaNewsletter.push(
          { 
              contato: emailNewsletter.value
          }
        )
        localStorage.setItem("listaNewsletter", JSON.stringify(listaNewsletter));
        emailNewsletter.value = '';
        alert( "Cadastrado com sucesso!")
    }
    else { 
        alert("Preencha os campos corretamente!")
     }      
}

//------------------------------------------------------
