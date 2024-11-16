document.addEventListener('DOMContentLoaded', () => {
    const accordionTitles = document.querySelectorAll('.accordion-title');
    const btnAcceder = document.querySelectorAll('.btn-acceder')
    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling; // Selecciona el siguiente elemento (p)

            // Alterna la clase 'active' para abrir o cerrar
            content.classList.toggle('active');
        });
    });

    btnAcceder.forEach(button =>{
        button.addEventListener('click', ()=>{
            window.location.href = "/HTML/perfil.html"; 
        })
    })
});
