import React, { createContext,useContext,useReducer } from 'react'

//prepares the data
export const StateContext = createContext();



//warp our app and provide the data layer
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// pull info from dtata layer
export const useStateValue=()=>useContext(StateContext);