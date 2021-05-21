function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#cinexml")
	let cine = xmlDoc.querySelector("titulo")
	


		
	capaVacia.innerHTML = capaVacia.innerHTML + "<p class='name'>" + cine[i].textcontent + "</p>"
	   

	
}


	loadDocA("cine.xml","xml");

