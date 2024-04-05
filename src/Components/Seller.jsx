import React from "react";
import About from "../Layout/About/About";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineLaptop } from "react-icons/ai";
import { PiNotebookThin } from "react-icons/pi";
import { FaCaravan } from "react-icons/fa";

const Seller = () => {
  return (
    <div className="">
      <About />
      <div className="">
        <div className="max-w-screen-lg mx-auto py-8 ">
          <div className="">
            <h2 className="text-5xl">Seller tools</h2>
            <p className="">
              Sell online easily and grow your business with Seller Tools,
              Create Paypal <br /> buttons, get instant payment notifications,
              and do mush more.
            </p>
          </div>
          <div className="pt-14 ml-14">
            <h2 className="text-2xl">Selling online</h2>
            <p className="">
              Grow your business by making it easier for your customers to pay
              you.
            </p>
            {/* card selling online  */}
            <div className="border-4 rounded-2xl flex items-center justify-around mt-4 w-10/12 py-4">
              <div className="rounded-full bg-slate-300 mb-9 ml-2">
                <img
                  className="w-12 h-12"
                  src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
                  alt="logoImage"
                />
              </div>
              <div className="px-2 ml-2">
                <h2 className="text-xl">PayPal buttons</h2>
                <p>
                  Create and manage secure buttons for your customers to add
                  items to their cart. buy. donate. or subscribe.
                </p>
              </div>
              <div className="mx-2">
                <button className="text-blue-700">Manage</button>
              </div>
            </div>
            <div className="border-4 rounded-2xl flex items-center justify-around mt-4 w-10/12 py-4">
              <div className="rounded-full bg-slate-300 mb-9 ml-2">
                {/* <img className="w-12 h-12" src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg" alt="logoImage" /> */}
                <AiOutlineLaptop className="w-9 h-9" />
              </div>
              <div className="px-2 ml-2">
                <h2 className="text-xl">Website preferences</h2>
                <p>
                  Control how you sell online by turning on express checkouts
                  and bringing customers back to your website after they pay
                  with Paypal.
                </p>
              </div>
              <div className="mx-2">
                <button className="text-blue-700">Update</button>
              </div>
            </div>
            <div className="border-4 rounded-2xl flex items-center justify-around mt-4 w-10/12 py-4">
              <div className="rounded-full bg-slate-300 mb-5 ml-2">
                {/* <img
                  className="w-12 h-12"
                  src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
                  alt="logoImage"
                /> */}
                <IoIosNotifications className="w-9 h-9 text-cyan-400" />
              </div>
              <div className="px-2 ml-2">
                <h2 className="text-xl">Instant payment notificarions</h2>
                <p>
                  Create and manage secure buttons for your customers to add
                  items to their cart.
                </p>
              </div>
              <div className="mx-2">
                <button className="text-blue-700">Update</button>
              </div>
            </div>
          </div>
          <div className="pt-16 ml-14">
            <h2 className="text-2xl">Getting paid</h2>
            <p className="">
              choose from various payment tools to attract your customers.
            </p>
            {/* card selling online  */}

            <div className="border-4 rounded-2xl flex items-center justify-around mt-4 w-10/12 py-4">
              <div className="rounded-full bg-slate-300 mb-4 ml-2">
                <PiNotebookThin className="w-9 h-9 text-cyan-400"/>
              </div>
              <div className="px-2 ml-2">
                <h2 className="text-xl">Invoices</h2>
                <p>
                  Create professional invoices and customize it as per your requirements
                </p>
              </div>
              <div className="mx-2">
                <button className="text-blue-700">Manage</button>
              </div>
            </div>
          </div>
          <div className="pt-16 ml-14">
            <h2 className="text-2xl">More selling tools</h2>
            <p className="">
              choose from various payment tools to attract your customers.
            </p>
            {/* card selling online  */}

            <div className="border-4 rounded-2xl flex items-center justify-around mt-4 w-10/12 py-4">
              <div className="rounded-full bg-slate-300 mb-4 ml-2">
                <FaCaravan  className="w-10 h-10 text-cyan-400"/>
              </div>
              <div className="px-2 ml-2">
                <h2 className="text-xl">Shipping prefernces</h2>
                <p>
                  Create professional invoices and customize it as per your requirements
                </p>
              </div>
              <div className="mx-2">
                <button className="text-blue-700">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
