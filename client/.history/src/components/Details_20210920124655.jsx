import { useState, useEffect } from "react";


export const Details = (props) => {
  const { heroes } = props
  const [showMore, setShowMore] = useState(false)

  function toggle() {
    setShowMore(prevState => !prevState)
  }

  if (heroes === null) {
    return (<p>There is no Hero Data</p>)
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
                <button class="btn glass" onClick={toggle}>More Info</button>
                {showMore &&
                  <>
                  </>
                }
                </div>
              </div>
            </div>
        );
      })}
    </div>
          
          
        
        
      
    )
  }
}
