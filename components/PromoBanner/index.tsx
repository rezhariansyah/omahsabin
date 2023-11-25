"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PromoBannerContent from "../../public/assets/images/PromoBannerContent.png";
import PromoBannerContentMobile from "@/public/assets/images/PromoBannerContentMobile.png";
import Link from "next/link";
export default function PromoBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="mt-10">
      <Link
        href="https://book-directonline.com/properties/omahsabinvilladirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=IDR&checkInDate=2023-11-25&checkOutDate=2023-11-28"
        target="_blank"
      >
        {" "}
        <Image
          src={isMobile ? PromoBannerContentMobile : PromoBannerContent}
          alt="Promo Banner"
        />
      </Link>
    </div>
  );
}
