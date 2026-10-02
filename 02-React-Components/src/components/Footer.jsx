function Footer({ name, year }) {
    return (
        <footer className="footer">
            <div className="footer-container">

                <p>
                    © {year} {name}. Built with React.
                </p>

                <a href="#home">
                    Back to top ↑
                </a>

            </div>
        </footer>
    );
}

export default Footer;