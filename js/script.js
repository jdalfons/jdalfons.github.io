// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Theme functionality
    const switchSelect = document.querySelector('.switch-select');

    function setTheme(theme) {
        document.body.classList.remove('light', 'dark');
        if (theme === 'auto') {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.body.classList.add(isDarkMode ? 'dark' : 'light');
        } else {
            document.body.classList.add(theme);
        }
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (switchSelect) {
        switchSelect.checked = savedTheme === 'dark';
        setTheme(savedTheme);

        switchSelect.addEventListener('change', () => {
            const newTheme = switchSelect.checked ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // Responsive header title
    const headerTitle = document.querySelector('.header-title');

    function handleResize() {
        if (headerTitle) {
            if (window.innerWidth < 600) {
                headerTitle.style.display = 'none';
            } else {
                headerTitle.style.display = 'block';
            }
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Download CV function
    window.downloadCV = function(language) {
        const filename = language === 'en' ? 'Juan_Diego_Alfonso_Ocampo_CV_EN.pdf' : 'Juan_Diego_Alfonso_Ocampo_CV_FR.pdf';
        alert(`CV download would start: ${filename}\n\nPlease add your actual CV files to the project and update the links.`);
    }

    // Send email function
    window.sendEmail = function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        let emailBody = `Contact from Portfolio Website\n\n`;
        emailBody += `Email: ${email}\n`;
        if (phone) {
            emailBody += `Phone: ${phone}\n`;
        }
        emailBody += `\nMessage:\n${message}`;
        
        const subject = 'Contact from Portfolio Website';
        const mailtoLink = `mailto:juandiego.alfonsoocampo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show confirmation
        alert('Your email client will open with the message. Please send the email to complete your contact request.');
        
        // Reset form
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.reset();
        }
    }

    // Reading section toggle functionality
    const toggleButton = document.getElementById('toggleReading');
    const readingContent = document.getElementById('readingContent');
    
    if (toggleButton && readingContent) {
        toggleButton.addEventListener('click', function() {
            if (readingContent.style.display === 'none') {
                readingContent.style.display = 'block';
                toggleButton.textContent = 'Hide My Library';
            } else {
                readingContent.style.display = 'none';
                toggleButton.textContent = 'Show My Library';
            }
        });
    }

    // Pagination functionality
    initializePagination();
});

// Pagination functionality
async function initializePagination() {
    let postsData, projectsData;
    
    try {
        
        // Try to fetch from JSON files first (works with HTTP/HTTPS)
        const [postsResponse, projectsResponse] = await Promise.all([
            // fetch('https://raw.githubusercontent.com/jdalfons/jdalfons.github.io/refs/heads/main/data/posts.json'),
            // fetch('https://raw.githubusercontent.com/jdalfons/jdalfons.github.io/refs/heads/main/data/projects.json')
          fetch('./data/posts.json'),
          fetch('./data/projects.json')
        ]);
        
        if (postsResponse.ok && projectsResponse.ok) {
            postsData = await postsResponse.json();
            projectsData = await projectsResponse.json();
            console.log('Successfully loaded data from JSON files');
        } else {
            throw new Error('Failed to fetch JSON files');
        }
    } catch (error) {
        console.log('Using embedded data due to:', error.message);
        // Fallback to embedded data (for file:// protocol)
        postsData = {
                    "posts": [
                        {
                            "id": 1,
                            "title": "Getting Started with Machine Learning",
                            "description": "A comprehensive guide to understanding machine learning fundamentals and getting started with your first ML project.",
                            "category": "Machine Learning",
                            "date": "2024-01-15",
                            "readTime": "5 min read",
                            "tags": ["ML", "Python", "Beginner"],
                            "url": "https://medium.com/@jdalfons/getting-started-machine-learning"
                        },
                        {
                            "id": 2,
                            "title": "Data Engineering Best Practices",
                            "description": "Essential practices for building robust and scalable data pipelines in production environments.",
                            "category": "Data Engineering",
                            "date": "2024-01-22",
                            "readTime": "8 min read",
                            "tags": ["ETL", "Pipeline", "Best Practices"],
                            "url": "https://dev.to/jdalfons/data-engineering-best-practices"
                        }
                    ]
                };

                projectsData = {
                    "projects": [
                        {
                            "id": 1,
                            "title": "Sales Analytics Dashboard",
                            "description": "Interactive dashboard built with Python and Streamlit for real-time sales analytics. Features predictive modeling, KPI tracking, and automated reporting for business intelligence.",
                            "icon": "📈",
                            "category": "Data Analytics",
                            "technologies": ["Python", "Streamlit", "Pandas", "Plotly", "PostgreSQL"],
                            "status": "Completed",
                            "startDate": "2023-09-01",
                            "endDate": "2023-11-15",
                            "githubUrl": "https://github.com/jdalfons/sales-analytics-dashboard",
                            "liveUrl": "https://sales-dashboard-demo.streamlit.app",
                            "features": [
                                "Real-time sales metrics visualization",
                                "Predictive analytics for sales forecasting",
                                "Interactive filters and drill-down capabilities",
                                "Automated report generation",
                                "Integration with CRM systems"
                            ]
                        },
                        {
                            "id": 2,
                            "title": "ML Pipeline Automation",
                            "description": "End-to-end machine learning pipeline with automated data preprocessing, model training, validation, and deployment using Docker, Apache Airflow, and cloud knowledge.",
                            "icon": "🤖",
                            "category": "Machine Learning",
                            "technologies": ["Python", "Apache Airflow", "Docker", "MLflow", "AWS", "Scikit-learn"],
                            "status": "Completed",
                            "startDate": "2023-12-01",
                            "endDate": "2024-02-28",
                            "githubUrl": "https://github.com/jdalfons/ml-pipeline-automation",
                            "liveUrl": null,
                            "features": [
                                "Automated data ingestion and preprocessing",
                                "Model training with hyperparameter tuning",
                                "Model validation and performance monitoring",
                                "Automated deployment to production",
                                "Version control for models and datasets"
                            ]
                        },
                        {
                            "id": 3,
                            "title": "Data Processing Platform",
                            "description": "Scalable data processing platform built with FastAPI and PostgreSQL, handling millions of records daily with real-time analytics and RESTful API endpoints.",
                            "icon": "🌍",
                            "category": "Data Engineering",
                            "technologies": ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
                            "status": "In Progress",
                            "startDate": "2024-01-15",
                            "endDate": null,
                            "githubUrl": "https://github.com/jdalfons/data-processing-platform",
                            "liveUrl": "https://api.dataplatform.example.com",
                            "features": [
                                "High-throughput data ingestion",
                                "Real-time data processing",
                                "RESTful API with automatic documentation",
                                "Horizontal scaling capabilities",
                                "Data quality monitoring and alerting"
                            ]
                        }
                    ]
                };
            }
            
            const allPosts = postsData.posts;
            const allProjects = projectsData.projects;

            // Initialize posts pagination
            const postsPerPage = 6;
            let currentPostsPage = 1;
            const totalPostsPages = Math.ceil(allPosts.length / postsPerPage);

            // Initialize projects pagination
            const projectsPerPage = 6;
            let currentProjectsPage = 1;
            const totalProjectsPages = Math.ceil(allProjects.length / projectsPerPage);

            // Posts pagination functions
                function displayPosts(page) {
                    const postsGrid = document.getElementById('postsGrid');
                    const startIndex = (page - 1) * postsPerPage;
                    const endIndex = startIndex + postsPerPage;
                    const postsToShow = allPosts.slice(startIndex, endIndex);

                    postsGrid.innerHTML = '';
                    postsToShow.forEach(post => {
                        const postCard = document.createElement('div');
                        postCard.className = 'post-card';
                        
                        // Create read button if URL exists
                        const readButton = post.url ? `<button class="read-btn" onclick="window.open('${post.url}', '_blank')">Read Post</button>` : '';
                        
                        postCard.innerHTML = `
                            <div class="post-content">
                                <h3>${post.title}</h3>
                                <p class="post-description">${post.description}</p>
                                <div class="post-meta">
                                    <span class="post-category">${post.category}</span>
                                    <span class="post-date">${new Date(post.date).toLocaleDateString()}</span>
                                    <span class="post-read-time">${post.readTime}</span>
                                </div>
                                <div class="post-tags">
                                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                                ${readButton}
                            </div>
                        `;
                        postsGrid.appendChild(postCard);
                    });

                    // Update pagination info
                    document.getElementById('postsPageInfo').textContent = `Page ${page} of ${totalPostsPages}`;
                    
                    // Update button states
                    document.getElementById('postsPrevBtn').disabled = page === 1;
                    document.getElementById('postsNextBtn').disabled = page === totalPostsPages;
                }

                // Projects pagination functions
                function displayProjects(page) {
                    const projectsGrid = document.getElementById('projectsGrid');
                    const startIndex = (page - 1) * projectsPerPage;
                    const endIndex = startIndex + projectsPerPage;
                    const projectsToShow = allProjects.slice(startIndex, endIndex);

                    projectsGrid.innerHTML = '';
                    projectsToShow.forEach(project => {
                        const projectCard = document.createElement('div');
                        projectCard.className = 'project-card';
                        
                        const statusClass = project.status.toLowerCase().replace(' ', '-');
                        const githubLink = project.githubUrl ? 
                            `<a href="${project.githubUrl}" target="_blank" class="project-link">GitHub</a>` : '';
                        const liveLink = project.liveUrl ? 
                            `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>` : '';
                        
                        projectCard.innerHTML = `
                            <div class="project-image">${project.icon}</div>
                            <div class="project-content">
                                <div class="project-header">
                                    <h3>${project.title}</h3>
                                    <span class="project-status ${statusClass}">${project.status}</span>
                                </div>
                                <p class="project-description">${project.description}</p>
                                <div class="project-technologies">
                                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                </div>
                                <div class="project-links">
                                    ${githubLink}
                                    ${liveLink}
                                </div>
                            </div>
                        `;
                        projectsGrid.appendChild(projectCard);
                    });

                    // Update pagination info
                    document.getElementById('projectsPageInfo').textContent = `Page ${page} of ${totalProjectsPages}`;
                    
                    // Update button states
                    document.getElementById('projectsPrevBtn').disabled = page === 1;
                    document.getElementById('projectsNextBtn').disabled = page === totalProjectsPages;
                }

                // Event listeners for posts pagination
                document.getElementById('postsPrevBtn').addEventListener('click', () => {
                    if (currentPostsPage > 1) {
                        currentPostsPage--;
                        displayPosts(currentPostsPage);
                    }
                });

                document.getElementById('postsNextBtn').addEventListener('click', () => {
                    if (currentPostsPage < totalPostsPages) {
                        currentPostsPage++;
                        displayPosts(currentPostsPage);
                    }
                });

                // Event listeners for projects pagination
                document.getElementById('projectsPrevBtn').addEventListener('click', () => {
                    if (currentProjectsPage > 1) {
                        currentProjectsPage--;
                        displayProjects(currentProjectsPage);
                    }
                });

                document.getElementById('projectsNextBtn').addEventListener('click', () => {
                    if (currentProjectsPage < totalProjectsPages) {
                        currentProjectsPage++;
                        displayProjects(currentProjectsPage);
                    }
                });

                // Initial display
                displayPosts(1);
                displayProjects(1);
}