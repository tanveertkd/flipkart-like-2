import { createContext, useContext, useReducer } from 'react';
import products from '../assets/products.json';
import { productReducer } from '../reducers/ProductReducer';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const getAllProductsHandler = () => {
        // const productsFetch = async () => {
        //     const res = await fetch('../assets/products.json');
        //     const products = await res.json();
            
        //     console.log(products)
        //     productDispatch({ type: 'LOAD_ALL_PRODUCTS', payload: products });
        // };
        
        // productsFetch()
        productDispatch({ type: 'LOAD_ALL_PRODUCTS', payload: products });
    };

    const [productsList, productDispatch] = useReducer(productReducer, {
        productData: [],
        filters: {
            sortBy: '',
            brand: {
                adidas: false,
                allen_solly: false,
                arrow: false,
                arrow_sport: false,
                levis: false,
                blackberrys: false,
            },
            size: {
                xl: false,
                l: false,
                m: false,
                s: false,
            },
            rating: '0',
            priceRangeValue: 5000,
            excludeOutOfStock: false,
        },
    });

    return (
        <ProductContext.Provider value={{ productsList, productDispatch, getAllProductsHandler }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) throw new Error('Product context undefined');
    return context;
};

export { ProductContextProvider, useProducts };
