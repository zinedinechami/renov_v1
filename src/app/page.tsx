import Image from "next/image";
import Header from "@/components/header";
import LandingPage from "@/pages/landing";

export default function Home() {
  return (
    <>
      <body className="bg-zinc-100 ">
        <Header />
        <main className="md:px-48 px-4">
          <LandingPage />
        </main>
      </body>
    </>
  );
}
