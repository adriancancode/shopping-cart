import { React, useState, useEffect } from 'react';
import Item from '../components/item';
import '../styles/shop.css';
import ShoppingCart from '../components/shoppingCart';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const addToCart = (item) => { 
        setCartItems(prevItems => [...prevItems, item]);
        setTotalPrice(prevTotal => prevTotal + item.price);
     }

    if (loading) return (
        <div>
            <h1>Shop</h1>
            <p>Loading...</p>
            
        </div>
    );
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Shop</h1>
            <div id="item-list">
                {products.map(product => (
                    <Item key={product.id} item={product} onAddToCart={addToCart}/>
                ))}
            </div>
            <h2>Shopping Cart</h2>
            <ShoppingCart cartItems={cartItems} totalPrice={totalPrice} />
        </div>
    );
}