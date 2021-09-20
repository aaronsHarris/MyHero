import { useState, useEffect } from "react";

export const Details = () => {
  const { heroes } = props
  const [showMore, setShowMore] = useState(false)
  
  function toggle() {
    setShowMore(prevState => !prevState)
  }

  if (heroes === null) {
    return (<p>There is no Hero Description</p>)
  } else {
    return (
      <div>
        <h1>Rando Users</h1>
        <h2>{heroes.name?.first} {heroes.name?.last}</h2>
        <h3>{heroes.email}</h3>
        <button onClick={toggle}>show more</button>
        <div>{showMore &&
          <>
            <img src={heroes.picture.large} />
            <h2>{heroes.name?.first} {heroes.name?.last}</h2>
            <h3>{heroes.email}</h3>
            <p>{heroes.location.street.number} {heroes.location.street.name}</p>
            <p>{heroes.location.city} {heroes.location.state}</p>
          </>
        }
        </div>
      </div>
    )
  }
}
