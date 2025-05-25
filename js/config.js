// Configuration settings
const CONFIG = {
    // API endpoints
    apiEndpoints: {
        projects: '/api/projects',
        documents: '/api/documents',
        certification: '/api/certification',
        users: '/api/users'
    },

    // LEED certification levels
    certificationLevels: {
        certified: 40,
        silver: 50,
        gold: 60,
        platinum: 80
    },

    // UI configurations
    ui: {
        animationDuration: 300,
        toastDuration: 3000,
        maxFileSize: 10485760, // 10MB
        allowedFileTypes: ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.png']
    },

    // Feature flags
    features: {
        enableAutoSave: true,
        enableNotifications: true,
        enableDarkMode: false,
        enableBetaFeatures: false
    }
};
