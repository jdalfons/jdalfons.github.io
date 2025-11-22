import './header.css';
import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const whatIDoTexts = ["Data Scientist", "Software engineer", "Solution provider"];

    const socialLinks = [
        { icon: Github, href: "https://github.com/jdalfons", label: "GitHub", color: "var(--color-accent-purple)" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/jdalfons", label: "LinkedIn", color: "var(--color-secondary-blue)" },
        { icon: Twitter, href: "https://x.com/jdalf", label: "X.com", color: "var(--color-accent-pink)" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['profile', 'projects', 'posts'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            // Set profile as active if we're at the top
            if (window.scrollY < 100) {
                setActiveSection('profile');
                return;
            }

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="profile" className="header-container">
            {/* Navigation */}
            <nav className="header-nav">
                <a
                    href="#profile"
                    className={`nav-link ${activeSection === 'profile' ? 'active' : ''}`}
                >
                    Main
                </a>
                <a
                    href="#projects"
                    className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                >
                    Projects
                </a>
                <a
                    href="#posts"
                    className={`nav-link ${activeSection === 'posts' ? 'active' : ''}`}
                >
                    Posts
                </a>
            </nav>

            {/* Background decoration */}
            <div className="header-bg-decoration">
                <div className="blob blob-pink"></div>
                <div className="blob blob-purple"></div>
                <div className="blob blob-blue"></div>
            </div>

            <div className="header-content space-y-8">
                {/* Photo Placeholder */}
                <div className="profile-photo-container">
                    <div className="profile-glow"></div>
                    <img
                        src="https://unavatar.io/github/jdalfons"
                        alt="Juan Alfonso"
                        className="profile-img"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="header-title">
                        Juan Alfonso
                    </h1>
                    <div className="typewriter-container">
                        <h2 className="pixel-font-title">
                            <Typewriter
                                words={whatIDoTexts}
                                loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={110}
                                deleteSpeed={60}
                                delaySpeed={1000}
                            />
                        </h2>
                    </div>
                    <p className="header-description">
                        Colombian tech lover living in France. I work on diverse data science and data engineering projects across various industries. Passionate about open-source technologies, Space, and sports, I'm constantly seeking new challenges and opportunities to grow, learn, and make a meaningful impact.
                    </p>
                </div>

                {/* Social Links */}
                <div className="social-links">
                    {socialLinks.map((social, i) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={i}
                                href={social.href}
                                className="social-btn group"
                                title={social.label}
                                style={{ '--social-color': social.color }}
                            >
                                <Icon size={24} className="social-icon" />
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
