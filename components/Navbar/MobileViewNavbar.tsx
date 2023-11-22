import React from "react";
import Image from "next/image";
import brandIcon from "../../public/assets/icons/brand.png";
import houseIcon from "../../public/assets/icons/HouseSimple.png";
import galleryIcon from "../../public/assets/icons/ImageSquare.png";
import blogIcon from "../../public/assets/icons/PencilLine.png";
import villasIcon from "../../public/assets/icons/villas.png";
import styles from "./styles.module.css";

const MobileViewNavbar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <div className="mt-7 mb-5">
        <Image src={brandIcon} width={97} height={20} alt="brand-logo" />
      </div>
      {children}
      <div className="btm-nav bg-white">
        <button className=" text-almostBlack py-2 px-4 rounded">
          <Image src={houseIcon} width={20} height={20} alt="home" />
          <div className={styles.titleMenu}>House</div>
        </button>
        <button className=" text-almostBlack py-2 px-4 rounded">
          <Image src={galleryIcon} width={20} height={20} alt="home" />
          <div className={styles.titleMenu}>Gallery</div>
        </button>
        <button className="text-almostBlack py-2 px-4 rounded">
          <Image src={blogIcon} width={20} height={20} alt="home" />
          <div className={styles.titleMenu}>Blog</div>
        </button>
        <button className="text-almostBlack py-2 px-4 rounded">
          <Image src={villasIcon} width={20} height={20} alt="home" />
          <div className={styles.titleMenu}>Our Villas</div>
        </button>
      </div>
    </>
  );
};

export default MobileViewNavbar;
