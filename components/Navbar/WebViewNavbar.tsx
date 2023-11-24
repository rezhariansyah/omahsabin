import Image from "next/image";
import React from "react";
import brandIcon from "../../public/assets/icons/brand.png";

const WebViewNavbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <div className="navbar p-0 bg-white sticky top-0 z-10">
        <div className="flex-1">
          <a className="p-0 text-xl">
            <Image src={brandIcon} width={124} height={25} alt="brand-logo" />
          </a>
        </div>
        <div className="flex-none">
          <ul
            style={{ alignItems: "center" }}
            className="menu-horizontal gap-12 text-sm font-light hover:cursor-pointer"
          >
            <li className="hover:text-orange">
              <a>Our Villas</a>
            </li>
            <li className="hover:text-orange">
              <a>Gallery</a>
            </li>
            <li className="hover:text-orange">
              <a>About Us</a>
            </li>
            <li className="hover:text-orange">
              <a>Blog</a>
            </li>
            <li>
              <button className="bg-orange hover:bg-orangeHover hover:text-white text-white py-2 px-4 hover:shadow-xl rounded-full">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ minHeight: "100vw" }}>{children}</div>
      <div>footer</div>
    </>
  );
};

export default WebViewNavbar;
