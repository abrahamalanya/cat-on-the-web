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
  },
  {
    "image": "https://media.tenor.com/DRd36YfJrnAAAAAj/pog-pog-champ.gif",
    "message": "AAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  },
  {
    "image": "https://media.tenor.com/lOG0hy6GUgEAAAAj/cat.gif",
    "message": "Que bonit@ te vez hoy"
  },
  {
    "image": "https://media.tenor.com/1NRoxR1fXngAAAAj/hug-cat.gif",
    "message": "Toma un besito"
  },
  {
    "image": "https://media.tenor.com/H2XkU7AAzeQAAAAj/horimiya-sad-cat.gif",
    "message": "Onichan, meow"
  },
  {
    "image": "https://media.tenor.com/S-Ca_RhnhB4AAAAj/cat-eat-funny-cat.gif",
    "nessage": "Sigue trabajando..."
  },
  {
    "image": "https://media.tenor.com/K-pziHyeqb8AAAAj/fat-cat-smile.gif",
    "message": "... Holi"
  },
  {
    "image": "https://media.tenor.com/HJysfhmkVcQAAAAj/cat-chat.gif",
    "message": "Toma agua."
  },
  {
    "image": "https://media.tenor.com/wz6SW4PchtIAAAAj/cat-thumbs-up.gif",
    "message": "Lo estas haciendo BIEN"
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
