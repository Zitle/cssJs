//traer a body
var body = document.getElementsByTagName('BODY')[0];

//crear elementos 
var section = document.createElement('section');
var contenedorP = document.createElement('div');

//agregar clases y id a los elementos creados
section.id = "contenedor-principal";
//agregar a boody 
body.appendChild(section);
//agregar elementos en elementos
section.appendChild(contenedorP);

