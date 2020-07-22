export default (state,action) =>{
    
    switch(action.type){
        case "ADD_TRANSACTIONS":
            return{
                ...state,
                data:action.payload,...state.data 
            }
        default:
            return state;
    }
}