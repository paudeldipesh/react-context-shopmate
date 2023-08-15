import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({ product }) => {
    const { removeFromCart } = useCart();
    const { name, price, image } = product;

    return (
        <div className="cart-cart">
            <img src={image} alt={name} />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
            <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
    );
};
