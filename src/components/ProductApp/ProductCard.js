import React from 'react';

const ProductCard = ({product, onChangeVote}) => {
    const {title, image, desc, category, vote} = product;
    return (
        <div className="product">
            <div className="thumbnail">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="cat">{category}</div>
            </div>
            <div className="button-box">
                <button onClick={event=>onChangeVote(product, true)}>&#x290A;</button>
                <div><strong>{vote}</strong></div>
                <button onClick={event=>onChangeVote(product)}>&#x290B;</button>
            </div>
        </div>
    );
};

export default ProductCard;