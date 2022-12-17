let esquerda1 = document.querySelector("#esquerda1")
let direita1 = document.querySelector("#direita1")
let esquerda2 = document.querySelector("#esquerda2")
let direita2 = document.querySelector("#direita2")
let esquerda3 = document.querySelector("#esquerda3")
let direita3 = document.querySelector("#direita3")

let carrossel1 = document.querySelector("#carrossel1")
let carrossel2 = document.querySelector("#carrossel2")
let carrossel3 = document.querySelector("#carrossel3")

let marcacao1 = document.querySelector("#marcacao1")
let marcacao2 = document.querySelector("#marcacao2")
let marcacao3 = document.querySelector("#marcacao3")



direita1.addEventListener('click', function(){
    carrossel1.setAttribute('style', 'display: none;')
    carrossel2.setAttribute('style', 'display: block;')

    esquerda1.setAttribute('style', 'display: none;')
    direita1.setAttribute('style', 'display: none;')
    esquerda2.setAttribute('style', 'display: block;')
    direita2.setAttribute('style', 'display: block;')
    esquerda3.setAttribute('style', 'display: none;')
    direita3.setAttribute('style', 'display: none;')


    marcacao1.setAttribute('style', 'background: transparent;')
    marcacao2.setAttribute('style', 'background: #3E47CD;')
});

direita2.addEventListener('click', function(){
    carrossel2.setAttribute('style', 'display: none;')
    carrossel3.setAttribute('style', 'display: block;')
    
    esquerda1.setAttribute('style', 'display: none;')
    direita1.setAttribute('style', 'display: none;')
    esquerda2.setAttribute('style', 'display: none;')
    direita2.setAttribute('style', 'display: none;')
    esquerda3.setAttribute('style', 'display: block;')
    direita3.setAttribute('style', 'display: block;')


    marcacao2.setAttribute('style', 'background: transparent;')
    marcacao3.setAttribute('style', 'background: #3E47CD;')
  });

  
direita3.addEventListener('click', function(){
    carrossel3.setAttribute('style', 'display: none;')
    carrossel1.setAttribute('style', 'display: block;')
    
    esquerda1.setAttribute('style', 'display: block;')
    direita1.setAttribute('style', 'display: block;')
    esquerda2.setAttribute('style', 'display: none;')
    direita2.setAttribute('style', 'display: none;')
    esquerda3.setAttribute('style', 'display: none;')
    direita3.setAttribute('style', 'display: none;')

    marcacao3.setAttribute('style', 'background: transparent;')
    marcacao1.setAttribute('style', 'background: #3E47CD;')
  });
  
  esquerda1.addEventListener('click', function(){
    carrossel1.setAttribute('style', 'display: none;')
    carrossel3.setAttribute('style', 'display: block;')
    
    esquerda1.setAttribute('style', 'display: none;')
    direita1.setAttribute('style', 'display: none;')
    esquerda2.setAttribute('style', 'display: none;')
    direita2.setAttribute('style', 'display: none;')
    esquerda3.setAttribute('style', 'display: block;')
    direita3.setAttribute('style', 'display: block;')

    marcacao1.setAttribute('style', 'background: transparent;')
    marcacao3.setAttribute('style', 'background: #3E47CD;')
});




esquerda3.addEventListener('click', function(){
    carrossel3.setAttribute('style', 'display: none;')
    carrossel2.setAttribute('style', 'display: block;')
    
    esquerda1.setAttribute('style', 'display: none;')
    direita1.setAttribute('style', 'display: none;')
    esquerda2.setAttribute('style', 'display: block;')
    direita2.setAttribute('style', 'display: block;')
    esquerda3.setAttribute('style', 'display: none;')
    direita3.setAttribute('style', 'display: none;')

    marcacao3.setAttribute('style', 'background: transparent;')
    marcacao2.setAttribute('style', 'background: #3E47CD;')
});

esquerda2.addEventListener('click', function(){
    carrossel2.setAttribute('style', 'display: none;')
    carrossel1.setAttribute('style', 'display: block;')

    esquerda1.setAttribute('style', 'display: block;')
    direita1.setAttribute('style', 'display: block;')
    esquerda2.setAttribute('style', 'display: none;')
    direita2.setAttribute('style', 'display: none;')
    esquerda3.setAttribute('style', 'display: none;')
    direita3.setAttribute('style', 'display: none;')

    marcacao2.setAttribute('style', 'background: transparent;')
    marcacao1.setAttribute('style', 'background: #3E47CD;')
});



marcacao1.addEventListener('click', function(){
    carrossel2.setAttribute('style', 'display: none;')
    carrossel3.setAttribute('style', 'display: none;')

    carrossel1.setAttribute('style', 'display: block;')
    esquerda1.setAttribute('style', 'display: block;')
    direita1.setAttribute('style', 'display: block;')

    marcacao1.setAttribute('style', 'background: #3E47CD;')
    marcacao2.setAttribute('style', 'background: transparent;')
    marcacao3.setAttribute('style', 'background: transparent;')
});

marcacao2.addEventListener('click', function(){
    carrossel1.setAttribute('style', 'display: none;')
    carrossel3.setAttribute('style', 'display: none;')

    carrossel2.setAttribute('style', 'display: block;')
    esquerda2.setAttribute('style', 'display: block;')
    direita2.setAttribute('style', 'display: block;')

    marcacao2.setAttribute('style', 'background: #3E47CD;')
    marcacao1.setAttribute('style', 'background: transparent;')
    marcacao3.setAttribute('style', 'background: transparent;')
});

marcacao3.addEventListener('click', function(){
    carrossel1.setAttribute('style', 'display: none;')
    carrossel2.setAttribute('style', 'display: none;')

    carrossel3.setAttribute('style', 'display: block;')
    esquerda3.setAttribute('style', 'display: block;')
    direita3.setAttribute('style', 'display: block;')

    marcacao3.setAttribute('style', 'background: #3E47CD;')
    marcacao1.setAttribute('style', 'background: transparent;')
    marcacao2.setAttribute('style', 'background: transparent;')
});
