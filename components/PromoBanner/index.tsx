"use client";
import React from "react";
import Image from "next/image";
import PromoBannerContent from "../../public/assets/images/PromoBannerContent.png";
import PromoBannerContentMobile from "@/public/assets/images/PromoBannerContentMobile.png";
export default function PromoBanner() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="mt-10">
      <Image
        src={isMobile ? PromoBannerContentMobile : PromoBannerContent}
        alt="Promo Banner"
      />
    </div>
  );
}
