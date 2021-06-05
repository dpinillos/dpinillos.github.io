// Mensaje de Bienvenida.
// alert('Bienvenido a Certus');
function Mostrar(){
    var a = document.getElementById('bienvenido');
    if(a.style.borderColor==="red"){
        // Muestra la etiqueta div
        a.style.borderColor="blue";
    }
    else{
        //Oculto el div
        a.style.borderColor="red";
    }

}