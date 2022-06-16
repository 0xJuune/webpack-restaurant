/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/domModule.js
let Dom = (() => {
    const createDiv = document.createElement('div');
    const selectTab = document.querySelectorAll('.tab');

    function makeWordElement(tag, text, nameClass, parent) {
        let make = document.createElement(tag);
        let words = document.createTextNode(text);
        let a = document.querySelector(parent);
        make.appendChild(words);
        make.className = nameClass;
        a.appendChild(make)
    }

    function makeContainerElement(id, parent) {
        let make = document.createElement('div');
        let a = document.querySelector(parent)
        make.id = id;
        a.appendChild(make)
    }

	return {
        makeWordElement,
        makeContainerElement,
    }
})();



;// CONCATENATED MODULE: ./src/index.js


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
/******/ })()
;