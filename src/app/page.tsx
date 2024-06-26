import Image from "next/image";
import Header from "@/components/header";
import LandingPage from "@/pages/landing";
import About from "@/pages/about";
import Services from "@/pages/services";
import Avis from "@/pages/avis";
import Contact from "@/pages/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <body className="bg-zinc-100 ">
        <Header />

        <main>
          <LandingPage />
          <About />
          <Services />
          <Avis />
          <Contact />
        </main>
        <Footer />
      </body>
    </>
  );
}
