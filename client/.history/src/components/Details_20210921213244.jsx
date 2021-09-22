import { useState } from "react";


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
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 bg-clip-text text-transparent bg-gradient-to-r from-ba to-green-300">
          The Tavern
        </h1>
        {heroes.map((hero) => {
          return (

            <div className="card lg:card-side bordered m-6 ">
              <img className="max h-64" src={hero.fields?.avatar} alt="avatars"/>
              <div className="card-body">
                <h2 className="card-title text-2xl">{hero.fields?.name}</h2>
                <h3 className="card-title text-xl">{hero.fields?.title}</h3>
                <h3>{hero.fields?.quote}</h3>
                {showMore &&
                  <>
                    <h3>{hero.fields?.race}</h3>
                    <h3>{hero.fields?.classes}</h3>
                    <h3>{hero.fields?.weapon}</h3>
                    <h3>{hero.fields?.armor}</h3>
                    <h3>{hero.fields?.algignmentx}</h3>
                    <p>{hero.fields?.info}</p>
                  </>
                }

                <div className="card-actions justify-center">
                  <button className="btn glass" onClick={toggle}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></button>

                </div>
              </div>
            </div>
          );
        })}
      </div>





    )
  }
}
