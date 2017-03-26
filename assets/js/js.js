var comentario;
function agregarComentario() {
    var nuevoComentario = comentario;
    var parrafo = document.createElement('p');
    parrafo.id = nuevoComentario;
    parrafo.innerHTML = nuevoComentario;
    document.getElementById("demo").appendChild(parrafo);
}
function borrar(){
    document.getElementById("demo2").innerHTML = "";
}

function vistaPrevia(){
     comentario = document.getElementById('nuevoComentario').value;
     document.getElementById("demo2").innerHTML = comentario;
}
function textoGrande(){
  comentario = document.getElementById("demo2").style.fontSize("xx-large");
}
function textoMediano(){
  document.getElementById("demo2").style.fontSize = "medium";
}
function textoChico (){
  document.getElementById("demo2").style.fontSize = "small";
}
function colorTexto (){
  var color = prompt("Ingresa color hexadecimal:");
  document.getElementById("demo2").style.color =  color; 
}
function colorFondo (){
  var fondo = prompt("Ingresa color hexadecimal:");
  document.getElementById("demo2").style.background = fondo; 
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