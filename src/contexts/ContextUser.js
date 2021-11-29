import React, { createContext, useReducer } from 'react'
import { initialStateAuth } from '../state/state'
import { authReducer } from '../state/Auth/AuthReducer'

export const CurrentUserContext = createContext([{}, () => {}])

export const CurrentUserContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(authReducer, initialStateAuth)

   return (
      <CurrentUserContext.Provider value={[state, dispatch]}>
         {children}
      </CurrentUserContext.Provider>
   )
}

