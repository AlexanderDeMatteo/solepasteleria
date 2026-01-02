import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { KawaiiStar } from "@/components/icons/KawaiiStar";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const solePortrait = PlaceHolderImages.find(p => p.id === 'sole-portrait');

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
       <div className="absolute top-8 left-8 w-24 h-24 text-accent/50 opacity-50">
          <KawaiiStar />
        </div>
        <div className="absolute bottom-8 right-8 w-32 h-32 text-primary/10 opacity-50 rotate-12">
          <KawaiiStar />
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
            {solePortrait && (
              <Image
                src={solePortrait.imageUrl}
                alt={solePortrait.description}
                width={400}
                height={400}
                className="rounded-full aspect-square object-cover shadow-2xl border-8 border-white ring-4 ring-primary/20"
                data-ai-hint={solePortrait.imageHint}
              />
            )}
          </div>
          <div className="text-center lg:text-left relative">
             <div className="absolute -top-12 -right-4 w-16 h-16 text-accent">
              <KawaiiStar />
            </div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Pastelería Mágica,</span>
              <span className="block text-primary">hecha con amor.</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-500 lg:mx-0 sm:text-xl md:mt-8 md:max-w-2xl">
              ¡Hola! Soy Sole. Convierto tus dulces sueños en realidad con tortas personalizadas que no solo se ven increíbles, sino que saben a gloria. Cada creación es una obra de arte única, hecha especialmente para ti.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                <Link href="#order-form">
                  ¡Quiero mi torta!
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
