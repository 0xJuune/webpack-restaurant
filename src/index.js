import { Dom } from "./domModule.js"

// document.querySelector('#byebye').addEventListener('click', function(){ document.querySelector('#content').replaceChildren()})


function clearPage() {document.querySelector('#content').replaceChildren()}


let fillHome = () => {
    clearPage();
    Dom.makeContainerElement('navbar', '#content');
    Dom.makeWordElement('div', 'Home', 'tab', '#navbar');
    Dom.makeWordElement('div', 'Menu', 'tab', '#navbar');
    document.querySelector('#navbar :nth-child(2)').addEventListener('click', fillMenu)
    
    Dom.makeContainerElement('flexWrap', '#content');
    Dom.makeWordElement('div', 'Eat Our Cool Food', 'hero', '#flexWrap');
    
    Dom.makeContainerElement('main', '#content');
    Dom.makeWordElement('div', 'Check out our 4 for $4, \"4x4\", for four!', 'hotDeal', '#main');
}

let fillMenu = () => {
    clearPage();
    Dom.makeContainerElement('navbar', '#content');
    Dom.makeWordElement('div', 'Home', 'tab', '#navbar');
    Dom.makeWordElement('div', 'Menu', 'tab', '#navbar');
    
    Dom.makeContainerElement('flexWrap', '#content');
    Dom.makeWordElement('div', 'Here\'s Our Cool Food', 'hero', '#flexWrap');
    
    Dom.makeContainerElement('main', '#content');
    Dom.makeWordElement('div', 'We have: lettuce for 10 dollars, add bacon additional 20 dollars.', 'hotDeal', '#main');
    
    document.querySelector('#navbar :nth-child(1)').addEventListener('click', fillHome)
    
}
fillHome()