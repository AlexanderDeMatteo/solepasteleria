
"use client";
import Image, { type StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- TUS IMPORTACIONES DE IMÁGENES (Manteniendo tu estructura) ---
import stichImg from "@/lib/creaciones/tortas/stich.jpg";
import anosImg from "@/lib/creaciones/tortas/15-años.jpg";
import rosaImg from "@/lib/creaciones/tortas/15-rosa.jpg";
import conejoRosa from "@/lib/creaciones/tortas/conejo-rosa.jpg";
import mariposasColores from "@/lib/creaciones/tortas/mariposas-colores.jpg";

export function Gallery() {
  // He actualizado los datos para incluir 'title' y 'category' que usa el nuevo diseño
  const cakeImages: { 
    id: string; 
    title: string;
    category: string;
    description: string; 
    imageUrl: StaticImageData; 
    imageHint: string; 
  }[] = [
    {
      id: "cake-stich",
      title: "Mundo Stitch",
      category: "Infantil",
      description: "Personaje modelado a mano con detalles tropicales.",
      imageUrl: stichImg,
      imageHint: "character cake"
    },
    {
      id: "cake-15-elegant",
      title: "15 Años Soñados",
      category: "Elegante",
      description: "Altura y flores naturales para una noche inolvidable.",
      imageUrl: anosImg,
      imageHint: "quinceanera cake"
    },
    {
      id: "cake-bunny",
      title: "Dulzura Tierna",
      category: "Baby Shower",
      description: "Acabados suaves y colores pasteles para celebrar la vida.",
      imageUrl: conejoRosa,
      imageHint: "bunny cake"
    },
    {
      id: "cake-mario",
      title: "Fantasía de Color",
      category: "Temática",
      description: "Explosión de colores y mariposas comestibles.",
      imageUrl: mariposasColores,
      imageHint: "colorful cake"
    },
    {
      id: "cake-15-pink",
      title: "Pink & Gold",
      category: "Glamour",
      description: "La combinación perfecta de rosa y detalles en oro.",
      imageUrl: rosaImg,
      imageHint: "pink cake"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-[#FDFBF7] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* ENCABEZADO: Estilo Brand-Match (Lila y Dorado) */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
            Nuestro Portafolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D]">
            Pequeñas obras de <span className="text-[#A855F7] italic">arte</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light">
            Un vistazo a la magia que creamos. Desde lo clásico hasta lo más atrevido.
          </p>
        </div>

        {/* CARRUSEL */}
        <div className="flex justify-center px-4 md:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-5xl"
          >
            <CarouselContent className="-ml-4 pb-4">
              {cakeImages.map((image) => (
                <CarouselItem key={image.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    
                    {/* TARJETA CON EFECTO HOVER PREMIUM */}
                    <Card className="border-0 shadow-none bg-transparent group h-full">
                      <CardContent className="p-0 h-full flex flex-col">
                        
                        {/* 1. IMAGEN (Marco con borde sutil Lila/Dorado y esquinas redondeadas) */}
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-2 border-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-200/50 group-hover:-translate-y-2">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            placeholder="blur"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            data-ai-hint={image.imageHint}
                          />
                          
                          {/* Overlay Gradiente Lila suave al hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Badge Flotante (Categoría) */}
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#E0B0FF] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-white/50">
                              {image.category}
                            </span>
                          </div>
                        </div>

                        {/* 2. TEXTO ABAJO */}
                        <div className="mt-6 text-center space-y-2 px-2">
                          <h3 className="text-xl font-serif text-[#2D2D2D] group-hover:text-[#A855F7] transition-colors duration-300">
                            {image.title}
                          </h3>
                          {/* Decoración Dorada pequeña */}
                          <div className="w-8 h-0.5 bg-[#C5A059]/30 mx-auto rounded-full"></div>
                          <p className="text-sm text-gray-400 font-light leading-relaxed line-clamp-2">
                            {image.description}
                          </p>
                        </div>

                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* BOTONES DE NAVEGACIÓN (Estilizados Lila y Dorado) */}
            <CarouselPrevious className="hidden md:flex border-[#E0B0FF] text-[#A855F7] hover:bg-[#E0B0FF] hover:text-white -left-12 h-12 w-12" />
            <CarouselNext className="hidden md:flex border-[#E0B0FF] text-[#A855F7] hover:bg-[#E0B0FF] hover:text-white -right-12 h-12 w-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}