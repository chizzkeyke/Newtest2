import axios from 'axios'

export async function login(data) {
   return await axios({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      data
   })
}

export async function register(data) {
   const res = await axios({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      data
   })
   return res
}

