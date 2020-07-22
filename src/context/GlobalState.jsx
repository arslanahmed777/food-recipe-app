import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state

const initialState = {
    data : [],
    loading:false
    
}


// creat context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider =({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    
    

    const addTransaction = (transaction) =>{
        dispatch({
            type:"ADD_TRANSACTIONS",
            payload: transaction
        })
    }
    const isLoading = (status) =>{
        dispatch({
            type:"loading",
            payload: status
        })
    }

    return(
        <GlobalContext.Provider value={{
            recipes : state.data,
            addTransaction,
            loading : state.loading,
            isLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )

} 