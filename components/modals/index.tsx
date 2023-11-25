"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ModalVideo from "react-modal-video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "react-modal-video/css/modal-video.min.css";

interface ModalsProps {
  image: StaticImageData;
  alt: string;
}

const Modals: React.FC<ModalsProps> = ({ image, alt }) => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="relative group">
        <button
          className="btn-primary group-hover:opacity-80"
          onClick={openModal}
        >
          <Image className="md:w-48 md:h-48 h-48" src={image} alt={alt} />
          <div className="absolute top-1/2 left-[44%] transform -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon
              icon={faCirclePlay}
              className=" text-3xl md:opacity-0 md:group-hover:opacity-80 md:transition-opacity duration-300"
              style={{ color: "white" }} // Sesuaikan warna di sini
            />
          </div>
        </button>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="BFS9n4B_2xA"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Modals;
