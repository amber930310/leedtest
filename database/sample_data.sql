-- database/sample_data.sql
-- Sample data for testing

USE leedhub_db;

-- Insert sample user
INSERT INTO users (username, email, password_hash) VALUES
('admin', 'admin@leedhub.com', 'hashed_password_here'),
('test_user', 'test@leedhub.com', 'hashed_password_here');

-- Insert sample project submissions
INSERT INTO project_submissions 
(property_name, property_type, gross_floor_area, area_unit, location, ownership_type, status) 
VALUES
(
    'WSSB Life Skills Training Center',
    'New Construction',
    100000.00,
    'Square Feet',
    '1000137173, Vancouver, Washington',
    'Educational Institution',
    'Approved'
),
(
    'Green Office Building',
    'Core and Shell',
    50000.00,
    'Square Feet',
    'Seattle, Washington',
    'Private',
    'Under Review'
),
(
    'Sustainable Healthcare Center',
    'Healthcare',
    75000.00,
    'Square Feet',
    'Portland, Oregon',
    'Public',
    'Submitted'
);

-- Insert sample documents
INSERT INTO project_documents 
(project_id, document_name, document_type, file_path) 
VALUES
(1, 'Floor Plans', 'PDF', '/documents/project1/floorplans.pdf'),
(1, 'Energy Analysis', 'PDF', '/documents/project1/energy_analysis.pdf'),
(2, 'Site Survey', 'PDF', '/documents/project2/site_survey.pdf');

-- Insert sample status history
INSERT INTO status_history 
(project_id, status, changed_by) 
VALUES
(1, 'Submitted', 1),
(1, 'Under Review', 1),
(1, 'Approved', 1),
(2, 'Submitted', 2),
(2, 'Under Review', 1);
