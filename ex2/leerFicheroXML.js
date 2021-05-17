function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	capaVacia.innerHTML =""
	let conver = xmlDoc.querySelectorAll("linea")
	for(let i=0; i<conver.length; i++)
		if (i %2 == 0 ) 
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='izq'>" + conver[i].textContent + "</p>"
	        else
					capaVacia.innerHTML = capaVacia.innerHTML + "<p class='der'>" + conver[i].textContent + "</p>"

	
}


	loadDocA("conversacion.xml","xml");
