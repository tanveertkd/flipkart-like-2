import { CartItemCard } from '../../components/CartItemCard/CartItemCard';
import { CartSummary } from '../../components/CartSummary/CartSummary';
import { SaveForLaterCard } from '../../components/SaveForLaterCard/SaveForLater';
import { useCart } from '../../contexts/CartContext';

import './Cart.css';

const Cart = () => {
    const {
        cartState: { cartItems, savedForLater },
    } = useCart();
    return (
        <div className="cart-parent">
            <div className="cart-header">My Cart</div>
            <div className="cart-body-container">
                {cartItems?.length > 0 ? (
                    <div className="cart-body">
                        {cartItems?.map((product) => (
                            <CartItemCard product={product} key={product?.id} />
                        ))}
                        <CartSummary />
                    </div>
                ) : (
                    <div>Your cart is empty! </div>
                )}

                <div className="save-for-later">
                    <h3>Items in later</h3>
                    {savedForLater?.length > 0 &&
                        savedForLater?.map((product) => <SaveForLaterCard product={product} />)}
                </div>
            </div>
        </div>
    );
};

export { Cart };
