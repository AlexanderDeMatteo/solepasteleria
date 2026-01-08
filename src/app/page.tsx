

import  About  from "@/components/landing/About";
import { Gallery } from "@/components/landing/Gallery";
import OrderForm from "@/components/landing/OrderForm";
import  Footer  from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
