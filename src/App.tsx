import React from 'react';
import NavBar from "./components/navbar";
import HeroSection from "./components/herosection";

const App: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden">
        <header className="h-[15vh] w-full bg-indigo-500 flex items-center justify-center text-white text-[6vw] sm:text-[4vw] md:text-[3vw] font-bold">
          <h1>Book Generator API</h1>
        </header>
        <NavBar />
      </div>

      <HeroSection />
    </>
  );
}

export default App;
