import React from 'react';
import '../styles/item.css';

export default function Item({ item, onAddToCart }) {
    const handleAddToCart = () => {
        onAddToCart(item);
    };

    return (
        <div className="item">
            <div className="item-content">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>${item.price.toFixed(2)}</p>
            </div>
            <div className='add-button'>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            
        </div>
    );
}