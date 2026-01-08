import React from "react";
import Image from "next/image";
import { Award, Clock, Heart, Star } from "lucide-react";

// Asegúrate que esta sea la ruta correcta de tu foto nueva
import chefImage from "@/lib/yso-profesional.jpg"; 

export default function About() {
  
  const stats = [
    { label: "Años de Experiencia", value: "+5", icon: Clock },
    { label: "Tortas Diseñadas", value: "+800", icon: Star },
    { label: "Clientes Felices", value: "100%", icon: Heart },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden" id="historia">
      {/* Fondo decorativo sutil */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] opacity-60 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* 1. LA FOTO (REDUCIDA Y CONTROLADA) */}
          {/* CAMBIO: Agregamos 'max-w-[380px]' para que no se vea gigante */}
          <div className="w-full md:w-5/12 relative group flex justify-center md:justify-end">
            <div className="relative w-full max-w-[350px] md:max-w-[380px]">
              
              {/* Marco Dorado desplazado */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-[#C5A059] rounded-[2rem] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              {/* Contenedor de la foto */}
              <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-white border-[6px] border-white">
                <Image
                  src={chefImage}
                  alt="Sole - Maestra Pastelera"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  // Ajuste de foco en la cara
                  style={{ objectPosition: "center 20%" }} 
                />
                
                {/* Badge de Certificación (Más pequeño y sutil) */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur py-2 px-4 rounded-xl shadow-lg border border-purple-100 flex items-center gap-2 animate-pulse-slow">
                  <div className="bg-[#A855F7]/10 p-1.5 rounded-full text-[#A855F7]">
                    <Award size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-400 uppercase tracking-wider font-bold">Pastelera</p>
                    <p className="text-xs font-serif font-bold text-[#2D2D2D]">Certificada</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 2. EL TEXTO (Más espacio para respirar) */}
          <div className="w-full md:w-7/12 space-y-6 text-center md:text-left">
            
            <div className="space-y-3">
              <span className="text-[#A855F7] font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-0.5 bg-[#A855F7]"></span>
                Nuestra Esencia
              </span>
              
              <h2 className="text-3xl md:text-5xl font-serif text-[#2D2D2D] leading-tight">
                El arte de crear <br />
                <span className="text-[#C5A059] italic">momentos dulces.</span>
              </h2>
            </div>

            <div className="prose text-gray-500 font-light text-base md:text-lg leading-relaxed space-y-4 max-w-2xl">
              <p>
                Hola, soy Sole. Lo que comenzó como una curiosidad en la cocina de mi casa, se transformó en mi vocación de vida. 
                Me formé profesionalmente para entender la ciencia detrás de cada bizcocho, porque creo que la belleza debe ir acompañada de un sabor impecable.
              </p>
              <p>
                En <strong>@solepasteleria1</strong>, no usamos pre-mezclas. Cada torta se hornea desde cero, con mantequilla real, 
                chocolate de calidad y una obsesión por los detalles que marca la diferencia entre un postre y una experiencia.
              </p>
            </div>

            {/* Barra de Estadísticas Compacta */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-[#C5A059]/20 py-6 mt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-2xl md:text-3xl font-serif text-[#A855F7] font-bold">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Firma */}
            <div className="pt-2">
              <p className="font-serif text-xl text-[#C5A059] italic">
                - Con amor, Sole.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}