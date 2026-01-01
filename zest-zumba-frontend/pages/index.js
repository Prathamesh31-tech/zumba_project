import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Trainers from "../components/Trainers";
import Packages from "../components/Packages";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Trainers />
      <Packages />
      <Gallery />
      <Testimonials />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
