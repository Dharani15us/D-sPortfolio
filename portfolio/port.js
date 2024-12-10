document.addEventListener('DOMContentLoaded', () => {
    // Sample project data with images
    const projects = [
    {
    title: 'Calculator',
    description: 'Designed a simple calculator using python for easy and accurate values.',
    image: 'calcu for port.jpg' // Replace with the path to your image
    },
    {
    title: 'Student Grade Tracker',
    description: 'Designed a attractive student grade tracker for reducing the manual work',
    image: 'studgrade for port.jpg' // Replace with the path to your image
    }
    ];
    // Function to load projects
    const loadProjects = () => {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    `;
    projectList.appendChild(projectDiv);
    });
    };
    // Load projects on page load
    loadProjects();
    // Handle form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent!');
    form.reset();
    });
    });
    