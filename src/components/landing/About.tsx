'use client';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { KawaiiSun } from "../icons/KawaiiSun";

export function About() {
  return (
    <section id="about" className="bg-secondary/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Nuestra Historia
            </h2>
             <div className="flex my-4">
                <div className="w-8 h-8 text-accent">
                    <KawaiiSun />
                </div>
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
            <Card className="overflow-hidden shadow-2xl rounded-2xl w-full max-w-sm transform transition-all duration-500 hover:scale-105 hover:shadow-primary/20 border-2 border-accent/50 p-2 bg-white">
              <CardContent className="p-0 rounded-[0.8rem] overflow-hidden">
                <Image
                  src={"/ysopreciosa.jpg"}
                  alt={"A portrait of Sole, the pastry chef."}
                  width={500}
                  height={600}
                  className="object-cover aspect-[4/5]"
                  data-ai-hint={"woman baker"}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
