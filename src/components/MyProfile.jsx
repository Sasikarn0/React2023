import React from 'react'

function MyProfile({data}) {
  return (
    <div>
        <p>My name is {data.firstname} {data.lastname}</p>
    </div>
  )
}

export default MyProfile