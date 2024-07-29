document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.addEventListener('click', () => {
            const content = container.querySelector('.content p');
            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
