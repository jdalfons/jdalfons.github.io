import './posts.css';
import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const Posts = () => {
    const posts = [
        {
            title: "Choosing the Best Iteration Technique for Optimized Python Code",
            excerpt: "A performance study and practical guide for Python iteration: for loops, list comprehensions, and high-order functions. Covers use cases, benchmark results, and guidance for choosing the optimal approach.",
            date: "Apr 13, 2023",
            readTime: "8 min read",
            category: "Python",
            url: "https://medium.com/globant/for-loop-vs-list-comprehension-vs-high-order-functions-a766a8b9cbe1",
            // image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ppIraHDcBrVCdINmGfx_Bg.png"
        },
        {
            title: "7 Python Techniques to Enhance Your Coding Skills",
            excerpt: "Practical techniques for Python developers to optimize workflow, improve code readability, and boost performance, including type hints, dataclasses, inheritance, decorators, lambdas, and more.",
            date: "Aug 18, 2023",
            readTime: "5 min read",
            category: "Python",
            url: "https://medium.com/@juandiego.alfonsoocampo/7-python-techniques-to-enhance-your-coding-skills-cd928c700537"
        },
        {
            title: "Embracing the Power of Taking Action and Achieving in Life",
            excerpt: "A motivational essay encouraging readers to break free from inaction and pursue meaningful progress through conscious, goal-aligned decisions.",
            date: "Aug 25, 2023",
            readTime: "3 min read",
            category: "Personal Growth",
            url: "https://medium.com/@juandiego.alfonsoocampo/embracing-the-power-of-taking-action-and-achieving-in-life-72c4611e9b9d"
        },
        {
            title: "Unlocking Growth and Self-Discovery: Embrace the Journey Beyond Your Comfort Zone",
            excerpt: "A personal reflection on growth, self-discovery, and building a vibrant, meaningful life by stepping outside your comfort zone and making intentional choices.",
            date: "Sep 6, 2023",
            readTime: "2 min read",
            category: "Personal Growth",
            url: "https://medium.com/@juandiego.alfonsoocampo/unlocking-growth-and-self-discovery-embrace-the-journey-beyond-your-comfort-zone-b5616bceec6d"
        },
        {
            title: "Morse code in Raspberry PI",
            excerpt: "Step-by-step beginner-friendly project to send Morse code signals using a Raspberry Pi, LED, and Python, with practical code and hardware setup.",
            date: "Jun 23, 2020",
            readTime: "6 min read",
            category: "Raspberry Pi",
            url: "https://dev.to/halcolo/morse-code-in-raspberry-pi-1h9b",
            // image: "https://res.cloudinary.com/practicaldev/image/fetch/s--_pyWGSyD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/xr0e6gy34kq1vdlqoj4h.jpg"
        },
        {
            title: "XPATH for Scraping",
            excerpt: "A beginner's tutorial on XPath for web scraping. Learn the basics of XPath syntax, browser usage, and practical examples for extracting data from websites.",
            date: "May 17, 2021",
            readTime: "6 min read",
            category: "Web Scraping",
            url: "https://dev.to/halcolo/xpath-for-scraping-1h5g"
        }
    ];

    return (
        <section id="posts" className="posts-section">
            <div className="posts-container">
                <h2 className="posts-title">
                    Latest Thoughts
                </h2>

                <div className="posts-list">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="post-card group"
                        >
                            {post.image && (
                                <div className="post-cover">
                                    <img src={post.image} alt={post.title} />
                                </div>
                            )}
                            <div className="post-content-wrapper">
                                <div className="post-main">
                                    <div className="post-meta">
                                        <span className="post-category">
                                            {post.category}
                                        </span>
                                        <div className="post-meta-item">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                        <div className="post-meta-item">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h3 className="post-title">
                                        {post.title}
                                    </h3>

                                    <p className="post-excerpt">
                                        {post.excerpt}
                                    </p>

                                    <a href={post.url} className="post-link group-hover:translate-x-1" target="_blank" rel="noopener noreferrer">
                                        Read Article <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="posts-footer">
                    <a href="#" className="view-all-btn">
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Posts;
