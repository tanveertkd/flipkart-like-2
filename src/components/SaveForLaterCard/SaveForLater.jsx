import { useCart } from '../../contexts/CartContext';
import '../CartItemCard/CartItemCard.css';

const SaveForLaterCard = ({ product }) => {
    const {cartDispatch} = useCart();
    const { id, asset, title, price, discount, qty } = product;
    return (
        <div className="cart-items" key={id}>
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
                                    // onClick={() => updateHandler(item, 'decrement')}
                                >
                                    -
                                </button>
                                <div className="qty">{qty}</div>
                                <button
                                    className="item-qty-btn item-qty-add"
                                    // onClick={() => updateHandler(item, 'increment')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="item-buttons">
                        <button
                            className="item-card-btn item-btn-cart"
                            onClick={() => cartDispatch({type: 'MOVE_TO_CART', payload: {product}})}
                        >
                            Move To Cart
                        </button>
                        <button
                            className="item-card-btn item-btn-wishlist"
                            onClick={() => {
                                cartDispatch({type: 'REMOVE_LATER_ITEM', payload: {product}})
                            }}
                        >
                            Remove From Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { SaveForLaterCard };
