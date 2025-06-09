import React from 'react';

export default function ShoppingCart({ cartItems, totalPrice }) {
    return (
        <div id="cart">
            {cartItems.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                </div>
            )}
            <p>To add items to your cart, go back to the home page.</p>
        </div>
    );
}