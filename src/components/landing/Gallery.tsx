"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { KawaiiSun } from "@/components/icons/KawaiiSun";

export function Gallery() {
  const cakeImages = [
    {
      "id": "cake-stich",
      "description": "A cute cake themed after Stitch from Lilo & Stitch.",
      "imageUrl": "/stich.jpg",
      "imageHint": "character cake"
    },
    {
      "id": "cake-15-elegant",
      "description": "An elegant, multi-tiered cake for a 15th birthday celebration.",
      "imageUrl": "/15-anos.jpg",
      "imageHint": "quinceanera cake"
    },
    {
      "id": "cake-bunny",
      "description": "An adorable pink bunny cake.",
      "imageUrl": "/conejo-rosa.jpg",
      "imageHint": "bunny cake"
    },
     {
      "id": "cake-mario",
      "description": "A colorful Super Mario themed cake.",
      "imageUrl": "/mario-cake.jpg",
      "imageHint": "video-game cake"
    },
    {
      "id": "cake-15-pink",
      "description": "A beautiful pink and gold cake for a 15th birthday.",
      "imageUrl": "/15-rosa.jpg",
      "imageHint": "pink cake"
    }
  ]

  return (
    <section id="gallery" className="bg-primary/5 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Nuestras Creaciones
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Un vistazo a la magia que podemos crear para tu celebración.
          </p>
          <div className="flex justify-center mt-4">
             <div className="w-12 h-12 text-accent">
                <KawaiiSun />
              </div>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {cakeImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <CardContent className="flex aspect-[5/7] items-center justify-center p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={500}
                        height={700}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
