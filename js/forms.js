// Form handling
class FormHandler {
    constructor() {
        this.initializeForms();
    }

    initializeForms() {
        // Registration form handler
        const registrationForm = document.getElementById('registrationForm');
        if (registrationForm) {
            registrationForm.addEventListener('submit', this.handleRegistration.bind(this));
        }
    }

    async handleRegistration(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        // Validate form data
        const validation = Utils.validateForm(data);
        if (!validation.isValid) {
            this.showFormErrors(validation.errors);
            return;
        }

        try {
            const response = await fetch(CONFIG.apiEndpoints.projects, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                Utils.showNotification('Project registered successfully');
                event.target.reset();
            } else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            Utils.showNotification(error.message, 'error');
        }
    }

    showFormErrors(errors) {
        for (let [field, message] of Object.entries(errors)) {
            const element = document.getElementById(field);
            if (element) {
                element.classList.add('error');
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = message;
                element.parentNode.appendChild(errorDiv);
            }
        }
    }
}
