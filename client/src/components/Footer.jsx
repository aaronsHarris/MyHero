import { Logo } from "./Logo"



export const Footer = () => {
  return (

    <footer className=" footer bg-base-300 text-primary-content footer-center pl-4">
      <div className="grid grid-flow-col">
        <a href="https://github.com/aaronsHarris">
      <div class="avatar">
        <div class="mb-8 rounded-box w-14 h-14 mask mask-hexagon">
          <img className="h-12 rounded-xl" src="https://miro.medium.com/max/719/0*kHdpA0lO-qQVbaXq.png" alt="" />
        </div>
        </div>
        </a>
      <div>
        <Logo />
        <p className="font-bold">Know Good Industries</p>
      </div>
        <a href="https://www.linkedin.com/in/aaron-harris-577867218/">
      <div class="avatar">
          <div class="mb-8 rounded-box w-14 h-14 mask mask-hexagon">  
          <img className="h-12 rounded-xl" src="https://res.cloudinary.com/dbdrox2p9/image/upload/v1632691236/linkedinLogo_werzhk.png" alt="" />
        </div>
        </div>
        </a>
        
      </div>
    </footer >


  )
}
