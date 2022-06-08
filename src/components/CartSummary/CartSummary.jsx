import { useCart } from '../../contexts/CartContext';
import './CartSummary.css';

const CartSummary = () => {
    const { cartState: {cartItems} } = useCart();
    
    const getDiscountedPrice = (product) => {
        return product.reduce(
            (accumulator, current) =>
                (accumulator += (current.price * current.discount) / 100) * current.qty,
            0,
        );
    };

    const getCartTotalValue = (product) => {
        return product.reduce(
            (accumulator, current) => (accumulator += current.price * current.qty),
            0,
        );
    };

    const totalValue = getCartTotalValue(cartItems);
    const discountedPrice = getDiscountedPrice(cartItems).toFixed(2);

    return (
        <div class="cart-summary">
            <div class="cart-summary-head">Price Details</div>
            <hr />
            <ul class="cart-summary-items">
                <ul class="cart-summary-item">
                    <li class="summary-item">Price ({cartItems?.length} Items)</li>
                    <li class="summary-item">Rs {totalValue} </li>
                </ul>

                <ul class="cart-summary-item">
                    <li class="summary-item">Discount</li>
                    <li class="summary-item">Rs -{discountedPrice}</li>
                </ul>

                <ul class="cart-summary-item">
                    <li class="summary-item">Delivery Charges</li>
                    {totalValue > 999 ? (
                        <li class="summary-item">FREE</li>
                    ) : (
                        <li class="summary-item">Rs 99/-</li>
                    )}
                </ul>
            </ul>
            <hr />
            <div class="cart-summary-total">
                <ul class="cart-summary-item">
                    <li class="summary-item summary-total-item">Total Amount</li>
                    <li class="summary-item summary-total-item">
                        Rs {(totalValue - discountedPrice).toFixed(2)}
                    </li>
                </ul>
            </div>
            <hr />
            <div class="cart-summary-savings">
                You will save Rs {discountedPrice} on this order.
            </div>

            <div class="item-buttons">
                <button
                    class="item-card-btn summary-btn"
                    // onClick={() => handlePayment()}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export { CartSummary };