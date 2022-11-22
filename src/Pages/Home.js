import React from "react";
import Layout from "../Components/Layout/Layout";
import Faqs from "../Components/Faqs/Faqs";
import Team from "../Components/Team/Team";
import Roadmap from "../Components/Roadmap/Roadmap";
import About from "../Components/About/About";
import Homebanner from "../Components/Homebanner/Homebanner";

function Home() {
  return (
    <Layout>
      <Homebanner />
      <About />
      <Roadmap />
      <Team />
      <Faqs />
    </Layout>
  );
}

export default Home;
