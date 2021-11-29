import {SUCCESS_FETCH_USER_LIST, ERROR_FETCH_USER_LIST} from '../../state/UserList/constants'

export function userListReducer(state, action) {
   switch (action.type) {
      case SUCCESS_FETCH_USER_LIST:
         return {
            ...state,
            data: action.data
         }
      case ERROR_FETCH_USER_LIST:
         return {
            ...state,
            error: action.error
         }
      default:
         return state
   }
}