// import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './CartSummary.css';
// import favicon from '../../assets/favicon.png'

const CartSummary = () => {
    const { cartState: {cartItems}, handleOrderedItems, clearCart } = useCart();
    
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
    const finalPrice = (totalValue - discountedPrice).toFixed(2);
    const navigate = useNavigate();
    
    // // Payment Integration
    // const loadScript = async (url) => {
    //     return new Promise((resolve) => {
    //         const script = document.createElement('script');
    //         script.src = url;

    //         script.onload = () => {
    //             resolve(true);
    //         };

    //         script.onerror = () => {
    //             resolve(false);
    //         };
    //         document.body.appendChild(script);
    //     });
    // };

    // const displayRazorpayModal = async () => {
    //     const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    //     if (!res) {
    //         toast.error('Something went wrong.');
    //         return;
    //     }
    //     const options = {
    //         key: process.env.REACT_APP_RAZORPAY_TOKEN,
    //         amount: finalPrice * 100,
    //         currency: 'INR',
    //         name: 'TI Ecom Store',
    //         description: 'Thanks for shopping with us!',
    //         image: favicon,
    //         handler: function (response) {
    //             // Getting the paymentId and creating a user order id.
    //             // const paymentId = response.razorpay_payment_id;
    //             // const orderId = uuid();
    //             clearCart();
    //             navigate('/cartsummary');
    //         },
    //         theme: {
    //             color: '#FFC400',
    //         },
    //         prefill: {
    //             name: 'John Smith',
    //             email: 'john@gmail.com',
    //             contact: '1234567891',
    //         },
    //     };
    //     const paymentObject = new window.Razorpay(options);
    //     paymentObject.open();
    // };

    // const handlePayment = () => {
    //     handleOrderedItems();
    //     console.log(cartItems.orderedItems)
    //     displayRazorpayModal();
    // };

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