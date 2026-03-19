document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            // Toggle active class on button
            this.classList.toggle('active');

            // Find the panel/content
            const content = this.nextElementSibling;

            // Option to close other panels (uncomment block below if you want this feature)
            /*
            const allContents = document.querySelectorAll('.accordion-content');
            allContents.forEach(otherContent => {
                if(otherContent !== content && otherContent.style.maxHeight) {
                    otherContent.style.maxHeight = null;
                    otherContent.previousElementSibling.classList.remove('active');
                }
            });
            */

            if (content.style.maxHeight) {
                // If is open, close it
                content.style.maxHeight = null;
            } else {
                // If is closed, open it
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
