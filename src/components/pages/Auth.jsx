import React, {useContext} from 'react'
import {useMutation} from 'react-query'
import {useFormik} from 'formik'
import {CurrentUserContext} from '../../contexts/ContextUser'
import {register, login} from '../../DAL/auth'
import {LOGGED_IN} from '../../state/Auth/constants'

export const Auth = (props) => {
   const path = props.match.path === '/register'
   const request = path ? register : login
   const [currentUserState, dispatch] = useContext(CurrentUserContext)
   const {isLoading, mutate} = useMutation(request, {
      onSuccess: (data) => {
         localStorage.setItem('token', data.data.token)
         dispatch({
            type: LOGGED_IN,
            token: data.data.token
         })
      },
   })

   const form = useFormik({
      initialValues: {
         login: '',
         password: ''
      },
      onSubmit: (values) => {
         mutate({
            email: values.login,
            password: values.password
         })
      }
   })

   console.log(currentUserState)

   return (
      <div>
         {
            !currentUserState.loggedIn
               ? (
                  <div>
                     <h2>{path ? 'Register' : 'Login'}</h2>
                     <form onSubmit={form.handleSubmit}>
                        <div>
                           <p>Email</p>
                           <input
                              id='login'
                              type={'text'}
                              onChange={form.handleChange}
                           />
                        </div>
                        <div>
                           <p>Password</p>
                           <input
                              id='password'
                              type={'text'}
                              onChange={form.handleChange}
                           />
                        </div>
                        <div>
                           <button type='submit'>Auth</button>
                        </div>
                     </form>
                  </div>)
               : (<h2>Вы успешно вошли</h2>)
         }
         {
            isLoading && (<h1>Loading...</h1>)
         }
      </div>
   )
}