import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy-load below-the-fold sections so the hero video owns the initial paint.
const Collection = dynamic(() => import("@/components/Collection"), {
  loading: () => <div className="h-[600px] w-full bg-navy" />,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Collection />
      <Footer />
    </main>
  );
}
