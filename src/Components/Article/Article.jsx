import React from "react";
import "./Article.scss";

// styling isPrimaryArticle to make large

const Article = (props) => {
    const articlesArr = props.articleArr.map((article) => (
        <div className="article-styling">
            <div className="article-info">
                <h2>{article.articleTitle}</h2>
                <p className="article-blurb">{article.articleBlurb}</p>
            </div>
            <img src={article.articleImage} alt="" />
        </div>
    ))

    let articleItem = "article-item";
    if (props.isPrimaryArticle) {
        articleItem += " primary-article"
    }
    if (props.isSmall) {
        articleItem += " small-article"
    }
    if (props.isPopular) {
        articleItem += " popular-article"
    }

    return (
        <div className={articleItem}>
            {articlesArr}
        </div>
    )
}

export default Article;