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
