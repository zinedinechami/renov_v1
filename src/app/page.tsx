import Image from "next/image";
import Header from "@/components/header";
import LandingPage from "@/pages/landing";
import About from "@/pages/about";

export default function Home() {
  return (
    <>
      <body className="bg-zinc-100 ">
        <Header />
        <main className="">
          <LandingPage />
          <About />
        </main>
      </body>
    </>
  );
}
