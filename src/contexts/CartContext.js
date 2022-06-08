import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload.product, qty: 1 }],
                };

            case 'SAVE_FOR_LATER':
                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        (item) => item._id !== action.payload.product._id,
                    ),
                    savedForLater: [...state.savedForLater, action.payload.product],
                };

            case 'INCREMENT':
                return {
                    ...state,
                    cartItems: state.cartItems.map((product) =>
                        product._id === action.payload._id
                            ? { ...product, qty: product.qty + 1 }
                            : product,
                    ),
                };

            case 'DECREMENT':
                return {
                    ...state,
                    cartItems: state.cartItems.map((product) =>
                        product._id === action.payload._id
                            ? { ...product, qty: product.qty - 1 }
                            : product,
                    ),
                };

            case 'MOVE_TO_CART':
                return {
                    ...state,
                    savedForLater: state.savedForLater.filter(
                        (item) => item._id !== action.payload.product._id,
                    ),
                    cartItems: [...state.cartItems, action.payload.product],
                };

            case 'REMOVE_ITEM':
                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        (item) => item._id !== action.payload.product._id,
                    ),
                };

            case 'REMOVE_LATER_ITEM':
                return {
                    ...state,
                    savedForLater: state.savedForLater.filter(
                        (item) => item._id !== action.payload.product._id,
                    ),
                };

            default:
                return state;
        }
    };

    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cartItems: [],
        savedForLater: [],
    });
    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>{children}</CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) throw new Error('Cart context undefined');
    return context;
};

export { CartContextProvider, useCart };
