// Main application logic
class App {
    constructor() {
        this.initializeApp();
        this.formHandler = new FormHandler();
    }

    initializeApp() {
        // Initialize components
        this.initializeDashboard();
        this.initializeEventListeners();
        
        // Check feature flags
        if (CONFIG.features.enableNotifications) {
            this.initializeNotifications();
        }
    }

    initializeDashboard() {
        // Load dashboard data
        this.loadProjectSummary();
        this.loadRecentActivities();
    }

    async loadProjectSummary() {
        try {
            const response = await fetch(CONFIG.apiEndpoints.projects);
            const projects = await response.json();
            
            // Update dashboard stats
            document.querySelector('.stat-number.active').textContent = 
                projects.filter(p => p.status === 'Active').length;
            document.querySelector('.stat-number.pending').textContent = 
                projects.filter(p => p.status === 'Pending').length;
            document.querySelector('.stat-number.certified').textContent = 
                projects.filter(p => p.status === 'Certified').length;
        } catch (error) {
            Utils.showNotification('Error loading project summary', 'error');
        }
    }

    async loadRecentActivities() {
        try {
            const response = await fetch('/api/activities');
            const activities = await response.json();
            
            const activityList = document.querySelector('.activity-list');
            activityList.innerHTML = activities
                .map(activity => `
                    <li>
                        <span class="activity-icon">${activity.icon}</span>
                        <div class="activity-details">
                            <p>${activity.description}</p>
                            <span class="activity-time">${Utils.formatDate(activity.timestamp)}</span>
                        </div>
                    </li>
                `)
                .join('');
        } catch (error) {
            Utils.showNotification('Error loading activities', 'error');
        }
    }

    initializeEventListeners() {
        // Quick action buttons
        document.querySelectorAll('.action-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                this.handleQuickAction(action);
            });
        });
    }

    handleQuickAction(action) {
        switch(action) {
            case 'new-project':
                navigation.loadPage('/registration.html');
                break;
            case 'upload':
                this.showUploadDialog();
                break;
            case 'report':
                this.generateReport();
                break;
        }
    }

    initializeNotifications() {
        // Initialize push notifications
        if ('Notification' in window) {
            Notification.requestPermission();
        }
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
