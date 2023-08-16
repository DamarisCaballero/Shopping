/**
 * esta funcion calcula el precio total de la nueva orden
 * @param {Array} products cartProduct: array of objects
 * @returns {numer} total price
 */
export const totalPrice = ( products) => {
    let sum = 0 
    products.forEach(products => sum += products.price) 
    return sum

    };
