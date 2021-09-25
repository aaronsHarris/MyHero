import { Logo } from "./Logo"



export const Footer = () => {
  return (

    <footer className=" footer bg-base-300 text-primary-content footer-center pl-4">
      <div>
        <Logo />
        <p className="font-bold">Know Good Industries
          <br />
        </p>
        <p>Copyright © 2021 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.google.com">click</a>
          <a href="https://www.google.com">click</a>
          <a href="https://www.google.com">click</a>
          <a href="https://www.google.com">click</a>
        </div>
      </div>
    </footer>


  )
}
