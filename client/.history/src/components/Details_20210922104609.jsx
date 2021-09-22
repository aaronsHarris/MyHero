import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className=" sm:min-h-screen w-screen flex flex-col justify-top items-center bg-tavern bg-cover overflow-y-auto lg:bg-no-repeat min-h-screen mb-auto bg-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 bg-clip-text text-transparent bg-gradient-to-r from-black to-green-300">
          The Tavern
        </h1>
        {heroes.map((hero) => {
          return (

            <div className="card lg:card-side bordered m-6 ">
              <img className="max h-64" src={hero.fields?.avatar} alt="avatars" />
              <div className="card-body">
                <h2 className="card-title text-5xl">{hero.fields?.name}</h2>
                <h3 className="italic card-title text-xl">{hero.fields?.title}</h3>
                <h3 className="text-lg">"{hero.fields?.quote}"</h3>
                {/* {showMore &&
                  <>
                    <h3>{hero.fields?.race}</h3>
                    <h3>{hero.fields?.classes}</h3>
                    <h3>{hero.fields?.weapon}</h3>
                    <h3>{hero.fields?.armor}</h3>
                    <h3>{hero.fields?.algignmentx}</h3>
                    <p>{hero.fields?.info}</p>
                  </>
                } */}

                <div className="card-actions justify-center">
                  
                  <button className="btn glass" onClick={toggle}>See More</button>

                </div>
              </div>
            </div>
          );
        })}
      </div>





    )
  }
}
