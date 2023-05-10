
var parrafo = document.getElementById("texto_final");

function encriptar_texto (){

	var input = document.getElementById("mensaje");
	var texto = mensaje.value;

	var contador = "0";
	var texto_encriptado ="";




	while(contador < texto.length){

		if(texto[contador] == "a"){
			texto_encriptado += "ai";
			
		} else if(texto[contador] == "e"){
			texto_encriptado += "enter";
			
		} else if(texto[contador] == "i"){
			texto_encriptado += "imes";
			
		} else if(texto[contador] == "o"){
			texto_encriptado += "ober";
			
		} else if(texto[contador] == "u"){
			texto_encriptado += "ufat";
			
		} else {
			texto_encriptado += texto[contador];
			
		}
		contador++

		

	}
	console.log(texto_encriptado);
	parrafo.innerHTML = texto_encriptado;
	input.value ="";
}

	function desencriptar_texto(){

	var input = document.getElementById("mensaje");
	var texto = mensaje.value;

	var contador = "-1"
	var texto_desencriptado ="";


	while(contador < texto.length){
		

		if (texto[contador] == undefined){
			texto_desencriptado +="";
			contador++

		} else if (texto[contador] == "a" && texto[contador + 1] == "i") {

      		texto_desencriptado += "a";
     	 	contador +=2;
			
		} else if(texto[contador] == "e" && texto[contador + 1] == "n" && texto[contador + 2] == "t" && texto[contador + 3] == "e" && texto[contador + 4] == "r"){
			texto_desencriptado += "e";
			contador += 5;
			
		} else if(texto[contador] == "i" && texto[contador + 1] == "m" && texto[contador + 2] == "e" && texto[contador + 3] == "s"){
			texto_desencriptado += "i";
			contador += 4;
			
		} else if(texto[contador] == "o" && texto[contador + 1] == "b" && texto[contador + 2] == "e" && texto[contador + 3] == "r"){
			texto_desencriptado += "o";
			contador += 4;
		} else if(texto[contador] == "u" && texto[contador + 1] == "f" && texto[contador + 2] == "a" && texto[contador + 3] == "t"){
			texto_desencriptado += "u";
			contador += 4;

		} else {
			texto_desencriptado += texto[contador];
			contador++
		}
		
		
		}
		console.log(texto_desencriptado);
		parrafo.innerHTML = texto_desencriptado;
		input.value ="";

	
}	

function copiar_texto() {
    var copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = document.getElementById("texto_final").value;
 
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
}



var boton_copiar = document.getElementById("copiar");
boton_copiar.addEventListener("click",copiar_texto);

var boton_encriptar = document.getElementById("encriptar");
boton_encriptar.addEventListener("click",encriptar_texto);

var boton_desencriptar = document.getElementById("desencriptar");
boton_desencriptar.addEventListener("click",desencriptar_texto);