function Card({
    title,
    category,
    description,
    technologies
}) {
    return (
        <article className="project-card">

            <div className="project-card-top">
                <span className="project-category">
                    {category}
                </span>
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            <div className="technology-list">
                {technologies.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

        </article>
    );
}

export default Card;