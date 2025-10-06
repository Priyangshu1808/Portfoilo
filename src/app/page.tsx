import About from "@/components/about";
import ContactMe from "@/components/contact";
import contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Project from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Project />
      <ContactMe />
      <Footer/>
    </div>
  );
}
