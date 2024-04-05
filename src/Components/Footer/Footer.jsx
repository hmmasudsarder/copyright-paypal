const Footer = () => {
  return (
    <div className="pt-10">
      <div className="md:flex items-center max-w-screen-lg mx-auto space-x-6">
        <img
          className="w-24 md:mx-0 mx-auto"
          src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg"
          alt="paypalLogo"
        />
        <ul className="md:flex items-center text-center space-x-5 ml-8">
          <li>Help</li>
          <li>Contact Us</li>
          <li>Security</li>
          <li>Fees</li>
        </ul>
      </div>
      <div className="border my-8"></div>
      <div className="md:flex items-center max-w-screen-lg mx-auto space-x-5">
        <h1 className="text-gray-500 md:mx-0 text-center">
          &copy;1999-2022 PayPal, Inc, All rights reserved.
        </h1>
        <ul className="md:flex items-center text-center space-x-5 ml-8">
          <li>Privacy</li>
          <li>Legal</li>
          <li>Policy Updates</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
