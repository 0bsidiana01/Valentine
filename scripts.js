const fullImgBox = document.getElementById("fullImgBox"),
fullImg = document.getElementById("fullImg");

function openFullImg(refence){
    fullImgBox.style.display = "flex"
    fullImg.src = refence
}

function closeImg(){
    fullImgBox.style.display = "none";
}

let mensaje = document.getElementById('mensaje');
let cambiarMensaje = document.getElementById('cambiar-mensaje');
let mensajes = ['Te Amo', 'Eres Mi Vida', 'Eres Mi Todo', 'Eres Mi Sueño Hecho Realidad', 'TE AMO MUCHOOOO'];
let indiceMensaje = 0;

function changeMessage() {
  indiceMensaje++;
  if (indiceMensaje >= mensajes.length) {
    indiceMensaje = 0;
  }
  mensaje.innerHTML = mensajes[indiceMensaje];
}
