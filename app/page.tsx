import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
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
      <Testimonials />
    </main>
  );
}
