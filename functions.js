// Vérifie si l'input est vide
function checkLength(input, valHelp){

	if (input.value == ""){
		valHelp.innerText = "Le champ est vide.";

		input.removeAttribute('class');
		input.classList.add("form-control", "is-invalid");
	}
	else{
		valHelp.innerText = "";

		input.removeAttribute('class');
		input.classList.add("form-control", "is-valid");
	}
}

// Vérifie le nombre de caractères
function checkNbLength(input, valHelp, nbCarac){
	
	if (input.value.length < nbCarac){
		valHelp.innerText = `Il faut au minimum ${nbCarac} caractères.`

		input.removeAttribute('class');
		input.classList.add("form-control", "is-invalid");
	}
	else{
		valHelp.innerText = "";

		input.removeAttribute('class');
		input.classList.add("form-control", "is-valid");
	}
}

// Vérifie si l'email est valide
function checkEmail(input, valHelp){
	if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
		valHelp.innerText = "";

		input.removeAttribute('class');
		input.classList.add("form-control", "is-valid");		
	}
	else{
		valHelp.innerText = `L'adresse est invalide.`

		input.removeAttribute('class');
		input.classList.add("form-control", "is-invalid");
	}
}

// Vérifie si les 2 mots de passe sont identiques 
function checkSameValue(input1, input2, valHelp){
	if (input1.value != input2.value){
		valHelp.innerText = `Les 2 mots de passe ne sont pas identiques.`

		input2.removeAttribute('class');
		input2.classList.add("form-control", "is-invalid");
	}
	else{
		valHelp.innerText = "";

		input2.removeAttribute('class');
		input2.classList.add("form-control", "is-valid");	
	}
}

// Générateur de mot de passe 

function getRandomPassword(){

	let password;
	// définit la taille du mot de passe
	const passwordLength = Math.floor(Math.random() * 10 + 15);
	// console.log(lengthPassword);

	const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345679!@#$+-*&_";
	const s = "!@#$+-*&_";

	// définit la position d'un caractère alpha
	const alphaLenght = Math.floor(Math.random() * 25);
	// console.log(alphaLenght, c[alphaLenght]);

	// définit la position d'un caractère en capital
	const capLenght = Math.floor(Math.random() * 25 + 26);
	// console.log(capLenght, c[capLenght]);

	// définit la position d'un chiffre
	const numberLenght = Math.floor(Math.random() * 9 + 62);
	// console.log(numberLenght);

	// définit la position d'un caractère spécial
	const caracSpeLenght = Math.floor(Math.random() * s.length);
	// console.log(s[caracSpeLenght]);

	password = c[alphaLenght] + c[capLenght] + c[numberLenght] + s[caracSpeLenght]; 

	for (i = 0; i <= passwordLength; i++){
		password += c[Math.floor(Math.random() * c.length)];
	}

	return password;
}