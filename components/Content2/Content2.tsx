import Image from "next/image";
import React from "react";
import contentImage1 from "../../public/assets/images/content2img1.png";
import contentImage2 from "../../public/assets/images/content2img2.png";
import contentImage3 from "../../public/assets/images/content2img3.png";
import Modals from "../modals";

export default function Content2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="content-2-wrapper">
        <h3 className="text-orange font-base mb-4">THE VIEW</h3>
        <h3 className="text-3xl font-normal font-jakarta mb-4">
          The Charm Of Pererenan
        </h3>
        <p className="text-blackBlur font-satoshi leading-6 mb-6 md:leading-7 md:w-11/12	 text-base	md:text-xl font-light">
          A serene seaside village, 45 mins from the airport, blending green
          fields and surf breaks. Relaxed Balinese vibe, close to trendy Canggu.
        </p>
      </div>
      <div className="content-2-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3 md:gap-5">
          <div className="w-full md:w-auto">
            <Modals image={contentImage1} alt="image 1" />
          </div>
          <div className="w-full md:w-auto">
            <Modals image={contentImage2} alt="image 2" />
          </div>
          <div className="w-full md:w-auto">
            <Modals image={contentImage3} alt="image 3" />
          </div>
        </div>
      </div>
    </div>
  );
}
