export function add_to_cart(item) {
    return {
        type: 'ADD_TO_CART',
        payload: item
    };
}

export function add_payment_method(item) {
    return {
        type: 'ADD_PAYMENT_METHOD',
        payload: item
    };
}

export function remove_from_cart(item) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    };
}

export function reset_cart(item) {
    return {
        type: 'RESET_CART',
        payload: item
    };
}
export function add_subcategory_amount(item) {
    return {
        type: 'ADD_SUBCATEGORY_AMOUNT',
        payload: item
    };
}
//this.props.reset_cart
