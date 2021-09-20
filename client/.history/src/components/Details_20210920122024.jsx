import { useState, useEffect } from "react";

export const Details = () => {
  const { heroes } = props
  const [showMore, setShowMore] = useState(false)
  
  function toggle() {
    setShowMore(prevState => !prevState)
  }

  if (heroes === null) {
    return ()
  } else {
    return (
      <div>
        <h1>Rando Users</h1>
        <h2>{userData.name?.first} {userData.name?.last}</h2>
        <h3>{userData.email}</h3>
        <button onClick={toggle}>show more</button>
        <div>{showMore &&
          <>
            <img src={userData.picture.large} />
            <h2>{userData.name?.first} {userData.name?.last}</h2>
            <h3>{userData.email}</h3>
            <p>{userData.location.street.number} {userData.location.street.name}</p>
            <p>{userData.location.city} {userData.location.state}</p>
          </>
        }
        </div>
      </div>
    )
}
