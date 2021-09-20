import { useState, useEffect } from "react";


export const Details = (props) => {
  const { heroes } = props
  const [showMore, setShowMore] = useState(false)
  
  function toggle() {
    setShowMore(prevState => !prevState)
  }

  if (heroes === null) {
    return (<p>There is no Hero Description</p>)
  } else {
    return (
      <div className=" sm:min-h-screen w-screen flex flex-col justify-top items-center bg-tavern bg-cover overflow-y-auto lg:bg-no-repeat min-h-screen mb-auto">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white">
        The Tavern
      </h1>
      {heroes.map((hero) => {
        return (
          
            <div class="card lg:card-side bordered max-w-2xl m-6">
              <img src="https://picsum.photos/id/1005/400/250" />
              <div class="card-body">
                <h2 class="card-title">{hero.fields?.name}</h2>
                <p>{hero.fields?.info}</p>
                <div class="card-actions justify-center">
                  <button class="btn glass">More Info</button>
                </div>
              </div>
            </div>

          
        );
      })}
    </div>
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
