-- database/schema.sql
-- Database schema for LEEDHub project submissions

-- Create the database
CREATE DATABASE IF NOT EXISTS leedhub_db;
USE leedhub_db;

-- Create project submissions table
CREATE TABLE IF NOT EXISTS project_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    property_name VARCHAR(255) NOT NULL,
    property_type ENUM(
        'New Construction',
        'Core and Shell',
        'Schools',
        'Retail',
        'Healthcare',
        'Data Centers',
        'Warehouses',
        'Hospitality'
    ) NOT NULL,
    gross_floor_area DECIMAL(10,2) NOT NULL,
    area_unit ENUM('Square Feet', 'Square Meters') NOT NULL,
    location VARCHAR(255) NOT NULL,
    ownership_type ENUM(
        'Private',
        'Public',
        'Government',
        'Educational Institution'
    ) NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status ENUM('Draft', 'Submitted', 'Under Review', 'Approved', 'Rejected') DEFAULT 'Draft'
);

-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
);

-- Create project documents table
CREATE TABLE IF NOT EXISTS project_documents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    document_name VARCHAR(255) NOT NULL,
    document_type VARCHAR(50) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES project_submissions(id)
);

-- Create project status history table
CREATE TABLE IF NOT EXISTS status_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    changed_by INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES project_submissions(id),
    FOREIGN KEY (changed_by) REFERENCES users(id)
);
