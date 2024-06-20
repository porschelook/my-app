import React from "react";

import Infomation from "./Infomation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h1-24">
      <Header></Header>
      <Infomation name="hello world" />
      <Footer/>
    </main>
  );
}
