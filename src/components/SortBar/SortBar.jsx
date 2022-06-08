import { useProducts } from '../../contexts/ProductContext';
import './Sortbar.css';
const SortBar = () => {
    const { productDispatch } = useProducts();
    return (
        <div className="sort-bar">
            <div className="sort-heading">Sort By</div>
            <div className="sort_item" onClick={() => productDispatch({ type: 'HIGH_TO_LOW' })}>
                High-to-Low
            </div>
            <div className="sort_item" onClick={() => productDispatch({ type: 'LOW_TO_HIGH' })}>
                Low-to-High
            </div>
        </div>
    );
};

export { SortBar };
