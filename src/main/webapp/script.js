const revealElements = document.querySelectorAll(
    ".about-section, .skills-section, .projects-section, .education-section, .contact-section"
);

const revealObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("reveal");

            requestAnimationFrame(function() {
                entry.target.classList.add("visible");
            });

            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});


revealElements.forEach(function(element) {
    revealObserver.observe(element);
});