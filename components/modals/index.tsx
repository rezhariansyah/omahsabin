"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";
import { FaRegCirclePlay } from "react-icons/fa6";

interface ModalsProps {
  image: StaticImageData;
  alt: string;
}

const Modals: React.FC<ModalsProps> = ({ image, alt }) => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling when the modal is open
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling when the modal is closed
  };
  return (
    <>
      <div className="relative group">
        <button
          className="btn-primary group-hover:opacity-80"
          onClick={openModal}
        >
          <Image className="md:w-48 md:h-48 h-48" src={image} alt={alt} />
          <div className="absolute top-1/2 left-1/2 md:left-[45%] transform -translate-x-1/2 -translate-y-1/2">
            <FaRegCirclePlay className=" text-3xl md:opacity-0 md:group-hover:opacity-80 md:transition-opacity duration-300" />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="BFS9n4B_2xA"
            onClose={closeModal}
          />
        </div>
      )}
    </>
  );
};

export default Modals;
