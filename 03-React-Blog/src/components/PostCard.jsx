function PostCard({
    title,
    excerpt,
    category,
    author,
    date,
    readTime
}) {
    return (
        <article className="post-card">

            <div className="post-card-top">
                <span className="post-category">
                    {category}
                </span>

                <span className="post-read-time">
                    {readTime}
                </span>
            </div>

            <h2>{title}</h2>

            <p className="post-excerpt">
                {excerpt}
            </p>

            <div className="post-footer">

                <div>
                    <strong>{author}</strong>
                    <span>{date}</span>
                </div>

                <button className="read-more">
                    Read article →
                </button>

            </div>

        </article>
    );
}

export default PostCard;