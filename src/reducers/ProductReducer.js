const productReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_ALL_PRODUCTS':
            return {
                ...state,
                productData: action.payload,
            };

        case 'HIGH_TO_LOW':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sortBy: action.type,
                },
            };

        case 'LOW_TO_HIGH':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    sortBy: action.type,
                },
            };

        case 'MALE':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    gender: action.type,
                },
            };

        case 'FEMALE':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    gender: action.type,
                },
            };

        case 'ADIDAS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand: {
                        ...state.filters.brand,
                        adidas: !state.filters.brand.adidas,
                    },
                },
            };

        case 'ALLEN_SOLLY':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand: {
                        ...state.filters.brand,
                        allen_solly: !state.filters.brand.allen_solly,
                    },
                },
            };

        case 'ARROW':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand: {
                        ...state.filters.brand,
                        arrow: !state.filters.brand.arrow,
                    },
                },
            };

        case 'ARROW_SPORT':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand: {
                        ...state.filters.brand,
                        arrow_sport: !state.filters.brand.arrow_sport,
                    },
                },
            };

        case 'LEVIS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand: {
                        ...state.filters.brand,
                        levis: !state.filters.brand.levis,
                    },
                },
            };

        case 'BLACKBERRYS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brand: {
                        ...state.filters.brand,
                        blackberrys: !state.filters.brand.blackberrys,
                    },
                },
            };

        case 'XL':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    size: {
                        ...state.filters.size,
                        xl: !state.filters.size.xl,
                    },
                },
            };

        case 'L':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    size: {
                        ...state.filters.size,
                        l: !state.filters.size.l,
                    },
                },
            };
        case 'M':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    size: {
                        ...state.filters.size,
                        m: !state.filters.size.m,
                    },
                },
            };
        case 'S':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    size: {
                        ...state.filters.size,
                        s: !state.filters.size.s,
                    },
                },
            };

        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    sortBy: '',
                    gender: '',
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
            };
        default:
            return state;
    }
};

export {productReducer}