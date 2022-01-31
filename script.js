let inputName = document.querySelector("#inputName");
let inputFirstName = document.querySelector("#inputFirstName");
let inputPseudo = document.querySelector("#inputPseudo");
let inputEmail = document.querySelector("#inputEmail");
let inputPassword1 = document.querySelector("#inputPassword1");
let inputPassword2 = document.querySelector("#inputPasswordConfirm");

let eyeIcon = document.querySelectorAll("i");
let generate = document.querySelector("#generate");

// ## #NOM 

inputName.addEventListener('input', function(){

	let nameHelp = document.querySelector("#nameHelp");

	checkLength(inputName, nameHelp);
	// console.log(inputNameValue);
});

// ### PRENOM 

inputFirstName.addEventListener('input', function(){

	let firstNameHelp = document.querySelector("#firstNameHelp");
	
	checkLength(inputFirstName, firstNameHelp);
	// console.log(inputFirstNameValue);
});

// ### PSEUDO

inputPseudo.addEventListener('input', function(){

	let pseudoHelp = document.querySelector("#pseudoHelp");

	checkLength(inputPseudo, pseudoHelp);
	checkNbLength(inputPseudo, pseudoHelp, 5);
});

// ### EMAIL

inputEmail.addEventListener('input', function(){

	let emailHelp = document.querySelector("#emailHelp");

	checkLength(inputEmail, emailHelp);
	checkEmail(inputEmail, emailHelp);
});

// ### MOT DE PASSE

inputPassword1.addEventListener('input', function(){

	let password1Help = document.querySelector("#password1Help");
	let password2Help = document.querySelector("#password2Help");
	let password3Help = document.querySelector("#password3Help");
	let password4Help = document.querySelector("#password4Help");
	let password5Help = document.querySelector("#password5Help");

	passwordAnalyze(inputPassword1.value);
});

// ### CONFIRMATION DE MOT DE PASSE

inputPasswordConfirm.addEventListener('input', function(){

	let passwordConfirmHelp = document.querySelector("#passwordConfirmHelp");

	checkLength(inputPasswordConfirm, passwordConfirmHelp);
	checkSameValue(inputPassword1, inputPasswordConfirm, passwordConfirmHelp);
});

// ### ICONE 

eyeIcon.forEach(i => {
	i.addEventListener("click", function(){
		i.classList.toggle("bi-eye-slash-fill");
		i.classList.toggle("bi-eye-fill");

		eyeID = i.id;
		// console.log(eyeID);

		if (eyeID == "eye1"){
			const type = inputPassword1.getAttribute("type") === "password" ? "text" : "password";
			inputPassword1.setAttribute("type", type);
		}else if (eyeID == "eye2"){
			const type = inputPasswordConfirm.getAttribute("type") === "password" ? "text" : "password";
			inputPasswordConfirm.setAttribute("type", type);
		}
	});
});

// ### GENERER UN MOT DE PASSE

generate.addEventListener("click", function(){
	let password = getRandomPassword();

	inputPassword1.value = password;
	inputPasswordConfirm.value = password;
});
