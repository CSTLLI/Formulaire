let inputName = document.querySelector("#inputName");
let inputFirstName = document.querySelector("#inputFirstName");
let inputPseudo = document.querySelector("#inputPseudo");
let inputEmail = document.querySelector("#inputEmail");
let inputPassword1 = document.querySelector("#inputPassword1");
let inputPassword2 = document.querySelector("#inputPassword2");

let eyeIcon = document.querySelectorAll("i");

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

	checkLength(inputPassword1, password1Help);
	checkNbLength(inputPassword1, password1Help, 6);
});

// ### CONFIRMATION DE MOT DE PASSE

inputPassword2.addEventListener('input', function(){

	let password2Help = document.querySelector("#password2Help");

	checkLength(inputPassword2, password2Help);
	checkSameValue(inputPassword1, inputPassword2, password2Help);
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
			const type = inputPassword2.getAttribute("type") === "password" ? "text" : "password";
			inputPassword2.setAttribute("type", type);
		}

		// const inputPasswordAll = document.querySelectorAll("input[type=password]")
		// console.log(inputPasswordAll);

		// inputPasswordAll.forEach(e => {
		// 	console.log(e.getAttribute("type"));

		// 	if (e.getAttribute("type") == "password"){
		// 		e.setAttribute("type", "text");
		// 	}
		// 	else if(e.getAttribute("type") == "text"){
		// 		e.setAttribute("type", "password");
		// 	}
		// })
	});
});
