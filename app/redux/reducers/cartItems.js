const initialState ={
    cart: [{
        "title": "Brown eggs",
        "type": "dairy",
        "description": "Raw organic brown eggs in a basket",
        "filename": "0.jpg",
        "height": 600,
        "width": 400,
        "price": 28.1,
        "rating": 4,
        key:"12245321233"
    }, {
        "title": "Brown eggs",
        "type": "dairy",
        "description": "Raw organic brown eggs in a basket",
        "filename": "0.jpg",
        "height": 600,
        "width": 400,
        "price": 28.1,
        "rating": 4,
        key: "15215125"
    },
]
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
