function iniciarJuego() {
    document.getElementById('intro').classList.remove('active');
    document.getElementById('nivel1').classList.add('active');
}

function verificar(nivel, respuestaCorrecta, siguienteNivel) {
    let inputUsuario = document.getElementById('input' + nivel).value;
    
    if (inputUsuario.trim() === respuestaCorrecta) {
        document.getElementById('nivel' + nivel).classList.remove('active');
        document.getElementById(siguienteNivel).classList.add('active');
        document.getElementById('input' + nivel).value = ''; 
    } else {
        mostrarModal("❌ Acceso denegado. Código matemático incorrecto.");
    }
}

function mostrarTeoria(texto) {
    mostrarModal("📄 ARCHIVO CLASIFICADO: \n\n" + texto);
}

function mostrarPista(texto) {
    mostrarModal("💡 " + texto);
}

function mostrarModal(mensaje) {
    document.getElementById('modal-text').innerText = mensaje;
    document.getElementById('modal-msg').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal-msg').style.display = 'none';
}
