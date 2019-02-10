export function add_to_cart(item) {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export function add_payment_method(item) {
    return {
        type: 'ADD_PAYMENT_METHOD',
        payload: item
    }
}