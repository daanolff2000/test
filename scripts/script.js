// JavaScript Document

const hamburgerButton = document.querySelector('header section button');
//Hiermee maak je een const aan voor het hamburger menu knop

const dropDown = document.querySelectorAll('main section:nth-of-type(2) article, main section:nth-of-type(4) article, #detail article'); 
//Hiermee selecteer je alle dropdown artikelen, en maakt een const aan ervoor.

const mode = document.querySelector('header nav:first-of-type ul li button img');

const logo = document.querySelector('header section a img');

const drops = document.querySelectorAll('main section:nth-of-type(2) article img, main section:nth-of-type(4) article div div div img, main section#detail article img');
console.log(drops);


function hamburgerActief() {
    document.body.classList.toggle('uitklap');
}

function changeMode(){ 
    if(mode.src.match('images/nacht.svg')){ //hij staat nu op dag modus, maar je ziet het nacht icoontje
        mode.src = 'images/dag.svg'; //zodra op het nacht icoon wordt geklikt verandert het in het dag icoon (rise and shine)
        logo.src = 'images/logowit.svg'; //hva logo wit
        document.body.classList.add('nacht');
        [].forEach.call(drops,function (img){
                img.src = 'images/pijlwit.svg';
        });
    }
    else{ //Het icoontje is niet nachtmodus(dag modus), dus zodra je klikt wordt het nachtmodus. 
        mode.src = 'images/nacht.svg';
        logo.src = 'images/hvalogo.svg';
        document.body.classList.remove('nacht'); 
        [].forEach.call(drops,function (img){
            img.src = 'images/drop.svg';
    });
    }
}

[].forEach.call(dropDown,function (article){
    article.addEventListener('click',function(){
        article.classList.toggle('active');
    })
});
//voor elke knop (for each) maak je een loop aan. Voor elke dropdown button maak je een function aan die wordt aangeroepen als je er op klikt.
//waarbij deze knop een active class krijgt (toggle)

hamburgerButton.addEventListener('click', hamburgerActief);
mode.addEventListener('click', changeMode);