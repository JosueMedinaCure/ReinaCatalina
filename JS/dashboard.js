document.addEventListener('DOMContentLoaded', () => {
    // Manejo del acordeón en FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                // Alternar la clase 'active' solo en el elemento actual
                answer.classList.toggle('active');
            });
        }
    });
});

// Seleccionamos todos los botones con la clase '.btn-modules'
const btnModules = document.querySelectorAll('.btn-modules');

function acceder() {
    // Iteramos sobre cada botón para asignarle el evento 'click'
    btnModules.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = "/HTML/cursos.html"; // Redirigimos a la página de cursos
            console.log("Click en un módulo"); // Mensaje en la consola
        });
    });
}

// Llamamos a la función para activar los eventos
acceder();
