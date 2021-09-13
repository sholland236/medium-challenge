import React from "react";
import "./Featured.scss";
import Article from "../Article/Article"

const Featured = (props) => {
    // include: image, button, name, blurb, 'article'
    // const featuredArr = props.featuredArr.map((feature) => (
        // <div>
        //     <div>
        //         <h2>{feature.featuredTitle}</h2>
        //         <img src="{feature.featuredImage}" alt="" />
        //     </div>
        // </div>
        // )
    // )

    const writerName = props.writerName;
    const writerBio = props.writerBio;
    
    return (
        <div className="featured-container">
            <h2>FEATURED WRITER</h2>
            <div className="flex-container">
                <div className="image-button">
                    <img className="featured-image" src="https://placebear.com/cache/150-145.jpg" alt="" />
                    <button>Follow</button>
                </div>
                <div className="featured-info">
                    <h3 className="writer-name">{writerName}</h3>
                    <p>{writerBio}</p>
                </div>
                <div className="featured-articles">
                    <Article articleArr={props.featuredArr} isSmall />
                </div>
            </div>
        </div>
    )
}

export default Featured;