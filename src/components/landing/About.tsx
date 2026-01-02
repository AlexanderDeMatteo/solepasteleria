
'use client';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Sun } from "lucide-react";

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'sole-portrait');

  return (
    <section id="about" className="bg-secondary/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
              Nuestra Historia
            </h2>
            <div className="flex my-4">
                <Sun className="mr-2 h-6 w-6 text-accent" />
                <Sun className="mr-2 h-6 w-6 text-accent" style={{animationDelay: "0.2s"}}/>
                <Sun className="h-6 w-6 text-accent" style={{animationDelay: "0.4s"}}/>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              SolePasteleria nació de un sueño y una pasión por la repostería que se ha cultivado desde la infancia. Cada torta es una obra de arte, una expresión de amor y dedicación.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Nuestra fundadora, Sole, ha perfeccionado sus técnicas a lo largo de los años, combinando recetas tradicionales con un toque moderno e innovador. Su misión es crear momentos inolvidables a través de sabores que deleitan el paladar y diseños que alegran el corazón.
            </p>
             <p className="mt-4 text-lg text-gray-600">
              Creemos que cada celebración merece una torta especial, y por eso nos esforzamos en personalizar cada detalle para hacer tus sueños realidad.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl rounded-2xl w-full max-w-sm transform transition-all duration-500 hover:scale-105 hover:shadow-primary/20">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={500}
                    height={600}
                    className="object-cover aspect-[4/5]"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
