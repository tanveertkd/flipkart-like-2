import { useCart } from '../../contexts/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { cartDispatch } = useCart();
    const { asset, title, price, discount } = product;
    return (
        <div className="card product-card">
            <div className="card-container card-img-vertical">
                <div className="card-asset-container">
                    <img src={asset} alt="card asset" className="card-image" />
                </div>

                <div className="card-body-content">
                    <h3 className="card-head">{title}</h3>
                    <p className="card-body">
                        Rs {(price - (price * discount) / 100).toFixed(2)} <strike>{price}</strike>
                    </p>
                    <p className="card-body">{discount}% off!</p>
                    <div className="card-buttons">
                        <button className="card-btn-buy">Buy Now</button>
                        <button
                            className="card-btn-add"
                            onClick={() =>
                                cartDispatch({ type: 'ADD_TO_CART', payload: { product } })
                            }
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ProductCard };
