import Image from "next/image";
import Header from "@/components/header";
import LandingPage from "@/pages/landing";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <body>
        <Header />
        <main>
          <LandingPage />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </body>
    </>
  );
}
