import React from "react";

import Infomation from "./Infomation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PortfolioPage() {
 const paddingL = 55
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h1-24">
      <Header></Header>
      <Infomation name="hello world" />
      <div className="btnDiv">
      
      </div>
      
      <div style={{columnCount:"2",alignItems:"center"}}>
      <h1>Download Resume</h1>
      <button style={{paddingLeft:paddingL}}> .pdf</button> 
      <button style={{paddingLeft:paddingL}}> .word</button> 
      <button style={{paddingLeft:paddingL}}> .txt</button> 
      </div>
      <Footer />
    </main>
  );
}
