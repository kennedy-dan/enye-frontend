import React, { useEffect, useState } from 'react'

/**
* @author
* @function Profile2
**/

const Profile2 = (props) => {
    const [data , setData] = useState([])

    useEffect(() => {
       fetch("https://api.enye.tech/v1/challenge/records")
       .then((response) => response.json())
       .then((json) => setData(json))
       console.log(data)
    }, [])
  return(
    <div>Profile2</div>
   )
  }


export default Profile2