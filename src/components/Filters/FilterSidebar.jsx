import { useProducts } from '../../contexts/ProductContext';
import './FilterSidebar.css';

const FilterSidebar = () => {
    const {
        productDispatch,
        productsList: {
            filters: {
                gender,
                brand: { adidas, allen_solly, arrow, arrow_sport, levis, blackberrys },
                size: { xl, l, m, s },
            },
        },
    } = useProducts();

    return (
        <div>
            <div className="nav-sidebar-container">
                {/* <!-- Section 1 --> */}
                <ul className="nav-sidebar-ul nav-section-1">
                    <li className="sidebar-header">Filters</li>
                    <li className="sidebar-header">
                        <button
                            className="btn btn-default-outlined btn-clr"
                            onClick={() => productDispatch({ type: 'CLEAR_FILTERS' })}
                        >
                            Clear
                        </button>
                    </li>
                </ul>

                <hr />

                 {/* <!-- Section 2 --> */}

                <ul className="nav-sidebar-ul">
                    <li className="sidebar-header">Gender</li>

                    <li className="sidebar-item">
                        <div className="sidebar-item-sort">
                            <label htmlFor="sidebar-radio">
                                <input
                                    type="radio"
                                    id="sidebar-radio"
                                    name="sort-radio"
                                    value="low_to_high"
                                    checked={gender === 'MALE'}
                                    onChange={() => productDispatch({ type: 'MALE' })}
                                />
                                Male
                            </label>
                        </div>
                    </li>

                    <li className="sidebar-item">
                        <div className="sidebar-item-sort">
                            <label htmlFor="sidebar-radio-hl">
                                <input
                                    type="radio"
                                    id="sidebar-radio-hl"
                                    name="sort-radio"
                                    value="high_to_low"
                                    checked={gender === 'FEMALE'}
                                    onChange={() => productDispatch({ type: 'FEMALE' })}
                                />
                                Female
                            </label>
                        </div>
                    </li>
                </ul>

                <hr />

                {/* <!-- Section 3 --> */}
                <ul className="nav-sidebar-ul">
                    <li className="sidebar-header">Brand</li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-adidas">
                                <input
                                    type="checkbox"
                                    id="product-adidas"
                                    name="adidas"
                                    value="adidas"
                                    checked={adidas}
                                    onChange={() => productDispatch({ type: 'ADIDAS' })}
                                />
                                Adidas
                            </label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-allen-solly">
                                <input
                                    type="checkbox"
                                    id="product-allen-solly"
                                    name="allen-solly"
                                    value="allen_solly"
                                    checked={allen_solly}
                                    onChange={() => productDispatch({ type: 'ALLEN_SOLLY' })}
                                />
                                Allen Solly
                            </label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-levis">
                                <input
                                    type="checkbox"
                                    id="product-levis"
                                    name="levis"
                                    value="levis"
                                    checked={levis}
                                    onChange={() => productDispatch({ type: 'LEVIS' })}
                                />
                                Levis
                            </label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-arrow">
                                <input
                                    type="checkbox"
                                    id="product-arrow"
                                    name="product-arrow"
                                    value="arrow"
                                    checked={arrow}
                                    onChange={() => productDispatch({ type: 'ARROW' })}
                                />
                                Arrow
                            </label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-arrow-sport">
                                <input
                                    type="checkbox"
                                    id="product-arrow-sport"
                                    name="product-arrow-sport"
                                    value="arrow_sport"
                                    checked={arrow_sport}
                                    onChange={() => productDispatch({ type: 'ARROW_SPORT' })}
                                />
                                Arrow Sport
                            </label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-blackberrys">
                                <input
                                    type="checkbox"
                                    id="product-blackberrys"
                                    name="product-blackberrys"
                                    value="blackberrys"
                                    checked={blackberrys}
                                    onChange={() => productDispatch({ type: 'BLACKBERRYS' })}
                                />
                                Blackberrys
                            </label>
                        </div>
                    </li>
                </ul>

                <hr />

                {/* <!-- Section 3 --> */}
                <ul className="nav-sidebar-ul">
                    <li className="sidebar-header">Size</li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-xl">
                                <input
                                    type="checkbox"
                                    id="product-xl"
                                    name="product-xl"
                                    value="xl"
                                    checked={xl}
                                    onChange={() => productDispatch({ type: 'XL' })}
                                />
                                XL
                            </label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-l">
                                <input
                                    type="checkbox"
                                    id="product-l"
                                    name="product-l"
                                    value="l"
                                    checked={l}
                                    onChange={() => productDispatch({ type: 'L' })}
                                />
                                L
                            </label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-m">
                                <input
                                    type="checkbox"
                                    id="product-m"
                                    name="product-m"
                                    value="m"
                                    checked={m}
                                    onChange={() => productDispatch({ type: 'M' })}
                                />
                                M
                            </label>
                        </div>
                    </li>
                    <li className="sidebar-item">
                        <div className="sidebar-item-checkbox">
                            <label htmlFor="product-s">
                                <input
                                    type="checkbox"
                                    id="product-s"
                                    name="product-s"
                                    value="s"
                                    checked={s}
                                    onChange={() => productDispatch({ type: 'S' })}
                                />
                                S
                            </label>
                        </div>
                    </li>
                </ul>

                <hr />
            </div>
        </div>
    );
};

export { FilterSidebar };
