const initialState ={
    cart: [],
    cartValue: 0,
    payment_method: '',
    
}

const cartItems = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart: [action.payload, ...state.cart ],
                cartValue: parseFloat(parseFloat(state.cartValue + action.payload.price).toFixed(2)),
                payment_method: state.payment_method
            }
            break;
        case "REMOVE_FROM_CART":
            return{
                cart: state.cart.filter((value) => {return  value != action.payload}),
                cartValue: parseFloat(parseFloat(state.cartValue - action.payload.price).toFixed(2)),
                payment_method: state.payment_method
            }
            break;
        case "ADD_PAYMENT_METHOD":
            return{
                cart: [...state.cart],
                cartValue: state.cartValue,
                payment_method: action.payload
            }
        default:
            return state
    }
    
}

export default cartItems
