
import { useHistory } from "react-router-dom";
import { AvatarCard } from "./AvatarCard";


export const MyAvatar = (props) => {
  const { setAvatar } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyDesc")
    switch (e.target.value) {
      case "a":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632165423/hadwon_gyxf2y.png")
        break;
      case "b":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632167815/bev_0_ky0v3m.png")
        break;
      case "c":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632167870/moonshine_vnrcdl.png")
        break;
      case "d":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632168086/riz-gukgak_sba45t.png")
        break;
      case "e":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193378/Aguefort_lwpmwg.png")
        break;
      case "f":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632194028/MoM_Mavrus_ufomso.jpg")
        break;
      case "g":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193460/ficus_lgnyji.jpg")
        break;
      case "h":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193624/mac_t4xcib.png")
        break;
      case "i":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193399/dave_r2ls3a.png")
        break;
      case "j":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193351/Adaine_Abernant_hxaiyu.png")
        break;
      case "k":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632194292/deadEye_uzysuv.png")
        break;
      case "l":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193433/Esther_Sinclair_etwpt7.jpg")
        break;
      case "m":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193564/jens_krccjv.png")
        break;
      case "n":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632194581/nayak_pywspz.jpg")
        break;
      case "o":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193475/fig_faeth_ft8hhe.png")
        break;
      case "p":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193579/kristen_applebees_lsgis9.png")
        break;
      case "q":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632194736/gorgug-thistlespring_gbo4bv.jpg")
        break;
      case "r":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193606/tread_ppyilo.png")
        break;
      case "s":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193538/Jawbone_Reformed_qzwfmq.png")
        break;
      case "t":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193494/Gilear2_mkzk6j.png")
        break;

    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-avatar bg-cover overflow-y-auto">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Pick an Avatar
      </h1>

      <AvatarCard bg="card bg-hardwon bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Heroic" value="a" handleClick={handleClick} />
      
      <AvatarCard bg="card bg-bev bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Charming" value="b" handleClick={handleClick} />

      <AvatarCard bg="card bg-moonshine bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Alluring" value="c" handleClick={handleClick} />

      <AvatarCard bg="card bg-riz bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Geeky" value="d" handleClick={handleClick} />

      <AvatarCard bg="card bg-aguefort bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Classy" value="e" handleClick={handleClick} />
      
      <AvatarCard bg="card bg-gorgug bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Loner" value="f" handleClick={handleClick} />

      <AvatarCard bg="card bg-ficus bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Wanderer" value="g" handleClick={handleClick} />

      <AvatarCard bg="card bg-mac bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Hipster" value="h" handleClick={handleClick} />

      <AvatarCard bg="card bg-dave bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Hipster" value="i" handleClick={handleClick} />

      <AvatarCard bg="card bg-adaine bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Wanderer" value="j" handleClick={handleClick} />
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Dead</h1>
        <div className="card bg-deadeye bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="dead">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Punk</h1>
        <div className="card bg-esther bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="punk">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Fancy</h1>
        <div className="card bg-jens bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="fancy">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Jungle</h1>
        <div className="card bg-nayak bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="jungle">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Metal</h1>
        <div className="card bg-fig bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="metal">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Wholesome</h1>
        <div className="card bg-kristen bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="wholesome">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Loner</h1>
        <div className="card bg-gorgug bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="loner">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Emo</h1>
        <div className="card bg-tread bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="emo">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Reformed</h1>
        <div className="card bg-jawbone bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="reformed">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Divorced</h1>
        <div className="card bg-gilear bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="divorced">
          add</button>
      </div>

    </div>
  )
}

