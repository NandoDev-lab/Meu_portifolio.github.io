var chave = document.getElementById("chave");

function troca(){
	if (document.getElementById("power").checked){
	 	chave = document.getElementById("chave").src="images/poweron2.png";
	}else{
		chave = document.getElementById("chave").src="images/poweroff.png";
	}
}	