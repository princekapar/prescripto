import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Providing seamless access to quality healthcare. Our platform
            connects patients with certified medical professionals, ensuring
            personalized care is just a click away. Dedicated to your health,
            privacy, and peace of mind.
          </p>
        </div>

        {/* center section */}
        <div>
                  <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* third section */}
        <div>
          <p className="text-xl font-medium mb-5">CONNECT WITH US</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>6268369594</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright &copy; 2026 Prescripto. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
