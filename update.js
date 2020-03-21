/*Update pages content
Author: Edson Torres 
License: Open Source, you can use it wherever you want */

/* Recebe descrições */
const casalDescription = "O ensaio para casais é o registro do mais belo sentimento da vida: o amor. Você e seu par merecem esse registro!";
const gestanteDescription = "A materninade é sublime. Eternize esse momento único da vida com belas imagens!";
const infantilDescription = "Assim como os pequenos vivem brincando e correndo, assim também corre o tempo. Registre cada fase deles!";
const familiaDescription = "Viva em família e eternize os mais lindos momentos!";
const festasAniversarioDescription = "O tempo voa! Existem datas especiais que precisam de registros para futuras recordações!";
const femininoDescription = "Força, alegria e expressão de feminilidade!";

function update(){
    alteraDescricoes();
}
function alteraDescricoes(){
    /* Insere no elemento com id voltado para recebimento de descrição */
    document.querySelector('.casal-description').innerHTML=casalDescription;
    document.querySelector('.gestante-description').innerHTML=gestanteDescription;
    document.querySelector('.infantil-description').innerHTML=infantilDescription;
    document.querySelector('.familia-description').innerHTML=familiaDescription;
    document.querySelector('.festas-aniversario-description').innerHTML=festasAniversarioDescription;
    document.querySelector('.feminino-description').innerHTML=femininoDescription;
}

function updateInfantil(){
    let elemento = document.querySelector('#viewer')
    document.querySelector('.infantil-description').innerHTML=infantilDescription;
    elemento.style.backgroundImage = 'url(../../strg/00-45-78-c5-68-ii/ei-imghd-1.jpg)';
}

function updateCasal(){
    let elemento = document.querySelector('#viewer');
    document.querySelector('.casal-description').innerHTML=casalDescription;
    elemento.style.backgroundImage = 'url(../../strg/00-4B-7D-E2-61-ec/ec-imghd-1.jpg)';
}
