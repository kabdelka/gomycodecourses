let users = "user@gomycode.dz"
let pwds = "userpassword"
let container = document.querySelector('.container');
let loginSuccess = document.querySelector('.login-success')
let submit = document.querySelector('.login-btn-submit')
let user = document.getElementById('userInput')
let pwd = document.getElementById('pwdInput')
let error = document.querySelector('.login-error')
function checkUser() {
	// console.log('test');
	let userInput = user.value
	// console.log(userInput);
	if (userInput === users) {
		return true;

	}
	else 
		return false 
}

function checkPwd() {
	let pwdInput = pwd.value;
	// console.log(pwdInput);
	if (pwdInput === pwds) {
		return true 
	}
	else 
		return false
}

function checkLogin () {

	let a = checkUser();
	let b = checkPwd();

	if (a && b) {
		// Affichage login succes 
		container.style.display = 'none';
		loginSuccess.style.display = 'flex';

	}
	else {
		// Affichage login error 
		error.style.display ='flex';
		setTimeout(() => {
			error.style.display = 'none';
		}, 5000);

	}
}






submit.addEventListener('click', checkLogin);