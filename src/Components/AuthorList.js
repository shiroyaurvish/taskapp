import React from 'react'
import "./AuthorList.css"

const AuthorList = ({item}) => {
  return (
    <div  className="authorlist">
        <li key={item.id} className="authors">{item.firstName +" "+ item.lastName}</li>
    </div>
  )
}

export default AuthorList;