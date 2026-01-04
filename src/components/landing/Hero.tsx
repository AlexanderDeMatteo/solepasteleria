import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {

  return (
    <section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1
                className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
                Pastelería de Autor
            </h1>
            <p className="mt-2 text-xl text-accent font-semibold font-headline">
                Por Sole
            </p>
            <p
                className="mt-6 max-w-xl text-lg text-foreground/80 sm:text-xl mx-auto md:mx-0"
            >
                Creaciones mágicas, hechas a mano con amor para endulzar tus momentos más especiales.
            </p>
            <div
                className="mt-10 flex items-center justify-center md:justify-start gap-4"
            >
                <Button
                asChild
                size="lg"
                className="group rounded-full bg-gradient-to-r from-primary to-[#A855F7] text-primary-foreground shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
                >
                <Link href="#order-form">
                    Crea tu torta ideal
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                </Button>
                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="group rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 border-accent/50 hover:bg-accent/5"
                >
                    <Link href="#gallery">
                        Ver creaciones
                    </Link>
                </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-[500px] md:h-auto">
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-3xl rounded-full"></div>
              <div className="relative w-full max-w-md h-full">
                  <Image
                      src={"/iso-tortas.jpg"}
                      alt={"Chef with multiple artistic cakes"}
                      fill
                      className="object-contain rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-2xl"
                      priority
                      data-ai-hint={"chef cakes"}
                  />
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
