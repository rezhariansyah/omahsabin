// pages/app/dashboard.js
import About from "@/components/About";
import Content2 from "@/components/Content2/Content2";
import Content3 from "@/components/Content3/Content3";
import Layout from "@/components/Layout";
import React from "react";

const DevPage = () => {
  return (
    <Layout>
      <Content2 />
      <Content3 />
      <About />
    </Layout>
  );
};

export default DevPage;
