import Hero from "@/components/Hero";

import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray  pt-5 ">
      <NavBar />
      <div className="px-[80px]">
        <Hero />
      </div>
    </main>
  );
}
