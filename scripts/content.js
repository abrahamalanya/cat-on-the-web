const cats = [
  {
    "image": "https://media.tenor.com/SI5tOTnHS34AAAAj/verycat-twitch-cat-twitch-emote.gif",
    "message": "Come un doritos, XD"
  },
  {
    "image": "https://media.tenor.com/r6MJYXMMyAQAAAAj/chat-cat.gif",
    "message": "Mueve un poco tu cuerpo, meow"
  },
  {
    "image": "https://media.tenor.com/Z73zwxJhLpsAAAAj/cat.gif",
    "message": "Escucha una rolita"
  }
]

// Global
const body = document.querySelector("body");
const idContainerCat = "catContainer";

// Función para mostrar o ocultar el contenedor de gato
function catVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = element.style.display === 'none' ? 'flex' : 'none';
  }
}

// Función para crear contenedor de gato
function catContainer(image, message) {
  const div = document.createElement("div");
  div.id = idContainerCat;
  div.classList.add("cat-on-the-web");
  div.innerHTML = `
    <img src="${image}" alt="cat">
    <span>${message}</span>
    `;
  return div;
}

// Función para crear un índice aleatorio
function randomIndex(data) {
  return Math.floor(Math.random() * data.length);
}

// Función para agregar un gato aleatorio en el body y eliminarlo despues de 5 segundos
function addCatRandomToBody() {
  const i = randomIndex(cats);
  const html = catContainer(cats[i].image, cats[i].message);
  body.appendChild(html);
  removeCatToBody(html);  
}

// Función para eliminar el gato del body
function removeCatToBody(html) {
  setTimeout(() => {
    html.remove();
  }, 8000);
}

// Iniciando, bienvenida
function Iniciando() {
  const html = catContainer("https://media.tenor.com/bWUeVRqW9-IAAAAi/fast-cat-cat-excited.gif", "Hola, meow meow");
  body.appendChild(html);
  removeCatToBody(html);
}

Iniciando()

// Crea un nuevo gato cada media hora
const time = 30 * 60 * 1000;
setInterval(() => {
  addCatRandomToBody();
}, time);
