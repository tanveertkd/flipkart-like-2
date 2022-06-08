const getProductBySize = (products, sizes) => {
    const filteredBySize = [];
    let count = 0;
    for (let size in sizes) {
        if (sizes[size]) {
            let newList = products.filter((product) => size === product.size.toLowerCase());
            filteredBySize.push(...newList);
        } else {
            count++;
        }
    }

    return count === 4 ? products : filteredBySize;
};

export { getProductBySize };
