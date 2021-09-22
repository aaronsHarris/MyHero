import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

export const TavernCarrds = (props) => {
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
        {heroes.map((hero) => {
          return (

            // <div className="card lg:card-side bordered m-6 max-w-screen-sm">
            //   <img className="max-w-sm h-64" src={hero.fields?.avatar} alt="avatars" />
            //   <div className="card-body">
            //     <h2 className="card-title text-5xl">{hero.fields?.name}</h2>
            //     <h3 className="italic card-title text-xl">{hero.fields?.title}</h3>
            //     <h3 className="text-lg">"{hero.fields?.quote}"</h3>
            //     <div className="card-actions justify-center">
            //       <Link to={`/Details/${hero.id}`}>
            //         <button className="btn glass" onClick={toggle}>See More</button>
            //       </Link>
            //     </div>
            //   </div>
              
            // </div>
            
          );
        })}
        <div class="card shadow-xl image-full">
  <figure>
    <img src="https://picsum.photos/id/1005/400/250"/>
  </figure> 
  <div class="justify-end card-body">
    <h2 class="card-title">Image overlay</h2> 
    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
    <div class="card-actions">
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 
      </div>





    )
  }
}
