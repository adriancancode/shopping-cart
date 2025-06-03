

export default function Cart() {
    const[cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    if (cartItems.length === 0) {
        return (
            <div>
            <h1>Shopping Cart</h1>
            <p>Your cart is currently empty.</p>
            <p>To add items to your cart, go back to the home page.</p>
            </div>
        );
    }
    return (
        <div>
        <h1>Shopping Cart</h1>
        <p>Your cart is currently empty.</p>
        <p>To add items to your cart, go back to the home page.</p>
        </div>
    );
}