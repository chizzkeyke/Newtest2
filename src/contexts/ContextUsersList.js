import { createContext, useReducer } from 'react'
import { initialStateUserList } from '../state/state'
import { userListReducer } from '../state/UserList/UserListReducer'

export const ContextUserList = createContext([[], () => {}])


export const ContextUserListProvider = ({children}) => {
   const [state, dispatch] = useReducer(userListReducer, initialStateUserList)

   return (
      <ContextUserList.Provider value={[state, dispatch]}>
         {children}
      </ContextUserList.Provider>
   )
}
