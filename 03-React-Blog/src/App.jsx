import { useMemo, useState } from "react";
import PostCard from "./components/PostCard";
import posts from "./data/posts.json";
import "./App.css";


function App() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");


    const categories = [
        "All",
        ...new Set(posts.map((post) => post.category))
    ];


    const filteredPosts = useMemo(() => {

        return posts.filter((post) => {

            const matchesSearch =
                post.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||

                post.excerpt
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());


            const matchesCategory =
                selectedCategory === "All" ||
                post.category === selectedCategory;


            return matchesSearch && matchesCategory;

        });

    }, [searchTerm, selectedCategory]);


    return (
        <div className="app">

            {/* HEADER */}

            <header className="header">

                <div className="header-container">

                    <a href="#home" className="logo">
                        Alina<span>.</span>
                    </a>

                    <nav>
                        <a href="#home">Home</a>
                        <a href="#posts">Articles</a>
                        <a href="#about">About</a>
                    </nav>

                </div>

            </header>


            {/* HERO */}

            <main>

                <section id="home" className="hero">

                    <div className="container">

                        <div className="hero-badge">
                            ALINA'S TECH BLOG
                        </div>

                        <h1>
                            Ideas,
                            <span> technology,</span>
                            <br />
                            and things I'm building.
                        </h1>

                        <p>
                            Exploring software development, AI/ML,
                            computer vision, React, and practical
                            technology through projects and experiments.
                        </p>

                    </div>

                </section>


                {/* BLOG */}

                <section id="posts" className="blog-section">

                    <div className="container">

                        <div className="section-heading">

                            <div>

                                <span className="section-label">
                                    LATEST ARTICLES
                                </span>

                                <h2>
                                    Explore the blog
                                </h2>

                            </div>

                            <p>
                                Browse articles by topic or search
                                for something specific.
                            </p>

                        </div>


                        {/* SEARCH + FILTER */}

                        <div className="controls">

                            <div className="search-box">

                                <span>
                                    Search
                                </span>

                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(event) =>
                                        setSearchTerm(event.target.value)
                                    }
                                />

                            </div>


                            <div className="filter-box">

                                <label htmlFor="category">
                                    Category
                                </label>

                                <select
                                    id="category"
                                    value={selectedCategory}
                                    onChange={(event) =>
                                        setSelectedCategory(event.target.value)
                                    }
                                >

                                    {categories.map((category) => (
                                        <option
                                            key={category}
                                            value={category}
                                        >
                                            {category}
                                        </option>
                                    ))}

                                </select>

                            </div>

                        </div>


                        {/* RESULT COUNT */}

                        <div className="results-info">

                            <span>
                                Showing{" "}
                                <strong>
                                    {filteredPosts.length}
                                </strong>{" "}
                                article
                                {filteredPosts.length !== 1 ? "s" : ""}
                            </span>

                            {(searchTerm || selectedCategory !== "All") && (
                                <button
                                    className="clear-button"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCategory("All");
                                    }}
                                >
                                    Clear filters
                                </button>
                            )}

                        </div>


                        {/* POST CARDS */}

                        {filteredPosts.length > 0 ? (

                            <div className="posts-grid">

                                {filteredPosts.map((post) => (

                                    <PostCard
                                        key={post.id}
                                        title={post.title}
                                        excerpt={post.excerpt}
                                        category={post.category}
                                        author={post.author}
                                        date={post.date}
                                        readTime={post.readTime}
                                    />

                                ))}

                            </div>

                        ) : (

                            <div className="no-results">

                                <h3>
                                    No articles found
                                </h3>

                                <p>
                                    Try another search term or choose
                                    a different category.
                                </p>

                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCategory("All");
                                    }}
                                >
                                    Show all articles
                                </button>

                            </div>

                        )}

                    </div>

                </section>


                {/* ABOUT */}

                <section id="about" className="about-section">

                    <div className="container">

                        <div className="about-box">

                            <span className="section-label">
                                ABOUT THIS PROJECT
                            </span>

                            <h2>
                                A React blog powered by JSON data.
                            </h2>

                            <p>
                                This mini project uses React components,
                                state, JSON data, dynamic rendering,
                                search functionality, and category
                                filtering to create a responsive blog UI.
                            </p>

                        </div>

                    </div>

                </section>

            </main>


            {/* FOOTER */}

            <footer className="footer">

                <div className="footer-container">

                    <p>
                        © 2026 Alina Washim · React Blog UI
                    </p>

                    <a href="#home">
                        Back to top ↑
                    </a>

                </div>

            </footer>

        </div>
    );
}

export default App;