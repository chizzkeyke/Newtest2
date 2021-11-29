import React from 'react'
import {useQuery} from 'react-query'
import {fetchUser} from '../../DAL/fetchUser'
import { useHistory } from 'react-router-dom'

export const User = (props) => {
   const numUser = props.match.params.id
   const { goBack } = useHistory()
   const {data, isSuccess, isLoading} = useQuery(
      'user',
      () => fetchUser(numUser)
   )

   return (
      <div>
         <div className="container_user">
            {isLoading && <h2>Loading</h2>}
            {isSuccess && (
               <div className="card_user">
                  <div className="image_user">
                     <img src={data.data.data.avatar} alt={'Some text'}/>
                  </div>
                  <div className="image_user">
                     <p>{data.data.data.first_name}{' '}{data.data.data.last_name}</p>
                  </div>
                  <div>
                     <button onClick={() => goBack()}>Back on Prev Page</button>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}