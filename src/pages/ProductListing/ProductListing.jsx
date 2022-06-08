import { FilterSidebar, ProductCard, SortBar } from '../../components';

import './ProductListing.css';
import { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import { sortProducts } from '../../utils/sortProducts';
import { getProductsByBrand } from '../../utils/getProductsByBrand';
import { getProductBySize } from '../../utils/getProductBySize';
import { getProductsByGender } from '../../utils/getProductsByGender';
import products from "../../assets/products.json";
const ProductListing = () => {
    const {
        productsList: {
            productData,
            filters: { sortBy, gender, brand, size },
        },
        getAllProductsHandler,
    } = useProducts();
    useEffect(() => {
        getAllProductsHandler();
    }, []);

    const sortedData = sortProducts(productData, sortBy);
    const sortByGender = getProductsByGender(sortedData, gender);
    const filteredData = getProductsByBrand(sortByGender, brand);
    const filterBySize = getProductBySize(filteredData, size);

    return (
        <div className="product-page-container">
            <div className="filter-section">
                <FilterSidebar />
            </div>
            <div className="products-section">
                <SortBar />
                <h2>Showing {filterBySize?.length}/{products?.length}</h2>
                <div className="products">
                    {filterBySize?.length > 0 ? (
                        filterBySize?.map((product) => (
                            <ProductCard product={product} key={product?._id} />
                        ))
                    ) : (
                        <h3>No products found.</h3>
                    )}
                </div>
            </div>
        </div>
    );
};
export { ProductListing };
