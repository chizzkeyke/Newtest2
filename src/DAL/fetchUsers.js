import axios from 'axios'

export async function fetchUsers(numberPage) {
   const res = await axios({
      method: 'GET',
      url: `https://reqres.in/api/users?page=${numberPage}`
   })
   return res
}