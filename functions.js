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