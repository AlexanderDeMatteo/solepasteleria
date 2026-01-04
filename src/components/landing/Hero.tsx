
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'chef-hero');

  return (
    <section className="min-h-screen w-full lg:grid lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center p-8 text-center lg:text-left lg:items-start">
        <div className="relative">
            <h1
                className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
                Pastelería de Autor
            </h1>
            <p className="mt-2 text-xl text-accent font-semibold font-headline">
                Por Sole
            </p>
            <p
                className="mt-6 max-w-xl text-lg text-foreground/80 sm:text-xl"
            >
                Creaciones mágicas, hechas a mano con amor para endulzar tus momentos más especiales.
            </p>
            <div
                className="mt-10 flex items-center justify-center lg:justify-start gap-4"
            >
                <Button
                asChild
                size="lg"
                className="group rounded-full bg-gradient-to-r from-primary to-[#A855F7] text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
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
      </div>
      <div className="relative hidden lg:block">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:bg-gradient-to-r"></div>
      </div>
    </section>
  );
}
