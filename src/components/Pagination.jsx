import React from 'react'
import {arrayForPagination} from '../utils/arrayForPagination'
import {useHistory} from 'react-router-dom'

export const Pagination = ({totalPage}) => {
   const pages = arrayForPagination(totalPage)
   const {push} = useHistory()

   const handleClick = (num) => {
      if (num === 1) {
         push('/users')
      } else {
         push(`/users?page=${num}`)
      }
   }

   return (
      <div>
         {pages.map((num, index) => (
            <div key={index}>
               <button onClick={() => handleClick(num)}>{num}</button>
            </div>
         ))}
      </div>
   )
}