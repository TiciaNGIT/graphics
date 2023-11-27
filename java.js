document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    const scrollLinks = document.querySelectorAll('nav a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add transitions on scroll
    window.addEventListener('scroll', () => {
        const portfolioSection = document.getElementById('portfolio');
        const portfolioImages = document.querySelectorAll('#portfolio .gallery img');

        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > portfolioSection.offsetTop) {
            portfolioImages.forEach((image, index) => {
                setTimeout(() => {
                    image.style.opacity = '1';
                    image.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    });
});
