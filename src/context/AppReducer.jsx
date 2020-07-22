export default (state,action) =>{
    
    switch(action.type){
        case "ADD_TRANSACTIONS":
            return{
                ...state,
                data:action.payload,...state.data 
            }
        case "loading":
            return{
                ...state,
                loading:action.payload
            }
        default:
            return state;
    }
}