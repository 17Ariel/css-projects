const menu=document.querySelector('#menu');
const close=document.querySelector('h1');
const openNav=()=>{
    document.querySelector('#menu').style.display="none";
    document.querySelector('h1').style.display="block";
    document.querySelector('ul').style.display="block";
}
const closeNav=()=>{
    document.querySelector('h1').style.display="none";
    document.querySelector('#menu').style.display="block";
    document.querySelector('ul').style.display="none";
}
menu.addEventListener('click',openNav);
close.addEventListener('click',closeNav);