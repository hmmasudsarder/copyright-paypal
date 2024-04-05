import { PiPaypalLogo } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoNotifications, IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  let Links = [
    { name: "Dashboard", link: "/deshboard" },
    { name: "Finances", link: "/about" },
    { name: "Send and Request", link: "/" },
    { name: "Deals", link: "/" },
    { name: "Wallet", link: "/" },
    { name: "Activity", link: "/" },
    { name: "Help", link: "/" },
  ];
  
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-blue-700 py-5 md:px-10 px-7">
        <div className="md:flex items-center justify-start max-w-screen-lg mx-auto">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-700">
            <span className="text-3xl text-white pt-2">
              <img className="w-9 h-9" src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg" alt="logoImage" />
              {/* <PiPaypalLogo /> */}
            </span>
          </div>
          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            {!open && <GiHamburgerMenu className={open ? "hidden" : "block"} />}
            {open && <IoCloseSharp  className={open ? "block" : "hidden"} />}
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl text-white md:my-0 my-7"
              >
                <Link
                  className="hover:text-gray-300 duration-1000"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:block hidden mr-16">
          <div className="flex items-center justify-center space-x-5">
            <IoNotifications className="text-xl text-white hover:text-gray-300 duration-1000 cursor-pointer" />
            <IoSettings className="text-xl text-white hover:text-gray-300 duration-1000 cursor-pointer" />
            <h1 className="text-xl text-white hover:text-gray-300 duration-1000 cursor-pointer">
              LOG OUT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
