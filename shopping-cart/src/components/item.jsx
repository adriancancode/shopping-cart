import React from 'react';
import '../styles/item.css';

export default function Item({ item, onAddToCart }) {
    const handleAddToCart = () => {
        onAddToCart(item);
    };

    return (
        <div className="item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}