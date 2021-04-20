/* Case sensitive 
para acessar o dom
por tag : getElementByTagName()
por id :getElementyById() 
por nome:getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector(MAIS UTILIZADO)
*/
let nome = window.document.getElementById("nome")
let email =document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "80%"
email.style.width = "80%" 

function validaNome(){

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <3){
       txtNome.innerHTML = "nome inválido"
txtNome.style.color = 'green'
    } else{
      txtNome.innerHTML = "nome válido"
      txtNome.style.color ="pink"
      nomeOk = true
    }
}
function validaEmail(){
 let txtEmail = document.querySelector("#txtEmail")

 if(email.value.indexOf("@")== -1 || email.value.indexOf(".") == -1){
 txtEmail.innerHTML = "email iválido"
 txtEmail.style.color="green"
 }else{
    txtEmail.innerHTML = "email válido"
    txtEmail.style.color="pink" 
    emailOk = true
 }
}

function validaAssunto(){
    let txtAssunto =document.querySelector("#txtAssunto")
    
    if(assunto.value.length >100){
        txtAssunto.innerHTML = "Texto muito grande,no máximo 100 carcteres."
        txtAssunto.style.color = "green"
        txtAssunto.style.display ="block"
    }else{
        txtAssunto.style.display ="none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk ==true){
        alert("Formulário enviado com Sucesso")
    }else{
        alert("Preencha o formulário corretamente")
    }
}

function mapaZoom(){
    mapa.style.width = "800 px"
    mapa.style.height = "600px"


}
function mapaNormal(){
    mapa.style.width = "400 px"
    mapa.style.height = "250px"
}
