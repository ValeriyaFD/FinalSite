const btnMoreBrands = document.querySelector('.toggle-button');
const wrapperMoreBrands = document.querySelector('.brand-wrapper');
const buttonText = document.querySelector('.toogle-button--name');
const buttonIcon = document.querySelector('.toogle-button--icon');

const btnMoreRepair = document.querySelector('.button-repair');
const wrapperMoreRepair = document.querySelector('.repair-wrapper');
const buttonTextRepair = document.querySelector('.button-repair--name');
const buttonIconRepair = document.querySelector('.button-repair--icon');

const btnMoreInfo = document.querySelector('.main-next');
const wrapperMoreInfo = document.querySelector('.main-wrapper-descrition');
const buttonTextInfo = document.querySelector('.button-text');
const buttonIconInfo = document.querySelector('.button-icon');

function showElements() {
btnMoreBrands.addEventListener('click', function(){
    wrapperMoreBrands.classList.toggle('open')
    if (wrapperMoreBrands.classList.contains('open')){
        buttonText.textContent = 'Скрыть';
        buttonIcon.classList.toggle('flipped');
    } else {
        buttonText.textContent = 'Показать все';
        buttonIcon.classList.toggle('flipped');
    }
});

btnMoreRepair.addEventListener('click', function(){
    wrapperMoreRepair.classList.toggle('open')
    if (wrapperMoreRepair.classList.contains('open')){
        buttonTextRepair.textContent = 'Скрыть';
        buttonIconRepair.classList.toggle('flipped');
    } else {
        buttonTextRepair.textContent = 'Показать все';
        buttonIconRepair.classList.toggle('flipped');
    }
});

btnMoreInfo.addEventListener('click', function(){
    wrapperMoreInfo.classList.toggle('open')
    if (wrapperMoreInfo.classList.contains('open')){
        buttonTextInfo.textContent = 'Скрыть';
        buttonIconInfo.classList.toggle('flipped');
    } else {
        buttonTextInfo.textContent = 'Читать далее';
        buttonIconInfo.classList.toggle('flipped');
    }
});
};

showElements();