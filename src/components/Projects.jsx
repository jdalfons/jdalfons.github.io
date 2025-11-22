import './projects.css';
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Security Alerts Dashboard",
            objective: "📊 Monitor and predict security threats in real-time",
            description: "Interactive dashboard built with Python and Streamlit for real-time security alerts monitoring. Features predictive modeling, KPI tracking, and automated reporting for business intelligence.",
            tags: ["Python", "Streamlit", "Pandas", "Plotly"],
            image: "src/assets/screen1.png",
            links: { demo: "https://huggingface.co/spaces/jdalfonso/sise_opsie", github: "https://github.com/jdalfons/security_m2sise/tree/main" }
        },
        {
            title: "Re-Pilot Recycling chatbot LLM",
            objective: "♻️ AI-powered waste sorting guidance for sustainable living",
            description: "Intelligent recycling chatbot using RAG (Retrieval-Augmented Generation) and Mistral AI API. Provides contextualized waste sorting guidance based on user location while measuring environmental impact through model size optimization.",
            tags: ["Python", "MistralAI", "Docker", "Streamlit", "ChromaDB"],
            links: { demo: null, github: "https://github.com/jdalfons/RePilot-recycle-chatbot" }
        },
        {
            title: "M2-Enedis Energy Analytics Platform",
            objective: "⚡ Predict and optimize energy consumption patterns",
            description: "Comprehensive energy consumption analytics dashboard built with Dash and Plotly. Features machine learning predictions for energy labels and consumption, interactive maps, and RESTful API endpoints for real-time data analysis.",
            tags: ["Python", "Dash", "Plotly", "FastAPI", "Machine Learning"],
            links: { demo: null, github: "https://github.com/jdalfons/M2-SISE-Enedis" }
        },
        {
            title: "Astronomer Theme",
            objective: "🎨 Beautiful coding environment for developers",
            description: "A soft and epic Visual Studio Code theme designed for developers who want an aesthetically pleasing coding environment. Features carefully crafted color schemes and syntax highlighting.",
            tags: ["TypeScript", "JSON", "CSS", "VS Code API"],
            links: { demo: "https://marketplace.visualstudio.com/items?itemName=jdalfons.astronomer-theme", github: "https://github.com/jdalfons/astronomer-theme" }
        },
        {
            title: "Scraper NLP Tripadvisor",
            objective: "🍽️ Analyze restaurant reviews with AI-powered insights",
            description: "NLP-powered web scraping system that analyzes Tripadvisor restaurant reviews. Features automated data collection, sentiment analysis, and AI-powered summarization of customer feedback using Mistral AI.",
            tags: ["Python", "BeautifulSoup", "PostgreSQL", "Streamlit", "NLP"],
            links: { demo: null, github: "https://github.com/jdalfons/scraper-nlp-tripadvisor" }
        },
        {
            title: "Reddit & Arxiv Search Engine",
            objective: "🔍 Unified search across academic and community platforms",
            description: "Advanced search engine for articles from Reddit and Arxiv platforms, designed to improve usage and accessibility. Features intelligent content discovery and unified search across academic and community platforms.",
            tags: ["Python", "FastAPI", "Reddit API", "Arxiv API", "Streamlit"],
            links: { demo: "https://jdalfons.github.io/search_engine/moduleIndex.html", github: "https://github.com/jdalfons/search_engine" }
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="projects-title">
                    Featured Projects
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group"
                        >
                            {project.image && (
                                <div className="project-cover">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            )}
                            <div className="project-glow"></div>

                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-name">
                                        {project.title}
                                    </h3>
                                    <div className="project-links">
                                        <a href={project.links.github} className="project-link-icon" title="View Code" target="_blank" rel="noopener noreferrer">
                                            <Github size={20} />
                                        </a>
                                        {project.links.demo && (
                                            <a href={project.links.demo} className="project-link-icon" title="Live Demo" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="project-objective">
                                    {project.objective}
                                </p>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="project-tag"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
