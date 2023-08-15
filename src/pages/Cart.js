import { CartCard } from "../components";
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import "./Cart.css";

export const Cart = () => {
    const { cartList: products, total } = useCart();
    useTitle("Cart");

    return (
        <main>
            <section className="cart">
                <h1>
                    Cart Items: {products.length} | ${total}
                </h1>
                {products.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
            </section>
        </main>
    );
};
