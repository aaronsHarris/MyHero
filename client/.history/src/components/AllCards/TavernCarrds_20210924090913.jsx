import { Link } from "react-router-dom";

export const TavernCarrds = (props) => {
  const { heroes, toggle } = props

  return (
    <div className=" sm:min-h-screen w-screen flex flex-col justify-top items-center bg-tavern bg-cover overflow-y-auto lg:bg-no-repeat min-h-screen mb-auto bg-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 bg-clip-text text-transparent bg-gradient-to-r from-black to-green-300">
        The Tavern
      </h1>
      <div className=" sm:min-h-screen w-screen flex flex-wrap justify-center items-center bg-cover overflow-y-auto bg-no-repeat lg:bg-no-repeat min-h-screen mb-auto">
        {heroes.map((hero) => {
          return (
            <div className="sm: justify-center card lg:card-side bordered m-6">
              <img className="max-w-sm h-72" src={hero.fields?.avatar} alt="avatars"  key={/>
              <div className="card-body max-w-screen-sm">
                <h2 className="card-title text-5xl">{hero.fields?.name}</h2>
                <h3 className="italic card-title text-xl">{hero.fields?.title}</h3>
                <h3 className="text-lg">"{hero.fields?.quote}"</h3>
                <div className="card-actions justify-center">
                  <Link to={`/Details/${hero.id}`}>
                    <button className="btn glass" onClick={toggle}>See More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>





  )
}

