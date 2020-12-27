
const INITIAL_STATE = {
    
    productlist:[],
    product:[],
    categories:[]
}

export default (state = INITIAL_STATE, action) => {
    console.log("A => ",action.payload)
    switch(action.type) {
        case "SETPRODUCTS" :
            state.productlist.length = 0;

            return ({
                 ...state,
                productlist:   action.payload
            })
        case "SHOWPRODUCT" :
            state.product.length = 0;

            return ({
                ...state,
                product:   [...state.product, action.payload]
            })
        case "GETCATEGORIES" :
            state.categories.length = 0;

            return ({
                ...state,
                categories: action.payload
            })
        
        default:
            return state;
    }
}