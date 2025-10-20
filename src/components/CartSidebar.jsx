import { CgClose } from "react-icons/cg";
const CartSidebar = ({ toggleCart }) => {
  return (
    <>
      <div id="cart-sidebar" className="cart-sidebar">
        <div className="cart-content">
          <div className="cart-header">
            <h2 className="cart-title">Your Cart</h2>
            <button id="cart-close" className="cart-close" onClick={toggleCart}>
              <CgClose
                style={{ color: "red", fontWeight: 700, fontSize: "18px" }}
              />
            </button>
          </div>

          <div id="cart-items" className="cart-items">
            {/* Cart items will be added here dynamically */}
            <div className="empty-cart">Your cart is empty</div>
          </div>

          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span id="cart-subtotal">$0.00</span>
            </div>
            <p className="cart-note">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="checkout-button-container">
              <a href="#" className="checkout-button">
                Checkout
              </a>
            </div>
            <div className="continue-shopping-container">
              <p>or</p>
              <button
                id="continue-shopping"
                className="continue-shopping"
                onClick={toggleCart}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="cart-overlay" className="cart-overlay"></div>
    </>
  );
};

export default CartSidebar;
