import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-background via-secondary to-background text-center">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-4 animate-fade-in-up border-primary/30 bg-primary/10 text-primary-foreground shadow-sm"
          >
            <Sparkles className="mr-2 h-4 w-4 text-accent" />
            Repostería Artesanal
          </Badge>
          <div
            className="font-headline text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-pink-400">sole</span>
            <span className="text-primary">Pasteleria</span>
          </div>

          <h1
            className="font-headline text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Tortas a tu Medida
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg text-gray-500 sm:text-xl md:mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Creaciones personalizadas hechas con amor para tus momentos
            especiales
          </p>
          <div
            className="mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <Link href="#order-form">
                ¡Quiero mi torta!
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 text-primary animate-bounce">
        <a href="#gallery" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
