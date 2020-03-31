/* Formulário para Whatsapp */
/* Abre janela Whatsapp com nome e mensagem inseridas*/

function contactWpp() {
    let nome = document.querySelector(".form-name");
    let mensagem = document.querySelector(".form-msg");
    let link;

    // formularios estiverem em branco
    if (!nome.value == "" && !mensagem.value == ""){
        link = "https://api.whatsapp.com/send?phone=5527997450320&text=Olá, Maitê. Me chamo "+nome.value+". "+mensagem.value;
        window.open(link)
    }   else if (nome.value == "" && mensagem.value == "") {
        link = "https://api.whatsapp.com/send?phone=5527997450320&text=Olá, Maitê. Gostaria de solicitar um orçamento."
        window.open(link)
    } else if (!nome.value == "" && mensagem.value == "") { // se possuir apenas nome
        link = "https://api.whatsapp.com/send?phone=5527997450320&text=Olá, Maitê. Me chamo "+nome.value+". Gostaria de solicitar um orçamento."
        window.open(link)
    } else if (!mensagem.value == "" && nome.value == "") { // se possuir apenas mensagem
        link = "https://api.whatsapp.com/send?phone=5527997450320&text=Olá, Maitê. "+mensagem.value;
        window.open(link)
    } 
}