import React from 'react'
import './App.css'

const Cards = ({ data }) => {
    return (
        <div className="cards-grid">
            {data && data.map(article => (
                <div className="card" key={article.url}>
                    
                    {/* Image */}
                    {article.urlToImage ? (
                        <img
                            src={article.urlToImage}
                            alt={article.title}
                        />
                    ) : (
                        <div style={{
                            width: "100%",
                            height: "180px",
                            background: "#e5e7eb",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#6b7280"
                        }}>
                            No Image
                        </div>
                    )}

                    {/* Content */}
                    <div className="cardContent">
                        {/* ✅ Title is now clickable */}
                        <p>
                            <a href={article.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ 
                                    color: "#111827", 
                                    fontWeight: "600", 
                                    textDecoration: "none" 
                                }}
                                onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"}
                                onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}>
                                {article.title}
                            </a>
                        </p>

                        <p>{article.description}</p>

                        {/* Optional "Read More" link */}
                        <a href={article.url}
                            target="_blank"
                            rel="noopener noreferrer">
                            Read More →
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards
