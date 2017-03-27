//declaro una variable global que contenga el comentario
var comentario = document.getElementById('nuevoComentario');

//funcion que copia el nodo con estilo y lo manda a el area de nuevos comentarios, crea lineas para separarlos, cuando se agrega el nuevo comentario se limpia de estilo la vista preliminar, manda el ultimo comentario a el primer lugar
function agregarComentario() {
    var nuevoComentario = comentario;
    var vistaPreliminar = document.getElementById('demo2'); 
    var linea = document.createElement('hr');
    var comentArriba =document.getElementById('demo');
    parrafo = vistaPreliminar.cloneNode(true);
    parrafo.removeAttribute("id");
    document.getElementById("demo").appendChild(parrafo);
    comentArriba.insertBefore(parrafo, comentArriba.firstChild);
    comentArriba.insertBefore(linea, comentArriba.firstChild);
    vistaPreliminar.removeAttribute("style");
}
//borra la vista preliminar y la texarea de texto
function borrar(){
    document.getElementById("demo2").innerHTML = "";
    document.getElementById('nuevoComentario').value="";
}
//crea una vista previa del comentario 
function vistaPrevia(){
    document.getElementById('demo2').innerHTML = comentario.value;
}
//funciones para darle estilo al texto
function textoGrande(){
  document.getElementById("demo2").style.fontSize = "50px";
}
function textoMediano(){
  document.getElementById("demo2").style.fontSize = "medium";
}
function textoChico (){
  document.getElementById("demo2").style.fontSize = "small";
}
function colorTexto (){
  var colorTex = prompt("Ingresa color del texto que quieres en hexadecimal:");
  document.getElementById("demo2").style.color =  colorTex; 
}
function colorFondo (){
  var fondoComentario = prompt("Ingresa color de fondo que quieres en hexadecimal:");
  document.getElementById("demo2").style.background = fondoComentario; 
}
function textoIzq (){
  document.getElementById("demo2").style.textAlign = "left";
}
function textoCen (){
  document.getElementById("demo2").style.textAlign = "center";
}
function textoDer (){
  document.getElementById("demo2").style.textAlign = "right";
}