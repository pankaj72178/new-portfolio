import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Statement from "@/components/sections/Statement";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Statement />
        <TechStack />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
