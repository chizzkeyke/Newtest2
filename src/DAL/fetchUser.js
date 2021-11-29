import axios from 'axios'

export async function fetchUser(num){
   const res = await axios({
      url: `https://reqres.in/api/users/${num}`,
      method: 'GET'
   })

   return res
}