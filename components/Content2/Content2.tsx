import Image from "next/image";
import React from "react";
import contentImage1 from "../../public/assets/images/content2img1.png";
import contentImage2 from "../../public/assets/images/content2img2.png";
import contentImage3 from "../../public/assets/images/content2img3.png";

export default function Content2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="content-2-wrapper">
        <h3 className="text-orange font-base mb-4">THE VIEW</h3>
        <h3 className="text-3xl font-normal font-jakarta mb-4">
          The Charm Of Pererenan
        </h3>
        <p className="text-blackBlur font-satoshi leading-7 mb-4 font-light">
          A serene seaside village, 45 mins from the airport, blending green
          fields and surf breaks. Relaxed Balinese vibe, close to trendy Canggu.
        </p>
      </div>
      <div className="content-2-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3 md:gap-5">
          <div className="w-full md:w-auto">
            <Image
              className="md:w-48	md:h-48 h-72		"
              src={contentImage1}
              alt="Image 1"
            />
          </div>
          <div className="w-full md:w-auto">
            <Image
              className="md:w-48	md:h-48 h-72"
              src={contentImage2}
              alt="Image 2"
            />
          </div>
          <div className="w-full md:w-auto">
            <Image
              className="md:w-48	md:h-48	h-72	"
              src={contentImage3}
              alt="Image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
