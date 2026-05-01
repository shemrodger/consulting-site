import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Work from "./components/Work";
import MyEdge from "./components/MyEdge";
import HowIWork from "./components/HowIWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <WhatIDo />
        <Work />
        <MyEdge />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
