import { CartCard } from "../components";
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { Product } from "../models/product";
import "./Cart.css";

interface CartInfo {
  cartList: Product[];
  total: number;
}

export const Cart = () => {
  const { cartList: products, total }: CartInfo = useCart();
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
