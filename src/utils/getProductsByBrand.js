const getProductsByBrand = (products, brands) => {
    let filteredProducts = [];
    let count = 0;
	for (let brand in brands) {
		if (brands[brand]) {
			let newList = products.filter(
				(item) => brand === item.brand.toLowerCase()
			);

			filteredProducts.push(...newList);
		} else {
			count++;
		}
	}

	return count === 6 ? products : filteredProducts;
};

export { getProductsByBrand };
