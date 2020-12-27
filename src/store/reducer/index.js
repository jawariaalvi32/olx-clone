
const INITIAL_STATE = {
    
    productlist:[],
    product:[],
    categories:[],
    user:[]
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
        case "CURRENTUSER" :

            return ({
                ...state,
                user: action.payload
            })
        case "REMOVEUSER" :

            return ({
                ...state,
                user: []
            })
        default:
            return state;
    }
}