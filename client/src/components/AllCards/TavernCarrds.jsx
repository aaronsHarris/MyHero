import { Link } from "react-router-dom";

export const TavernCarrds = (props) => {
  const { heroes, toggle } = props

  return (
    <div className=" sm:min-h-screen w-screen flex flex-col justify-top items-center  bg-tavern bg-cover overflow-y-auto lg:bg-no-repeat min-h-screen mb-auto bg-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl mb-14 shadow-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-700  via-yellow-300 to-white font-olde pt-10">
        Ye Olde Tavern
      </h1>
      <div className=" sm:min-h-screen w-screen flex flex-wrap justify-center items-center bg-cover overflow-y-auto bg-no-repeat lg:bg-no-repeat min-h-screen mb-auto text-white">
        {heroes.map((hero, index) => {
          return (
            <div className="font-hand sm: justify-center card lg:card-side bordered m-6 hover:-translate-y-2 transform transition" key={ index}>
              <img className="max-w-sm h-72" src={hero.fields?.avatar} alt="avatars" />
              <div className="card-body max-w-screen-sm">
                <h2 className="card-title text-5xl">{hero.fields?.name}</h2>
                <h3 className="italic card-title text-2xl">{hero.fields?.title}</h3>
                <h3 className="text-2xl max-w-md">"{hero.fields?.quote}"</h3>
                <div className="card-actions justify-center">
                  <Link to={`/Details/${hero.id}`}>
                    <button className="btn glass hover:-translate-y-.5 transform transition hover:bg-red-900" onClick={toggle}>See More</button>
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

