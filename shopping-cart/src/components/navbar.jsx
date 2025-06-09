import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import {  House, ShoppingCart } from 'lucide-react';


export default function Navbar() {
    return (
        <nav>
            <ShoppingCart/>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    ); 
}
