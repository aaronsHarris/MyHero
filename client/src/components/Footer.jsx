import { Logo } from "./Logo"



export const Footer = () => {
  return (

    <footer className=" footer bg-base-300 text-primary-content footer-center">
      <div>
        <Logo />
        <p className="font-bold">ACME Industries Ltd.
          <br />Providing reliable tech since 1992
        </p>
        <p>Copyright © 2021 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">

        </div>
      </div>
    </footer>


  )
}
