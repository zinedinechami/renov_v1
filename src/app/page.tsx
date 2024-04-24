import Image from "next/image";
import Header from "@/components/header";
import LandingPage from "@/pages/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>
    </>
  );
}
