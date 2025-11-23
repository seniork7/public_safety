import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react"
import HeroBanner from './HeroBanner.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'

function Header() {
  return (
    <header>
      <Navbar className="bg-[#f5f5f5] dark:bg-black fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md py-4">
        <NavbarBrand href="./">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-[#E53935] dark:text-[#E53935]">Public Safety</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button onClick={() => HandleBtnClick("getInvolved")} className="bg-[#E53935] hover:bg-[#ff3243] text-[#f5f5f5] dark:bg-[#eed202] dark:hover:bg-[#fff312] dark:text-[#0f1115] font-bold py-2 px-4 rounded-lg hidden md:block cursor-pointer transition focus:outline-none focus:ring-0">Get Involved</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]! dark:hover:text-[#eed202]!" href="/">Home</NavbarLink>
          <NavbarLink className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]! dark:hover:text-[#eed202]!" href="#about">About</NavbarLink>
          <NavbarLink className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]! dark:hover:text-[#eed202]!" href="#services">Services</NavbarLink>
          <NavbarLink className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]! dark:hover:text-[#eed202]!" href="#joinUs">Join Us</NavbarLink>
          <NavbarLink className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]! dark:hover:text-[#eed202]!" href="#contact">Contact</NavbarLink>
          <Button onClick={() => HandleBtnClick("getInvolved")} className="bg-[#E53935] hover:bg-[#ff3243] text-[#f5f5f5] dark:bg-[#eed202] dark:hover:bg-[#fff312] dark:text-[#0f1115] font-bold mt-4 py-2 px-4 rounded-lg md:hidden cursor-pointer transition focus:outline-none focus:ring-0">Get Involved</Button>
        </NavbarCollapse>
      </Navbar>

      <HeroBanner />
    </header>
  )
}

export default Header
 