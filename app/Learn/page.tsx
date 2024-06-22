import React from "react";

import Learn from "./Learn";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PortfolioPage() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h1-24">
      <Header></Header>
      <Learn name="hello world" />
      <div className="btnDiv">
      
      </div>

      
      <Footer />
    </main>
  );
}
