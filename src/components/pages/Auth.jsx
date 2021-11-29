import React, {useContext} from 'react'
import {useMutation} from 'react-query'
import {useFormik} from 'formik'
import {CurrentUserContext} from '../../contexts/ContextUser'
import {register} from '../../DAL/auth'
import {LOGGED_IN} from '../../state/Auth/constants'
// import { useHistory } from 'react-router-dom'

export const Auth = (props) => {
   const path = props.match.path ===
   const [currentUserState, dispatch] = useContext(CurrentUserContext)
   const {isLoading, mutate} = useMutation(register, {
      onSuccess: (data) => {
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

   console.log(path)

   return (
      <div>
         {
            !currentUserState.auth.loggedIn
               ? (<form onSubmit={form.handleSubmit}>
                  <div>
                     <p>Login</p>
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
               </form>)
               : (<h2>Вы успешно вошли</h2>)
         }
         {
            isLoading && (<h1>Loading...</h1>)
         }
      </div>
   )
}