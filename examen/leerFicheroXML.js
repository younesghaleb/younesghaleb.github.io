function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#cinexml")
	let cine = xmlDoc.querySelector("titulo")
	
	let cine2 = xmlDoc.querySelector("director")
	let cine3 = xmlDoc.querySelectorAll("fecha")


		
	capaVacia.innerHTML = capaVacia.innerHTML + "<p class='name'>" + cine.textcontent + "</p>"
	   

	
}


	loadDocA("cine.xml","xml");

