import About from "@/components/About";
import Hero from "@/components/Hero";

import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray  pt-5 ">
      <NavBar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <div className="mt-20">footer</div>
    </main>
  );
}
