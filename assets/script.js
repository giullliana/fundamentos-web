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

nome.style.width = "100%"

function validaNome(){
    let txt = document.querySelector("#txtNome")
    if (nome.nodeValue.length <3){
       txt.innerHTML = "nome inválido"
txt.style.color = 'green'
    } else{
      txt.innerHTML = "nome válido"
      txt.style.color ="pink"
    }

}