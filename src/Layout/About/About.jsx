import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  let Links = [
    { name: "Account", link: "/deshboard" },
    { name: "Security", link: "/about" },
    { name: "Data & Privacy", link: "/" },
    { name: "Payments", link: "/" },
    { name: "Notification", link: "/" },
    { name: "Seller Tools", link: "/seller" },
  ];

  return (
    <div className="">
      <div className="py-12 shadow-2xl">
        <div className="pt-20 ml-64">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 duration-500 ease-in`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <Link
                  className="hover:text-blue-600 hover:px-1.5 hover:rounded-3xl  hover:bg-blue-200 duration-1000"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="ml-8 text-lg text-center cursor-pointer hover:px-1.5 hover:rounded-3xl  hover:bg-blue-200 hover:hover:text-blue-600 duration-1000">
              Statements and <br /> taxes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
