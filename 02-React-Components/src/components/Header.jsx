function Header({ name, links }) {
    return (
        <header className="header">
            <div className="header-container">

                <a href="#home" className="brand">
                    {name}<span>.</span>
                </a>

                <nav className="nav">
                    {links.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

            </div>
        </header>
    );
}

export default Header;