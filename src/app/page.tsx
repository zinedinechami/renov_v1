import Image from "next/image";
import Header from "@/components/header";
import LandingPage from "@/pages/landing";

export default function Home() {
  return (
    <>
      <body className="bg-zinc-100 p">
        <Header />
        <main className="px-40">
          <LandingPage />
        </main>
      </body>
    </>
  );
}
