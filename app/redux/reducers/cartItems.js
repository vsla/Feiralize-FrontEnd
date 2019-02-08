const initialState ={
    cart: [
    ],
    cartValue:0

}

const cartItems = (state = initialState, action) => {
    console.log(state,action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart: [action.payload, ...state.cart ],
                cartValue: state.cartValue + action.payload.price
            }
        case "REMOVE_FROM_CART":
            return{
                state
            }
        default:
            return state
    }
}

export default cartItems
