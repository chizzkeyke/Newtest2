import {LOGGED_IN, LOGOUT} from './constants'

export function authReducer(state, action) {
   switch (action.type) {
      case LOGGED_IN:
         return {
            ...state,
            loggedIn: true,
            token: action.token
         }

      case LOGOUT:
         return {
            ...state,
            loggedIn: false,
            token: null
         }
      default :
         return state
   }
}