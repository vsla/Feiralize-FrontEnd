export function add_to_cart(item) {
    return {
        type: 'ADD_TO_CART',
        payload: Object.assign(item, { 'key': toString(Math.floor(Math.random() * 10001))})
    }
}