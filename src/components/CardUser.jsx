import React from 'react'

export const CardUser = ({firstName, secondName, urlPhoto, onClick}) => {
   return (
      <div className="card" style={{width: '12rem', padding: '10px', margin: '10px'}} onClick={onClick}>
         <img className="card-img-top" src={urlPhoto} alt={'some text'}/>
            <div className="card-body">
               <h5 className="card-title">{firstName}</h5>
               <h5 className="card-title">{secondName}</h5>
            </div>
      </div>
   )
}