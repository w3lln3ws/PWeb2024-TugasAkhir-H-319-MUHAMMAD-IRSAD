const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

document.querySelectorAll('.carousel').forEach(carousel => {
    const scrollContainer = carousel.querySelector('.scroll-container');
    const scrollSnapPoints = carousel.querySelectorAll('.carousel-item');

    scrollContainer.addEventListener('scroll', () => {
        scrollSnapPoints.forEach(scrollSnapPoint => {
            const rect = scrollSnapPoint.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();

            if (rect.left < containerRect.width && rect.right > 0) {
                scrollSnapPoint.classList.add('active');
            } else {
                scrollSnapPoint.classList.remove('active');
            }
        });
    });
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}

