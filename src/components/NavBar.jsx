import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function NavBar() {
  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md">
      <NavbarBrand href="./">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Public Safety</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">Get Involved</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#">Home</NavbarLink> 
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Join Us</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    
  )
}

export default NavBar
