let usuarios = [];

//------nome------
let nome = document.querySelector('#nomeCadastroPsicologo')
let labelNome = document.querySelector('#labelNome')
let validNome = false
let certificacaoNome = document.querySelector('#certificacaoNome')
//------sobrenome-----
let sobrenome = document.querySelector('#sobrenomeCadastroPsicologo')
let labelSobrenome= document.querySelector('#labelSobrenome')
let validSobrenome = false
let certificacaoSobrenome = document.querySelector('#certificacaoSobrenome')
//-------email-------
let email = document.querySelector('#emailCadastroPsicologo')
let labelEmail= document.querySelector('#labelEmail')
let validEmail = false
let certificacaoEmail = document.querySelector('#certificacaoEmail')

//------------senha------------
let senha = document.querySelector('#senhaCadastroPsicologo')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false
let certificacaoSenha = document.querySelector('#certificacaoSenha')

//-------confSenha---------
let confSenha = document.querySelector('#confirmarSenhaCadastroPsicologo')
let labelConfSenha = document.querySelector('#labelConfirmarSenha')
let validConfSenha = false
let certificacaoConfirmarSenha = document.querySelector('#certificacaoConfirmarSenha')
//-------genero-----
let labelGenero = document.querySelector('#txtGeneroPsicologo');
let certificacaoGenero = document.querySelector('#certificacaoGenero');
let sexo = ""
let validGenero = false
//----------data-de-nascimento-----------
let dataPsicologo = document.querySelector('#dataPsicologo');
let labelDate = document.querySelector('#txtDataPsicologo');
let certificacaoData = document.querySelector('#certificacaoData');
let validDate = false
//-------documento-------
let documento = document.querySelector('#documentoDoPsicologo')
let labelCrm = document.querySelector('#labelCrm')
let validDocumento = false
let certificacaoCrm = document.querySelector('#certificacaoCrm')

//-----------------------------------------------------------------------------------------------------------------------------------------------
//------nome------
nome.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if(keyCode > 32 && keyCode < 58 ){
        e.preventDefault();
    }
    if(keyCode == 64){
        e.preventDefault();
    }
    if(keyCode > 122 && keyCode < 192){
        e.preventDefault();
    }
})
nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 2){
        nome.setAttribute('style', 'border-color: #E81330')
        labelNome.setAttribute('style', 'display: block')
        certificacaoNome.setAttribute('style', 'display: block')
        certificacaoNome.setAttribute("src", "img/invalid.png")
        validNome = false
    }
    else{
        nome.setAttribute('style', 'border-color: #00d512')
        labelNome.setAttribute('style', 'display: none')
        certificacaoNome.setAttribute("src", "img/valid.png")
        validNome = true
    }
})
//------sobrenome-----
sobrenome.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if(keyCode > 32 && keyCode < 58 ){
        e.preventDefault();
    }
    if(keyCode == 64){
        e.preventDefault();
    }
    if(keyCode > 122 && keyCode < 192){
        e.preventDefault();
    }
    
})
sobrenome.addEventListener('keyup', () =>{
    if(sobrenome.value.length <= 3){
        sobrenome.setAttribute('style', 'border-color: #E81330')
        labelSobrenome.setAttribute('style', 'display: block')
        certificacaoSobrenome.setAttribute('style', 'display: block')
        certificacaoSobrenome.setAttribute("src", "img/invalid.png")
        validSobrenome = false

    }
    else{
        sobrenome.setAttribute('style', 'border-color: #00d512')
        labelSobrenome.setAttribute('style', 'display: none')
        certificacaoSobrenome.setAttribute("src", "img/valid.png")
        validSobrenome = true
    }
})
email.addEventListener('keyup', () =>{
    if(!email.checkValidity()){
        email.setAttribute('style', 'border-color: #E81330')
        labelEmail.setAttribute('style', 'display: block')
        certificacaoEmail.setAttribute('style', 'display: block')
        certificacaoEmail.setAttribute("src", "img/invalid.png")
        validEmail = false
    }
    else{
        email.setAttribute('style', 'border-color: #00d512')
        labelEmail.setAttribute('style', 'display: none')
        certificacaoEmail.setAttribute("src", "img/valid.png")
        validEmail = true
    }
})
//------------senha------------

senha.addEventListener('keyup', () =>{
    if(senha.value.length <= 5){
        senha.setAttribute('style', 'border-color: #E81330')
        labelSenha.setAttribute('style', 'display: block')
        certificacaoSenha.setAttribute('style', 'display: block')
        certificacaoSenha.setAttribute("src", "img/invalid.png")
        validSenha = false
    }  
    else{
        senha.setAttribute('style', 'border-color: #00d512')
        labelSenha.setAttribute('style', 'display: none')
        certificacaoSenha.setAttribute("src", "img/valid.png")
        validSenha = true
    }
})
//-------confSenha---------

confSenha.addEventListener('keyup', () =>{
    if(senha.value != confSenha.value){
        confSenha.setAttribute('style', 'border-color: #E81330')
        labelConfSenha.setAttribute('style', 'display: block')
        certificacaoConfirmarSenha.setAttribute('style', 'display: block')
        certificacaoConfirmarSenha.setAttribute("src", "img/invalid.png")
        validConfSenha = false
    }  
    else{
        confSenha.setAttribute('style', 'border-color: #00d512')
        labelConfSenha.setAttribute('style', 'display: none')
        certificacaoConfirmarSenha.setAttribute("src", "img/valid.png")
        validConfSenha = true
    }
})


// -------genero-------
const genero= () => {
    let elementosSexo = document.getElementsByName("sexo");
    for (let i = 0; i < elementosSexo.length; i++){
        if(elementosSexo.item(i).checked){
           sexo = elementosSexo.item(i).value;
           certificacaoGenero.setAttribute('style', 'display: block');
           certificacaoGenero.setAttribute("src", "img/valid.png");
           labelGenero.setAttribute('style', 'color: #353535d3')
            validGenero = true
            console.log(sexo)
            break;
        }
    }
}
//-----------data-de-nascimento-----------
function validardataDeNascimento(data){
    dataAtual= new Date();
    data=new Date(data);
    if (data<dataAtual){
        console.log("Data Válida");
        dataPsicologo.setAttribute('style', 'border-color: #00d512')
        certificacaoData.setAttribute('style', 'display: block');
        certificacaoData.setAttribute("src", "img/valid.png");
        labelDate.innerHTML = 'Data de Nascimento';
        labelDate.setAttribute('style', 'color: #353535d3');
        validDate = true;
        return true;
    } 
    else {
        console.log("Data Inválida");
        dataPsicologo.setAttribute('style', 'border-color: #E81330');
        certificacaoData.setAttribute('style', 'display: block');
        certificacaoData.setAttribute("src", "img/invalid.png");
        labelDate.setAttribute('style', 'color: #E81330');
        labelDate.innerHTML = '*Data invalida';
        validDate = false;
        return false;
        
    }
}
documento.addEventListener('keyup', () =>{
    if(documento.value.length <= 9){
        documento.setAttribute('style', 'border-color: #E81330')
        labelCrm.setAttribute('style', 'display: block')
        certificacaoCrm.setAttribute('style', 'display: block')
        certificacaoCrm.setAttribute("src", "img/invalid.png")
        validDocumento = false
    }
    else{
        documento.setAttribute('style', 'border-color: #00d512')
        labelCrm.setAttribute('style', 'display: none')
        certificacaoCrm.setAttribute("src", "img/valid.png")
        validDocumento = true
    }
})




function cadastrarr(){
    if(validNome && validSobrenome && validEmail && validSenha && validConfSenha && validGenero && validDate ){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nomeCad: nome.value,
                sobrenomeCad: sobrenome.value,
                emailCad: email.value,
                senhaCad: senha.value,
                generoCad: sexo,
                dataCad: document.querySelector('#cadastrarPsicologo').value,
                documentoCad: documento,
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        let sucesso1 = document.querySelector('#sucesso1')
        sucesso1.setAttribute('style', 'display: block;')
        cadastroPsicologo.setAttribute('style', 'display: none;')
        cadastro1.setAttribute('style', 'display: none;')
        setTimeout(()=>{
            window.location.href ='login.html'
        }, 3000)
        
    }
    else{
        nome.setAttribute('style', 'border-color: #E81330')
        labelNome.setAttribute('style', 'display: block')
        certificacaoNome.setAttribute('style', 'display: block')
        certificacaoNome.setAttribute("src", "img/invalid.png")
        labelNome.innerHTML = '*Preenchimento obrigatório';

        sobrenome.setAttribute('style', 'border-color: #E81330')
        labelSobrenome.setAttribute('style', 'display: block')
        certificacaoSobrenome.setAttribute('style', 'display: block')
        certificacaoSobrenome.setAttribute("src", "img/invalid.png")
        labelSobrenome.innerHTML = '*Preenchimento obrigatório';

        email.setAttribute('style', 'border-color: #E81330')
        labelEmail.setAttribute('style', 'display: block')
        certificacaoEmail.setAttribute('style', 'display: block')
        certificacaoEmail.setAttribute("src", "img/invalid.png")
        labelEmail.innerHTML = '*Preenchimento obrigatório';

        senha.setAttribute('style', 'border-color: #E81330')
        labelSenha.setAttribute('style', 'display: block')
        certificacaoSenha.setAttribute('style', 'display: block')
        certificacaoSenha.setAttribute("src", "img/invalid.png")
        labelSenha.innerHTML = '*Preenchimento obrigatório';

        confSenha.setAttribute('style', 'border-color: #E81330')
        labelConfSenha.setAttribute('style', 'display: block')
        certificacaoConfirmarSenha.setAttribute('style', 'display: block')
        certificacaoConfirmarSenha.setAttribute("src", "img/invalid.png")
        labelConfSenha.innerHTML = '*Preenchimento obrigatório';

        labelGenero.setAttribute('style', 'display: block')
        labelGenero.setAttribute('style', 'color: #E81330')
        certificacaoGenero.setAttribute('style', 'display: block')
        certificacaoGenero.setAttribute("src", "img/invalid.png")

        dataPsicologo.setAttribute('style', 'border-color: #E81330')
        labelDate.setAttribute('style', 'color: #E81330')
        certificacaoData.setAttribute('style', 'display: block')
        certificacaoData.setAttribute("src", "img/invalid.png")
        labelConfSenha.innerHTML = '*Preenchimento obrigatório';

        documento.setAttribute('style', 'border-color: #E81330')
        labelCrm.setAttribute('style', 'display: block')
        certificacaoCrm.setAttribute('style', 'display: block')
        certificacaoCrm.setAttribute("src", "img/invalid.png")
        labelCrm.innerHTML = '*Preenchimento obrigatório';
    }
}
