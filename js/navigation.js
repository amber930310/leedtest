// Navigation handling
class Navigation {
    constructor() {
        this.currentPage = window.location.pathname;
        this.initializeNavigation();
    }

    initializeNavigation() {
        // Highlight current page in navigation
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === this.currentPage) {
                link.classList.add('active');
            }

            link.addEventListener('click', this.handleNavigation.bind(this));
        });
    }

    handleNavigation(event) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }

    // Load page content
    async loadPage(path) {
        try {
            const response = await fetch(path);
            const content = await response.text();
            document.querySelector('.main-content').innerHTML = content;
        } catch (error) {
            Utils.showNotification('Error loading page', 'error');
        }
    }
}

// Initialize navigation
const navigation = new Navigation();
