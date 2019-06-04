const initialState = {
  cart: [],
  cartValue: 0,
  payment_method: '',

};

const cartItems = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        cart: [action.payload, ...state.cart],
        cartValue: state.cartValue + 10,
        payment_method: state.payment_method
      };
    case 'REMOVE_FROM_CART':
      return {
        cart: state.cart.filter((value) => value !== action.payload),
        cartValue: state.cartValue - 10,
        payment_method: state.payment_method
      };
      
    case 'ADD_PAYMENT_METHOD':
      return {
        cart: [...state.cart],
        cartValue: state.cartValue,
        payment_method: action.payload,
      };
    
    case 'RESET_CART':
      return initialState;
    default:
      return state;
  }
};

export default cartItems;
