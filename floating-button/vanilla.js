const btn_add=document.getElementsByClassName('btn-add')[0];
const cross=document.getElementById('cross');
btn_add.addEventListener('click',change);
function change(){
	cross.classList.toggle('btn-X');
}