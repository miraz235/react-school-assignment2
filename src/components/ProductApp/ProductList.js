import React from 'react';
import ProductCard from './ProductCard'
import FlipMove from 'react-flip-move';

const ProductList = ({products, onChangeVote}) => {
    let productsHtml = products.map((product, i) => <li key={product.id} style={{ zIndex: 100 - i }}><ProductCard product={product} onChangeVote={onChangeVote} /></li> )
    return (
        <FlipMove 
            staggerDurationBy="30"
            duration={500}
            enterAnimation="accordionVertical" 
            leaveAnimation="accordionVertical"
            typeName="ul" 
            className="product-list">{productsHtml}</FlipMove>
    );
};

export default ProductList;