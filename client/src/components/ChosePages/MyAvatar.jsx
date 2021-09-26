
import { useHistory } from "react-router-dom";
import { AvatarCard } from "../AllCards/AvatarCard";


export const MyAvatar = (props) => {
  const { setAvatar } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyDesc")

    switch (e.target.value) {
      case "a":
        setAvatar("https://www.naddpod.com/assets/campaigns/bahumia/hardwon.png")
        break;
      case "b":
        setAvatar("https://www.naddpod.com/assets/campaigns/bahumia/beverly.png")
        break;
      case "c":
        setAvatar("https://www.naddpod.com/assets/campaigns/bahumia/moonshine.png")
        break;
      case "d":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632168086/riz-gukgak_sba45t.png")
        break;
      case "e":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193378/Aguefort_lwpmwg.png")
        break;
      case "f":
        setAvatar("https://www.naddpod.com/assets/campaigns/hotboysummer/mavrus.png")
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
        setAvatar("https://www.naddpod.com/assets/campaigns/trinyvale/nyack.png")
        break;
      case "n":
        setAvatar("https://www.naddpod.com/assets/campaigns/trinyvale/nyack.png")
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
      case "u":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632619652/balnor_fgclet.jpg")
        break;
      case "v":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632620024/Gibbons_xew8rw.png")
        break;
      case "w":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632620461/Torek_nbyxsz.jpg")
        break;
      case "x":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632620599/Old_Cobb_fd8tau.jpg")
        break;
      case "y":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632620991/onyx_fh0akt.png")
        break;
      case "z":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632621751/Goldenhoard_eyzaax.png")
        break;
        case "1":
          setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632193446/fabian_seacaster_xwtr4q.png")
          break;
      default: setAvatar("none")
        break

    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-gradient-to-b from-black via-black to-green-500 bg-cover overflow-y-auto">
      <h1 className="font-serif lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Pick an Avatar
      </h1>

      <AvatarCard bg="card bg-hardwon bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Heroic" value="a" handleClick={handleClick} />
      
      <AvatarCard bg="card bg-bev bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Charming" value="b" handleClick={handleClick} />

      <AvatarCard bg="card bg-moonshine bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Alluring" value="c" handleClick={handleClick} />

      <AvatarCard bg="card bg-riz bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Geeky" value="d" handleClick={handleClick} />

      <AvatarCard bg="card bg-aguefort bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Classy" value="e" handleClick={handleClick} />
      
      <AvatarCard bg="card bg-mavrus bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Cool" value="f" handleClick={handleClick} />

      <AvatarCard bg="card bg-ficus bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Wanderer" value="g" handleClick={handleClick} />

      <AvatarCard bg="card bg-mac bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Hipster" value="h" handleClick={handleClick} />

      <AvatarCard bg="card bg-dave bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Frat boy" value="i" handleClick={handleClick} />

      <AvatarCard bg="card bg-adaine bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Mystical" value="j" handleClick={handleClick} />

      <AvatarCard bg="card bg-deadeye bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Dead" value="k" handleClick={handleClick} />

      <AvatarCard bg="card bg-esther bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Punk" value="l" handleClick={handleClick} />

      <AvatarCard bg="card bg-jens bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Fancy" value="m" handleClick={handleClick} />

      <AvatarCard bg="card bg-nyak bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Jungle" value="n" handleClick={handleClick} />

      <AvatarCard bg="card bg-fig bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Metal" value="o" handleClick={handleClick} />

      <AvatarCard bg="card bg-kristen bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Wholesome" value="p" handleClick={handleClick} />

      <AvatarCard bg="card bg-gorgug bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Loner" value="q" handleClick={handleClick} />

      <AvatarCard bg="card bg-tread bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Sensitive" value="r" handleClick={handleClick} />

      <AvatarCard bg="card bg-jawbone bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Reformed" value="s" handleClick={handleClick} />

      <AvatarCard bg="card bg-gilear bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Divorced" value="t" handleClick={handleClick} />

      <AvatarCard bg="card bg-balnor bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="#1 Dad" value="u" handleClick={handleClick} />

      <AvatarCard bg="card bg-gibbons bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Counsler" value="v" handleClick={handleClick} />

      <AvatarCard bg="card bg-torek bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Skater" value="w" handleClick={handleClick} />

      <AvatarCard bg="card bg-cobb bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Coot" value="x" handleClick={handleClick} />

      <AvatarCard bg="card bg-onyx bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Goth" value="y" handleClick={handleClick} />

      <AvatarCard bg="card bg-golden bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Business" value="z" handleClick={handleClick} />
      <AvatarCard bg="card bg-fabian bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content" title="Swashbuckler" value="1" handleClick={handleClick} />

    </div>
  )
}

