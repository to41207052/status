import React from "react";

const Home: React.FC = () => {
  return (
    <header className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <p>Hello</p><br />
       <a href="/">TOP</a><br />
       <a href="/albion/my_status">1: mystatus by albion</a><br />
       <a href="/albion/name">2: west world name search</a><br />
       <a href="/albion/other_status">3: west world status search by ID</a><br />
       
      </div>
    </header>
  );
}

export default Home
