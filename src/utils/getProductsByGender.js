const getProductsByGender = (products, gender) => {
    if(gender === 'MALE'){
        return [...products].filter(product => product.gender === 'm');
    } else if (gender === 'FEMALE') {
        return [...products].filter(product => product.gender === 'f');
    }
    return products;
}

export {getProductsByGender}