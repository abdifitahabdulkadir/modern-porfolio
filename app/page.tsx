import About from "@/components/About";
import ApplicatonNavbar from "@/components/ApplicatonNavbar";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray  pt-5 ">
      <ApplicatonNavbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
