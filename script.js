// Código para los corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${4 + Math.random() * 3}s`; // Duración entre 4 y 7 segundos
    heart.style.backgroundColor = `hsl(${Math.random() * 30 + 340}, 100%, 70%)`; // Tonos entre rojo y rosa
    heart.style.opacity = Math.random() * 0.7 + 0.3; // Opacidad variable para mayor variedad

    document.querySelector('.background').appendChild(heart);

    // Remover el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 7000); // 7 segundos, coincidiendo con la duración de la animación
}

// Crear un corazón cada 100 ms para una abundancia de corazones
setInterval(createHeart, 0,1);

// Código existente de interacción con el botón "NO"
const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});