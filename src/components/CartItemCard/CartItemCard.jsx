import { useCart } from '../../contexts/CartContext';
import './CartItemCard.css';

const CartItemCard = ({ product }) => {
    const { cartDispatch } = useCart();
    const { _id, asset, title, price, discount, qty } = product;

    return (
        <div className="cart-items" key={_id}>
            <div className="cart-item-card">
                <div className="cart-asset-container">
                    <img src={asset} alt="cart item asset" className="cart-item-asset" />
                </div>

                <div className="cart-item-details">
                    <div className="cart-item-info">
                        <p className="item-name">{title}</p>
                        <p className="item-price">
                            Rs {(price - (price * discount) / 100).toFixed(2)}{' '}
                            <strike>{price}</strike>{' '}
                        </p>
                        <p className="item-discount">{discount}% off</p>
                        <div className="item-quantity">
                            <p>Quantity</p>
                            <div className="item-qty">
                                <button
                                    className="item-qty-btn item-qty-minus"
                                    disabled={qty < 2}
                                    onClick={() =>
                                        cartDispatch({ type: 'DECREMENT', payload: { _id } })
                                    }
                                >
                                    -
                                </button>
                                <div className="qty">{qty}</div>
                                <button
                                    className="item-qty-btn item-qty-add"
                                    onClick={() =>
                                        cartDispatch({ type: 'INCREMENT', payload: { _id } })
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item-buttons">
                        <button
                            className="item-card-btn item-btn-cart"
                            onClick={() =>
                                cartDispatch({ type: 'REMOVE_ITEM', payload: { product } })
                            }
                        >
                            Remove From Cart
                        </button>
                        <button
                            className="item-card-btn item-btn-wishlist"
                            onClick={() => {
                                cartDispatch({ type: 'SAVE_FOR_LATER', payload: { product } });
                            }}
                        >
                            Save for Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CartItemCard };
