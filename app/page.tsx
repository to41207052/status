import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <p>Hello</p>
       <a href="/albion/my_status">1: mystatus by albion</a>
       <a href="/albion/name">2: west world name search</a>
       <a href="/albion/other_status">3: west world status search by ID</a>
       
      </div>
    </main>
  );
}
