// Remover Loading Screen após carregamento
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Efeito de Digitação (Typed.js)
// Verifica se o elemento existe para evitar erros
if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
        strings: [
            'Desenvolvedor Full Stack.',
            'Especialista em Automação.',
            'Engenheiro de Software.',
            'Entusiasta em Cybersecurity.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '_'
    });
}

// Animações de Scroll (ScrollReveal)
ScrollReveal().reveal('.reveal', { 
    delay: 200,
    distance: '30px',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'bottom',
    interval: 100 // Para os itens no grid
});

// Efeito Blur no Navbar ao dar Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(5, 5, 7, 0.8)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.03)';
        nav.style.boxShadow = 'none';
    }
});