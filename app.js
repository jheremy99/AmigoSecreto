// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre !== "") {
    amigos.push(nombre);
    input.value = ""; // Limpia el campo de entrada
    actualizarListaAmigos();
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizar

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función  sortear un solo amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Necesitas al menos 2 amigos para hacer el sorteo.");
    return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpia resultados anteriores

  // Seleccionar un amigo secreto al azar
  const indiceAmigoSecreto = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAmigoSecreto];

  // Mostrar el resultado en la lista
  const li = document.createElement("li");
  li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}
