import React from "react";
import NavBar from "./components/navbar";
import HeroSection from "./components/herosection";


const App = () => {
  return (
    <>
      <div>

        <div className=" overflow-hidden header h-[15vh] w-[100%] bg-indigo-500 flex items-center justify-center text-white text-[3vw] font-bold ">
          <h1>Book Generator API</h1>
        </div>
        <NavBar />

      </div>
      
      <HeroSection/>
    </>
  )
}

export default App;