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

/*Funcionamento de mecânica do FadeIn*/
let i=0;

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
    document.querySelector('.infantil-description').innerHTML=infantilDescription;
    fadeElementIn(document.querySelector('.fadein'));
    // document.querySelector('#viewer').style.backgroundImage = 'url(../../strg/00-45-78-c5-68-ii/ei-imghd-1.jpg)';
}

function updateCasal(){
    document.querySelector('.casal-description').innerHTML=casalDescription;
    fadeElementIn(document.querySelector('.fadein'));
    // document.querySelector('#viewer').style.backgroundImage = 'url(../../strg/00-4B-7D-E2-61-ec/ec-imghd-1.jpg)';
}

function updateFeminino(){
    document.querySelector('.feminino-description').innerHTML=femininoDescription;
    fadeElementIn(document.querySelector('.fadein'));
    // document.querySelector('#viewer').style.backgroundImage = 'url(../../strg/00-2C-7A-E1-E3-ef/ef-imghd-1.jpg)';
}

function updateGestante(){
    document.querySelector('.gestante-description').innerHTML=gestanteDescription;
    fadeElementIn(document.querySelector('.fadein'));
    // document.querySelector('#viewer').style.backgroundImage = 'url(../../strg/00-2C-1A-9B-3B-eg/eg-imghd-2.jpg)';
}

function updateFestasAniversario(){
    document.querySelector('.festas-aniversario-description').innerHTML=festasAniversarioDescription;
    fadeElementIn(document.querySelector('.fadein'));
    
    // document.querySelector('#viewer').style.backgroundImage = 'url(../../strg/00-2C-7A-E1-E3-ef/ef-imghd-1.jpg)';
}
function updateFamilia(){
    document.querySelector('.familia-description').innerHTML=familiaDescription;
    fadeElementIn(document.querySelector('.fadein'));
    // document.querySelector('#viewer').style.backgroundImage = 'url(../../strg/00-2C-7A-E1-E3-ef/ef-imghd-1.jpg)';
}

function updateSobre(){
    fadeElementIn(document.querySelector('.about-pic'));
}

function updateContato(){
    fadeElementIn(document.querySelector('.text-msg-box1'));
    fadeElementIn(document.querySelector('.text-msg-box2'));
    fadeElementIn(document.querySelector('.text-msg-box3'));
}

function updateEnsaios(){
    fadeElementIn(document.querySelector('#content'));
}

// exibe o elemento suavemente
function fadeElementIn(elemento) {
    if (i < 101){ // enquanto i for menor que 100, faça:
        elemento.style.opacity = i+'%'; // opacidade = i,
        i++; // aumente 1 no i;
        setTimeout(() => fadeElementIn(elemento), 8); // chame esta funcao novamente em 40 milissegundos
    }
}

