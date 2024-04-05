import { BsCheck2Circle } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineQrCode2 } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-gray-300 w-full h-full pt-20 pb-48">
      <div className="w-4/12 mx-auto bg-slate-100 rounded-2xl">
        <div className="mt-6 pb-4 space-y-5">
          <BsCheck2Circle className="text-9xl mx-auto text-green-300" />
          <h1 className="text-2xl text-center">Your Product like is Ready </h1>
          <p className="text-center text-lg">
            You can spread the word by sharing this link on - email, social
            media, chat, whatsapp and more
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mx-16 my-5">
          <FaFacebook className="text-5xl text-blue-600" />
          <FaTwitter className="text-5xl text-blue-600"/>
          <MdOutlineQrCode2 className="text-5xl text-blue-600"/>
        </div>
        <div className="md:mx-20 pt-7 pb-20 space-y-10">
            <button className="py-3 md:px-24 font-semibold rounded-full border-2 border-black shadow-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75 hover:duration-1000">Get link</button>
            <button className="py-3 md:px-12 font-semibold rounded-full border-2 border-black shadow-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75 hover:duration-1000">Return To Deshboard</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
