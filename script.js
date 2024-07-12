document.addEventListener('DOMContentLoaded', () => {
    // Function to scroll to a section
    function scrollToSection(selector) {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Event listener for buttons
    document.querySelectorAll('.toggle-sections button').forEach(button => {
        button.addEventListener('click', function() {
            // Determine the section to scroll to based on button text
            switch (this.textContent.trim()) {
                case 'Picked Teams':
                    scrollToSection('.section-picked-teams');
                    break;
                case 'Joined Contests':
                    scrollToSection('.section-joined-contests');
                    break;
                case 'All Contests':
                    // Add scroll to All Contests if applicable
                    scrollToSection('.section-all-contests');
                    break;
                default:
                    console.log('No matching section for:', this.textContent.trim());
            }
        });
    });
});

    