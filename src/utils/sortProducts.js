const sortProducts = (productList, sortBy) => {
    if (sortBy === 'HIGH_TO_LOW') {
        return [...productList].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'LOW_TO_HIGH') {
        return [...productList].sort((a, b) => a.price - b.price);
    }
    return productList;
}

export {sortProducts}