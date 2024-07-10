import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="" width={120} />
      <p className="text-sm text-white">
        All right reserved | Designed & Developed by Bodhisatwa Chakraborty
      </p>
      <div className="flex">
        <a href="">
          <Image src={assets.facebook_icon} alt="facebook-logo" width={40} />
        </a>
        <a href="">
          <Image src={assets.twitter_icon} alt="twitter-logo" width={40} />
        </a>
        <a href="">
          <Image src={assets.googleplus_icon} alt="plus-logo" width={40} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
