'use strict';

// Global variables
let cat = 'Meow Cat';
let meowCat = document.querySelector('#meow');
let meowCliked = 0;
let cat1 = 'Tattooed Cat'
let tattooed = document.querySelector('#tattooed');
let tattooedCliked = 0;




// Event Listener 

meowCat.addEventListener('click', ()=> {
    meowCliked ++;
    let meowText = document.querySelector('#meowText');
    meowText.innerHTML = `Meow Cat clicked ${meowCliked} times`;
    let meowName = document.querySelector('.meow-name');
    meowName.innerHTML = `${cat}`
});

tattooed.addEventListener('click', ()=> {
    tattooedCliked ++;
    let tattooedText = document.querySelector('#tattooedText');
    tattooedText.innerHTML = `tattooed Cat clicked ${tattooedCliked} times`;
    let meowName = document.querySelector('.tattooed-name');
    meowName.innerHTML = `${cat1}`
});

