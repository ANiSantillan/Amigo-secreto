let amigos = [];

// Añadir amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido añadido.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = "";
}

// Actualizar la lista de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista actual

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sorteo de amigos secretos
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];

    const li = document.createElement('li');
    li.textContent = `🎉 El/la ganador/a es: ${ganador} 🎉`;
    resultado.appendChild(li);
}

// Mostrar el resultado del sorteo
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ""; // Limpiar resultados anteriores

    resultado.forEach((asignacion) => {
        const li = document.createElement('li');
        li.textContent = asignacion;
        listaResultado.appendChild(li);
    });
}

// Reiniciar listado
function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}