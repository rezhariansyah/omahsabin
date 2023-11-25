import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import BannerHeader from "@/components/BannerHeader";
import Content2 from "@/components/Content2/Content2";
import Content3 from "@/components/Content3/Content3";
import About from "@/components/About/About";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  return (
    <Layout>
      <BannerHeader />
      <Content2 />
      <Content3 />
      <About />
      <PromoBanner />
    </Layout>
  );
}
