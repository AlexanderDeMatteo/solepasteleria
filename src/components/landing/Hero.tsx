"use client"; // <--- IMPORTANTE: Esto es necesario para que funcionen los clics
import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/lib/ysopreciosa.jpg"; // Asegúrate que este nombre coincida con tu archivo real

export default function Hero() {

  // Función para hacer el scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#FDFBF7] overflow-hidden px-6 md:px-12 pt-12 md:pt-24 pb-24 md:pb-48">
      
      <div className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* LADO IZQUIERDO: TEXTO */}
        <div className="space-y-6 z-10 text-center md:text-left pt-6 md:pt-0">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
            Repostería de Autor
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#2D2D2D] leading-[1.1]">
            Creamos arte <br />
            <span className="text-[#D81B60] italic">
              que se saborea
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
            Cada torta cuenta una historia. Diseños exclusivos y sabor artesanal hechos por Sole para tus momentos inolvidables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            {/* BOTÓN 1: Ir a Pedidos */}
            <Button 
              onClick={() => scrollToSection("pedidos")}
              className="bg-[#D81B60] hover:bg-pink-800 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-pink-200/50 transition-all w-full sm:w-auto transform hover:scale-105"
            >
              Quiero mi torta
            </Button>
            
            {/* BOTÓN 2: Ir a Galería */}
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("gallery")}
              className="text-[#C5A059] hover:bg-yellow-50 hover:text-[#b08d4b] rounded-full px-8 py-6 text-lg w-full sm:w-auto font-medium"
            >
              Ver Galería →
            </Button>
          </div>
        </div>

        {/* LADO DERECHO: FOTO */}
        <div className="relative w-full flex justify-center items-center">
            
          <div className="absolute w-[110%] h-[110%] bg-[#faebd7] rounded-full blur-[100px] opacity-40 -z-10"></div>
          
          <div className="relative w-full max-w-md aspect-square md:aspect-[5/4] shadow-2xl rounded-[2rem] overflow-hidden border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <Image 
              src={heroImage} 
              alt="Sole Pastelera y sus creaciones"
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }} 
            />
          </div>
            
          <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 items-center gap-4 animate-bounce-slow z-20">
            <div className="bg-[#FDFBF7] p-3 rounded-full border border-[#C5A059]/20">
              <span className="text-xl">👩🏻‍🍳</span>
            </div>
            <div>
              <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">Hecho por Sole</p>
              <p className="text-sm font-bold text-gray-800">100% Artesanal</p>
            </div>
          </div>
        
        </div>

      </div>
    </section>
  );
}