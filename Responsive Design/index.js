let btn = document.querySelector('.fa-bars')
let btnClose = document.querySelector('.fa-times')
let sidebar = document.querySelector('.sidebar')

btn.addEventListener('click',()=>{
	sidebar.setAttribute('class','sidebar');
})

btnClose.addEventListener('click', ()=> {
	sidebar.setAttribute('class','sidebar translate');
})

window.addEventListener('resize',()=> {
	sidebar.setAttribute('class','sidebar translate')
})