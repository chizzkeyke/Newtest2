const token = localStorage.getItem('token')

export const initialStateAuth =
   token
      ? {
         loggedIn: true,
         token: token
      }
      : {
         loggedIn: false,
         token: null
      }
export const initialStateUserList = {
   data: null,
   error: null
}