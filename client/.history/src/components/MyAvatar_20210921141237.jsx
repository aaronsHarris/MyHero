
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
      case "cool":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632194028/MoM_Mavrus_ufomso.jpg")
        break;
      case "faded":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193460/ficus_lgnyji.jpg")
        break;
      case "hipster":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193624/mac_t4xcib.png")
        break;
      case "frat":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193399/dave_r2ls3a.png")
        break;
      case "mystical":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193351/Adaine_Abernant_hxaiyu.png")
        break;
      case "dead":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632194292/deadEye_uzysuv.png")
        break;
      case "punk":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193433/Esther_Sinclair_etwpt7.jpg")
        break;
      case "fancy":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193564/jens_krccjv.png")
        break;
      case "jungle":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632194581/nayak_pywspz.jpg")
        break;
      case "metal":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193475/fig_faeth_ft8hhe.png")
        break;
      case "whoolesome":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193579/kristen_applebees_lsgis9.png")
        break;
      case "loner":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632194736/gorgug-thistlespring_gbo4bv.jpg")
        break;
      case "emo":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193606/tread_ppyilo.png")
        break;
      case "reformed":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193538/Jawbone_Reformed_qzwfmq.png")
        break;
      case "divorced":
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
      
      <AvatarCard bg="card bg-bev bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="charming" value="b" handleClick={handleClick} />

      <AvatarCard bg="card bg-moon bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="charming" value="b" handleClick={handleClick} />
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Geeky</h1>
        <div className="card bg-riz bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="d">
          add</button>
      </div>

      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Classy</h1>
        <div className="card bg-aguefort bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="e">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Cool</h1>
        <div className="card bg-mavrus bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="cool">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Faded</h1>
        <div className="card bg-ficus bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="faded">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Hipster</h1>
        <div className="card bg-mac bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="hipster">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Frat Boy</h1>
        <div className="card bg-dave bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="frat">
          add</button>
      </div>
      <div className="flex flex-col items-center px-4 py-10 m-1">
        <h1 className="card-title text-white text-2xl">Mystical</h1>
        <div className="card bg-adaine bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="mystical">
          add</button>
      </div>
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

