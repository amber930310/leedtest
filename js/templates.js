// HTML templates for dynamic content
const Templates = {
    // Project card template
    projectCard: (project) => `
        <div class="card project-card" data-id="${project.id}">
            <h3>${project.name}</h3>
            <div class="project-details">
                <p><i class="fas fa-map-marker-alt"></i> ${project.location}</p>
                <p><i class="fas fa-building"></i> ${project.type}</p>
                <p><i class="fas fa-calendar"></i> ${Utils.formatDate(project.startDate)}</p>
            </div>
            <div class="project-status ${project.status.toLowerCase()}">
                ${project.status}
            </div>
            <div class="project-actions">
                <button onclick="editProject(${project.id})">Edit</button>
                <button onclick="viewDocuments(${project.id})">Documents</button>
            </div>
        </div>
    `,

    // Form template for new registration
    registrationForm: () => `
        <form id="registrationForm" class="registration-form">
            <div class="form-group">
                <label for="projectName">Project Name</label>
                <input type="text" id="projectName" name="projectName" required>
            </div>
            <div class="form-group">
                <label for="projectType">Project Type</label>
                <select id="projectType" name="projectType" required>
                    <option value="">Select Type</option>
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                    <option value="industrial">Industrial</option>
                </select>
            </div>
            <div class="form-group">
                <label for="location">Location</label>
                <input type="text" id="location" name="location" required>
            </div>
            <div class="form-group">
                <label for="projectArea">Project Area (sq ft)</label>
                <input type="number" id="projectArea" name="projectArea" required>
            </div>
            <button type="submit">Submit Registration</button>
        </form>
    `
};
