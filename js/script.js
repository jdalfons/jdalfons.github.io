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

    // Pagination functionality
    function initializePagination() {
        // Use embedded data directly (no fetch attempt)
        const postsData = {
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
                        },
                        {
                            "id": 3,
                            "title": "Python for Data Science",
                            "description": "Complete guide to using Python libraries like Pandas, NumPy, and Matplotlib for data analysis.",
                            "category": "Data Science",
                            "date": "2024-02-01",
                            "readTime": "12 min read",
                            "tags": ["Python", "Pandas", "NumPy", "Data Analysis"],
                            "url": "https://github.com/jdalfons/python-data-science-guide"
                        },
                        {
                            "id": 4,
                            "title": "Building ETL Pipelines",
                            "description": "Step-by-step tutorial on creating efficient ETL pipelines using modern tools and frameworks.",
                            "category": "Data Engineering",
                            "date": "2024-02-10",
                            "readTime": "10 min read",
                            "tags": ["ETL", "Apache Airflow", "Data Pipeline"]
                        },
                        {
                            "id": 5,
                            "title": "Introduction to DevOps",
                            "description": "Understanding DevOps culture, practices, and tools for continuous integration and deployment.",
                            "category": "DevOps",
                            "date": "2024-02-18",
                            "readTime": "7 min read",
                            "tags": ["DevOps", "CI/CD", "Docker"]
                        },
                        {
                            "id": 6,
                            "title": "Statistical Analysis with Python",
                            "description": "Performing statistical analysis and hypothesis testing using Python and SciPy.",
                            "category": "Statistics",
                            "date": "2024-02-25",
                            "readTime": "9 min read",
                            "tags": ["Statistics", "Python", "SciPy", "Analysis"]
                        },
                        {
                            "id": 7,
                            "title": "Deep Learning Fundamentals",
                            "description": "Introduction to neural networks and deep learning concepts with practical examples.",
                            "category": "Deep Learning",
                            "date": "2024-03-05",
                            "readTime": "15 min read",
                            "tags": ["Deep Learning", "Neural Networks", "TensorFlow"]
                        },
                        {
                            "id": 8,
                            "title": "Cloud Computing with AWS",
                            "description": "Getting started with AWS services for data processing and machine learning workflows.",
                            "category": "Cloud Computing",
                            "date": "2024-03-12",
                            "readTime": "11 min read",
                            "tags": ["AWS", "Cloud", "S3", "EC2"]
                        },
                        {
                            "id": 9,
                            "title": "Advanced SQL Techniques",
                            "description": "Master advanced SQL concepts including window functions, CTEs, and query optimization.",
                            "category": "Database",
                            "date": "2024-03-20",
                            "readTime": "13 min read",
                            "tags": ["SQL", "Database", "Query Optimization"]
                        },
                        {
                            "id": 10,
                            "title": "Time Series Analysis",
                            "description": "Analyzing and forecasting time series data using Python and statistical methods.",
                            "category": "Data Science",
                            "date": "2024-03-28",
                            "readTime": "14 min read",
                            "tags": ["Time Series", "Forecasting", "ARIMA"]
                        },
                        {
                            "id": 11,
                            "title": "Natural Language Processing",
                            "description": "Text processing and analysis techniques using NLTK and spaCy libraries.",
                            "category": "NLP",
                            "date": "2024-04-05",
                            "readTime": "16 min read",
                            "tags": ["NLP", "Text Analysis", "NLTK", "spaCy"]
                        },
                        {
                            "id": 12,
                            "title": "Computer Vision Applications",
                            "description": "Building computer vision applications using OpenCV and deep learning frameworks.",
                            "category": "Computer Vision",
                            "date": "2024-04-12",
                            "readTime": "18 min read",
                            "tags": ["Computer Vision", "OpenCV", "CNN"]
                        },
                        {
                            "id": 13,
                            "title": "Morse Code With Python and RPI",
                            "description": "Creating a Morse code translator using Python and Raspberry Pi.",
                            "category": "Backend Development",
                            "date": "2024-04-20",
                            "readTime": "10 min read",
                            "tags": ["Python", "Raspberry Pi", "Morse Code"],
                            "url": "https://github.com/jdalfons/morse-code-python-rpi"
                        },
                        {
                            "id": 14,
                            "title": "Docker and Containerization",
                            "description": "Containerizing applications with Docker for consistent deployment across environments.",
                            "category": "DevOps",
                            "date": "2024-04-28",
                            "readTime": "12 min read",
                            "tags": ["Docker", "Containerization", "Deployment"]
                        },
                        {
                            "id": 15,
                            "title": "Kubernetes for Data Scientists",
                            "description": "Orchestrating machine learning workflows and data processing jobs with Kubernetes.",
                            "category": "DevOps",
                            "date": "2024-05-05",
                            "readTime": "17 min read",
                            "tags": ["Kubernetes", "ML Ops", "Orchestration"]
                        },
                        {
                            "id": 16,
                            "title": "Data Visualization with D3.js",
                            "description": "Creating interactive data visualizations for web applications using D3.js library.",
                            "category": "Data Visualization",
                            "date": "2024-05-12",
                            "readTime": "14 min read",
                            "tags": ["D3.js", "Visualization", "JavaScript", "Web"]
                        },
                        {
                            "id": 17,
                            "title": "Stream Processing with Apache Kafka",
                            "description": "Real-time data processing and streaming analytics using Apache Kafka ecosystem.",
                            "category": "Data Engineering",
                            "date": "2024-05-20",
                            "readTime": "15 min read",
                            "tags": ["Kafka", "Streaming", "Real-time", "Data Engineering"]
                        },
                        {
                            "id": 18,
                            "title": "MLOps Best Practices",
                            "description": "Implementing MLOps workflows for automated model training, testing, and deployment.",
                            "category": "MLOps",
                            "date": "2024-05-28",
                            "readTime": "20 min read",
                            "tags": ["MLOps", "CI/CD", "Model Deployment", "Automation"]
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
                            "description": "End-to-end machine learning pipeline with automated data preprocessing, model training, validation, and deployment using Docker, Apache Airflow, and cloud services.",
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
                        },
                        {
                            "id": 4,
                            "title": "Customer Segmentation Tool",
                            "description": "Advanced customer segmentation system using clustering algorithms and behavioral analysis to identify target groups and optimize marketing strategies.",
                            "icon": "📱",
                            "category": "Data Science",
                            "technologies": ["Python", "Scikit-learn", "Plotly", "Streamlit", "SQL"],
                            "status": "Completed",
                            "startDate": "2023-07-01",
                            "endDate": "2023-08-30",
                            "githubUrl": "https://github.com/jdalfons/customer-segmentation",
                            "liveUrl": "https://customer-segmentation-demo.streamlit.app",
                            "features": [
                                "K-means and hierarchical clustering",
                                "RFM analysis for customer behavior",
                                "Interactive visualization of segments",
                                "Segment profiling and insights",
                                "Marketing campaign recommendations"
                            ]
                        },
                        {
                            "id": 5,
                            "title": "Real-time Fraud Detection",
                            "description": "Machine learning system for detecting fraudulent transactions in real-time using ensemble methods and feature engineering with streaming data processing.",
                            "icon": "🔍",
                            "category": "Machine Learning",
                            "technologies": ["Python", "Apache Kafka", "TensorFlow", "Elasticsearch", "Docker"],
                            "status": "Completed",
                            "startDate": "2024-03-01",
                            "endDate": "2024-05-15",
                            "githubUrl": "https://github.com/jdalfons/fraud-detection",
                            "liveUrl": null,
                            "features": [
                                "Real-time transaction monitoring",
                                "Ensemble ML models for fraud detection",
                                "Feature engineering pipeline",
                                "Low-latency prediction API",
                                "Alert system for suspicious activities"
                            ]
                        },
                        {
                            "id": 6,
                            "title": "Recommendation Engine",
                            "description": "Collaborative filtering and content-based recommendation system for e-commerce platforms, improving user engagement and conversion rates.",
                            "icon": "🎯",
                            "category": "Machine Learning",
                            "technologies": ["Python", "TensorFlow", "Apache Spark", "Redis", "FastAPI"],
                            "status": "In Progress",
                            "startDate": "2024-04-01",
                            "endDate": null,
                            "githubUrl": "https://github.com/jdalfons/recommendation-engine",
                            "liveUrl": null,
                            "features": [
                                "Collaborative filtering algorithms",
                                "Content-based recommendations",
                                "Hybrid recommendation approach",
                                "A/B testing framework",
                                "Real-time personalization"
                            ]
                        },
                        {
                            "id": 7,
                            "title": "Business Intelligence Platform",
                            "description": "Comprehensive BI solution with automated data ingestion, transformation, and visualization dashboards for executive decision-making.",
                            "icon": "📊",
                            "category": "Business Intelligence",
                            "technologies": ["Python", "Apache Airflow", "dbt", "Tableau", "Snowflake"],
                            "status": "Completed",
                            "startDate": "2023-10-01",
                            "endDate": "2024-01-31",
                            "githubUrl": "https://github.com/jdalfons/bi-platform",
                            "liveUrl": "https://bi.company.example.com",
                            "features": [
                                "Automated ETL pipelines",
                                "Data warehouse modeling",
                                "Executive dashboards",
                                "Self-service analytics",
                                "Data governance and lineage"
                            ]
                        },
                        {
                            "id": 8,
                            "title": "Microservices Architecture",
                            "description": "Scalable microservices platform built with Python, FastAPI, and Docker, implementing CQRS pattern and event-driven architecture.",
                            "icon": "🚀",
                            "category": "Backend Development",
                            "technologies": ["Python", "FastAPI", "Docker", "Kubernetes", "RabbitMQ", "MongoDB"],
                            "status": "In Progress",
                            "startDate": "2024-02-01",
                            "endDate": null,
                            "githubUrl": "https://github.com/jdalfons/microservices-platform",
                            "liveUrl": null,
                            "features": [
                                "Event-driven architecture",
                                "CQRS pattern implementation",
                                "Service discovery and load balancing",
                                "Distributed tracing and monitoring",
                                "API gateway with authentication"
                            ]
                        },
                        {
                            "id": 9,
                            "title": "Data Privacy Compliance Tool",
                            "description": "Automated GDPR compliance system for data anonymization, consent management, and privacy impact assessments.",
                            "icon": "🔐",
                            "category": "Data Privacy",
                            "technologies": ["Python", "Django", "PostgreSQL", "Celery", "React"],
                            "status": "Planning",
                            "startDate": "2024-06-01",
                            "endDate": null,
                            "githubUrl": null,
                            "liveUrl": null,
                            "features": [
                                "Data discovery and classification",
                                "Automated data anonymization",
                                "Consent management system",
                                "Privacy impact assessments",
                                "Compliance reporting and auditing"
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
                const projectsPerPage = 4;
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
        })