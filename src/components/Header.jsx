import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react"
import HeroBanner from './HeroBanner.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'

function Header() {
  return (
    <header>
      <Navbar className="bg-[#FFFFFF] dark:bg-[#181A20] fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md">
        <NavbarBrand href="./">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-[#FF4E5B] dark:text-[#FF6E7A]">Public Safety</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button onClick={() => HandleBtnClick("getInvolved")} className="bg-[#FF4E5B] hover:bg-[#ff5462] text-[#FFFFFF] dark:bg-[#FF6E7A] font-bold py-2 px-4 rounded-lg hidden md:block cursor-pointer">Get Involved</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse className="">
          <NavbarLink className="text-[#3A415A] dark:text-[#484F66] hover:text-[#FF6E7A]" href="/">Home</NavbarLink> 
          <NavbarLink className="text-[#3A415A] dark:text-[#484F66] hover:text-[#FF6E7A]" href="#about">About</NavbarLink>
          <NavbarLink className="text-[#3A415A] dark:text-[#484F66] hover:text-[#FF6E7A]" href="#services">Services</NavbarLink>
          <NavbarLink className="text-[#3A415A] dark:text-[#484F66] hover:text-[#FF6E7A]" href="#joinUs">Join Us</NavbarLink>
          <NavbarLink className="text-[#3A415A] dark:text-[#484F66] hover:text-[#FF6E7A]" href="#contact">Contact</NavbarLink>
          <Button onClick={() => HandleBtnClick("getInvolved")} className="bg-[#FF4E5B] hover:bg-[#ff5462] text-[#FFFFFF] dark:bg-[#FF6E7A] font-bold mt-4 py-2 px-4 rounded-lg md:hidden cursor-pointer">Get Involved</Button>
        </NavbarCollapse>
      </Navbar>

      <HeroBanner />
    </header>
    
  )
}

export default Header
