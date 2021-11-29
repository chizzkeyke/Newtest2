import React, {useContext, useState} from 'react'
import {ContextUserList} from '../../contexts/ContextUsersList'
import {CurrentUserContext} from '../../contexts/ContextUser'
import {useQuery} from 'react-query'
import {fetchUsers} from '../../DAL/fetchUsers'
import {SUCCESS_FETCH_USER_LIST, ERROR_FETCH_USER_LIST} from '../../state/UserList/constants'
import {Redirect, useHistory} from 'react-router-dom'
import {CardUser} from '../CardUser'
import {Pagination} from '../Pagination'

export const UserList = (props) => {
   let numPage = Number(props.location.search.substr(6))
   const [stateUserList, dispatchUserList] = useContext(ContextUserList)
   const [stateUser] = useContext(CurrentUserContext)
   const history = useHistory()
   const {data, isLoading, isSuccess} = useQuery(
      ['users', numPage],
      () => fetchUsers(numPage),
      {
         onSuccess: data => {
            dispatchUserList({
               type: SUCCESS_FETCH_USER_LIST,
               data: data.data
            })
         },
         onError: error => {
            dispatchUserList({
               type: ERROR_FETCH_USER_LIST,
               error: error
            })
         }
      })

   if (!stateUser.loggedIn) {
      return <Redirect to='/register'/>
   }

   const pushOnUserPage = (num) => {
      history.push(`/user/${num}`)
   }

   return (
      <div>
         {isSuccess &&
         (<div>
            {
               data.data.data.map((user, index) => (
                  <CardUser
                     key={index}
                     currentPage={numPage}
                     firstName={user.first_name}
                     secondName={user.last_name}
                     urlPhoto={user.avatar}
                     onClick={() => pushOnUserPage(user.id)}
                  />
               ))
            }
            <Pagination
               currentPage={numPage}
               totalPage={data.data.total_pages}
            />
         </div>)}
         {isLoading && <h3>Loading...</h3>}
      </div>
   )
}