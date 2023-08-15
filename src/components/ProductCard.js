import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
    const { cartList: products, addToCart, removeFromCart } = useCart();
    const [isInCart, setIsInCart] = useState(false);
    const { id, name, price, image } = product;

    useEffect(() => {
        const productIsInCart = products.find((item) => item.id === id);
        productIsInCart ? setIsInCart(true) : setIsInCart(false);
    }, [products, id]);

    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <div className="action">
                <p>${price}</p>
                {isInCart ? (
                    <button onClick={() => removeFromCart(product)} className="remove">
                        Remove
                    </button>
                ) : (
                    <button onClick={() => addToCart(product)}>Add To Cart</button>
                )}
            </div>
        </div>
    );
};
