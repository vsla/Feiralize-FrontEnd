/* eslint-disable no-param-reassign */
const initialState = {
  cart: [],
  cartValue: 0,
  payment_method: '',
  itemsSelected: {}
};

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log(state, action);

      /**
       * Add the category and his brands on a object way to find wich category and
       * brand are selected and how many brands in every category
       */
      if (action.payload.fatherCategory.id in state.itemsSelected) {
        state.itemsSelected[action.payload.fatherCategory.id].amountSelected += 1;
        state.itemsSelected[action.payload.fatherCategory.id].brands.push(action.payload.brandSelected.id);
      } else {
        state.itemsSelected[action.payload.fatherCategory.id] = {
          amountSelected: 1,
          brands: [action.payload.brandSelected.id]
        };
      }

      // Return the new state on redux
      return {
        cart: [action.payload, ...state.cart],
        cartValue: state.cartValue + 10,
        payment_method: state.payment_method,
        itemsSelected: { ...state.itemsSelected }
      };

    case 'REMOVE_FROM_CART':
      console.log(state, action);

      /**
       * Decrease one brand from the category 
       */
      state.itemsSelected[action.payload.fatherCategory.id].amountSelected -= 1;
      state.itemsSelected[action.payload.fatherCategory.id].pop(action.payload.brandSelected.id);

      return {
        cart: state.cart.filter((value) => value !== action.payload),
        cartValue: state.cartValue - 10,
        payment_method: state.payment_method,
        itemsSelected: { ...state.itemsSelected }
      };
      
    case 'ADD_PAYMENT_METHOD':
      return {
        cart: [...state.cart],
        cartValue: state.cartValue,
        payment_method: action.payload,
        itemsSelected: { ...state.itemsSelected }
      };

    case 'RESET_CART':
      return initialState;
    default:
      return state;
  }
};

export default cartItems;
