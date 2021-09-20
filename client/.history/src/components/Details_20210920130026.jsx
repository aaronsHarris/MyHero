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

            <div className="card lg:card-side bordered max-w-2xl m-6">
              <img src="https://picsum.photos/id/1005/400/250" />
              <div className="card-body">
                <h2 className="card-title">{hero.fields?.name}</h2>
                <h3 className="card-title"></div>{hero.fields?.title}</h3>
                {showMore &&
                  <>
                    <h3>{hero.fields?.race}</h3>
                    <h3>{hero.fields?.classes}</h3>
                    <h3>{hero.fields?.weapon}</h3>
                    <h3>{hero.fields?.armor}</h3>
                  </>
                }
                <p>{hero.fields?.info}</p>
                <div className="card-actions justify-center">
                  <button className="btn glass" onClick={toggle}>More Info</button>

                </div>
              </div>
            </div>
          );
        })}
      </div>





    )
  }
}
