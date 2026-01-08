import React from "react";
import { Instagram, MapPin, Phone, Clock, Heart, Facebook } from "lucide-react";

export default function Footer() {
  return (
    // ESTRUCTURA CLÁSICA DE COLUMNAS (Ahorra espacio vertical)
    // bg-[#A855F7]: Color de marca vibrante
    <footer className="bg-[#A855F7] text-white pt-10 pb-6 relative z-10 border-t-4 border-[#C5A059]">
      
      <div className="container mx-auto px-6">
        
        {/* GRID DE 3 COLUMNAS (En Desktop se ven lado a lado, ocupando menos altura) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 items-start">
          
          {/* COLUMNA 1: MARCA (A la izquierda) */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              solePasteleria
            </h3>
            <p className="text-purple-100 text-xs leading-relaxed max-w-xs mx-auto md:mx-0 opacity-90">
              Transformamos ingredientes de calidad en momentos inolvidables. 
              Repostería 100% artesanal.
            </p>
          </div>

          {/* COLUMNA 2: CONTACTO (Al centro) */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center md:justify-start gap-3 group">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Phone size={14} />
              </div>
              <span className="opacity-90 hover:opacity-100">+58 424 597 8056</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-3 group">
               <div className="bg-white/20 p-1.5 rounded-full">
                <MapPin size={14} />
              </div>
              <span className="opacity-90 hover:opacity-100">Valencia, Carabobo</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 group">
               <div className="bg-white/20 p-1.5 rounded-full">
                <Clock size={14} />
               </div>
              <span className="opacity-90 hover:opacity-100">Lun - Sáb: 9am - 6pm</span>
            </div>
          </div>

          {/* COLUMNA 3: REDES (A la derecha) */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-[#C5A059] font-bold text-xs uppercase tracking-widest bg-white/10 px-2 py-1 rounded">
              Síguenos
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/solepasteleria1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-[#A855F7] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all"
              >
                <Instagram size={18} />
              </a>
              {/* Facebook opcional */}
              {/* <a href="#" className="w-9 h-9 ..."><Facebook size={18} /></a> */}
            </div>
          </div>

        </div>

        {/* COPYRIGHT (Línea final minimalista) */}
        <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-purple-100 opacity-70">
          <p>© {new Date().getFullYear()} SolePasteleria. Reservados todos los derechos.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={8} className="fill-current text-white" /> para Sole
          </p>
        </div>

      </div>
    </footer>
  );
}