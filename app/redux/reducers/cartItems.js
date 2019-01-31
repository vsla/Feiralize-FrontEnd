const initialState ={
    cart : []
}

const cartItems = (state = initialState, action) => {
    console.log(state,action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart: [action.payload, ...state.cart ]
            }
        default:
            return state
    }
}

export default cartItems
