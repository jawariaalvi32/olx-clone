
const INITIAL_STATE = {
    
    pro:[ ]
}

export default (state = INITIAL_STATE, action) => {
    console.log("A => ",action.payload)
    switch(action.type) {
        case "SETPRODUCTS" :
            state.pro.length = 0;

            return ({
                ...state,
                pro:  [...state.pro, action.payload]
            })
        default:
            return state;
    }
}