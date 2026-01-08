"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ShoppingBag, ChefHat, Layers, Palette, User, 
  ArrowRight, ArrowLeft, CakeSlice, Check, MessageCircle 
} from "lucide-react";

export default function OrderForm() {
  const [currentStep, setCurrentStep] = useState(1);
  
  // ESTADO: Aquí guardamos TODA la selección del usuario
  const [formData, setFormData] = useState({
    size: "",
    flavor: "",
    filling: "",
    decoration: "",
    name: "",
    phone: "",
    date: ""
  });

  // --- CONFIGURACIÓN ---
  // PON AQUÍ EL NÚMERO DE TU NOVIA (Formato internacional sin el +)
  // Ejemplo Venezuela: 584145921641
  const PHONE_NUMBER = "584245978056"; 

  // --- DATOS DE LAS OPCIONES ---
  const steps = [
    { id: 1, label: "Tamaño", icon: ShoppingBag },
    { id: 2, label: "Sabor", icon: ChefHat },
    { id: 3, label: "Relleno", icon: Layers },
    { id: 4, label: "Decoración", icon: Palette },
    { id: 5, label: "Datos", icon: User },
  ];

  const options = {
    sizes: [
      { id: "mini", title: "Mini Cake", subtitle: "4-6 porciones", desc: "Ideal para compartir en pareja." },
      { id: "peque", title: "Pequeña", subtitle: "10-12 porciones", desc: "La favorita para casa." },
      { id: "mediana", title: "Mediana", subtitle: "20-25 porciones", desc: "Cumpleaños familiar estándar." },
      { id: "dos_pisos", title: "Dos Pisos", subtitle: "40+ porciones", desc: "Para fiestas grandes." },
    ],
    flavors: [
      { id: "vainilla", title: "Vainilla Clásica", subtitle: "Suave y húmeda", desc: "La receta de la abuela." },
      { id: "chocolate", title: "Chocolate Intenso", subtitle: "Cacao 100%", desc: "Para los amantes del choco." },
      { id: "red_velvet", title: "Red Velvet", subtitle: "Rojo Pasión", desc: "Con toque de cacao y vainilla." },
      { id: "marmoleada", title: "Marmoleada", subtitle: "La mejor mezcla", desc: "Lo mejor de dos mundos." },
    ],
    fillings: [
      { id: "arequipe", title: "Arequipe", subtitle: "Dulce de leche", desc: "El clásico que no falla." },
      { id: "ganache", title: "Ganache Choco", subtitle: "Cremoso", desc: "Chocolate semiamargo." },
      { id: "nutella", title: "Nutella", subtitle: "Avellanas", desc: "El favorito de todos." },
      { id: "pastelera", title: "Crema Pastelera", subtitle: "Tradicional", desc: "Suave y ligera." },
    ]
  };

  // --- FUNCIONES ---

  // Actualizar selección (Tamaño, Sabor, Relleno)
  const handleSelect = (category: string, value: string) => {
    setFormData(prev => ({ ...prev, [category]: value }));
  };

  // Actualizar textos (Decoración, Datos)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ENVIAR A WHATSAPP
  const sendToWhatsApp = () => {
    const message = `
👋 *¡Hola Sole! Quiero pedir un presupuesto.*
    
🎂 *Mi Pedido:*
▫️ Tamaño: ${options.sizes.find(s => s.id === formData.size)?.title || formData.size}
▫️ Sabor: ${options.flavors.find(f => f.id === formData.flavor)?.title || formData.flavor}
▫️ Relleno: ${options.fillings.find(f => f.id === formData.filling)?.title || formData.filling}

🎨 *Idea de Decoración:*
${formData.decoration || "Sin detalles específicos"}

📅 *Para el día:* ${formData.date}

👤 *Mis Datos:*
Nombre: ${formData.name}
Teléfono: ${formData.phone}
    `.trim();

    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Validar si puede avanzar
  const canGoNext = () => {
    if (currentStep === 1 && !formData.size) return false;
    if (currentStep === 2 && !formData.flavor) return false;
    if (currentStep === 3 && !formData.filling) return false;
    if (currentStep === 5 && (!formData.name || !formData.phone)) return false;
    return true;
  };

  // --- RENDERIZADO DE PASOS ---
  const renderStepContent = () => {
    switch (currentStep) {
      // PASO 1: TAMAÑO
      case 1: return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.sizes.map((item) => (
             <SelectionCard 
               key={item.id} item={item} 
               isSelected={formData.size === item.id} 
               onClick={() => handleSelect("size", item.id)} 
             />
          ))}
        </div>
      );
      // PASO 2: SABOR
      case 2: return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.flavors.map((item) => (
             <SelectionCard 
               key={item.id} item={item} 
               isSelected={formData.flavor === item.id} 
               onClick={() => handleSelect("flavor", item.id)} 
             />
          ))}
        </div>
      );
      // PASO 3: RELLENO
      case 3: return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.fillings.map((item) => (
             <SelectionCard 
               key={item.id} item={item} 
               isSelected={formData.filling === item.id} 
               onClick={() => handleSelect("filling", item.id)} 
             />
          ))}
        </div>
      );
      // PASO 4: DECORACIÓN
      case 4: return (
        <div className="max-w-2xl mx-auto text-center space-y-6">
           <h3 className="text-xl font-serif text-[#2D2D2D]">Cuéntanos tu idea</h3>
           <p className="text-gray-500 text-sm">Describe la temática, colores, o si quieres algún topper especial (ej. "Temática de Stitch", "Colores dorados y blancos").</p>
           <Textarea 
             name="decoration"
             value={formData.decoration}
             onChange={handleChange}
             placeholder="Ej: Quiero que tenga mariposas comestibles y que diga 'Feliz Cumple'..."
             className="min-h-[150px] bg-white border-2 border-purple-100 focus:border-[#C5A059] rounded-xl p-4 text-lg"
           />
        </div>
      );
      // PASO 5: DATOS
      case 5: return (
        <div className="max-w-lg mx-auto space-y-6">
          <h3 className="text-xl font-serif text-[#2D2D2D] text-center">Tus datos para contactarte</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">Tu Nombre</label>
              <Input 
                name="name" placeholder="Ej: María Pérez" value={formData.name} onChange={handleChange}
                className="bg-white h-12 rounded-xl border-purple-100 focus:border-[#A855F7]"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">Teléfono (WhatsApp)</label>
              <Input 
                name="phone" placeholder="Ej: 0412 123 4567" value={formData.phone} onChange={handleChange}
                className="bg-white h-12 rounded-xl border-purple-100 focus:border-[#A855F7]"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 ml-1">Fecha del Evento</label>
              <Input 
                name="date" type="date" value={formData.date} onChange={handleChange}
                className="bg-white h-12 rounded-xl border-purple-100 focus:border-[#A855F7]"
              />
            </div>
          </div>
        </div>
      );
      default: return null;
    }
  };

  // --- RENDER PRINCIPAL ---
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="pedidos">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-3">
            Paso a Paso
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D2D2D] mb-4">
            Diseña tu <span className="text-[#A855F7] italic">momento</span>
          </h2>
        </div>

        {/* STEPPER (BARRA DE PROGRESO) */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 -z-10 transition-all duration-500"
              style={{ 
                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                background: "linear-gradient(to right, #A855F7, #C5A059)"
              }}
            ></div>

            {steps.map((step) => {
              const isActive = step.id <= currentStep;
              return (
                <div key={step.id} className="flex flex-col items-center gap-2">
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2
                      ${isActive 
                        ? "bg-[#A855F7] border-[#A855F7] text-white shadow-lg scale-110" 
                        : "bg-white border-gray-200 text-gray-300"
                      }
                    `}
                  >
                    <step.icon size={18} />
                  </div>
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wide ${isActive ? "text-[#A855F7]" : "text-gray-300"}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONTENEDOR DEL FORMULARIO */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FDFBF7] rounded-[2.5rem] p-6 md:p-12 shadow-xl border border-white min-h-[400px] flex flex-col justify-between">
            
            {/* Título Dinámico del Paso */}
            <div className="mb-8 text-center md:text-left border-b border-gray-200/50 pb-4">
               <h3 className="text-2xl font-serif text-[#2D2D2D] flex items-center gap-3 justify-center md:justify-start">
                  {steps[currentStep - 1].label === "Datos" ? "Finalizar Pedido" : `Elige tu ${steps[currentStep - 1].label}`}
               </h3>
            </div>

            {/* CONTENIDO VARIABLE */}
            <div className="flex-grow">
               {renderStepContent()}
            </div>

            {/* BOTONES DE NAVEGACIÓN */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200/50">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="text-gray-400 hover:text-[#2D2D2D]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
              </Button>

              {currentStep < 5 ? (
                <Button 
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!canGoNext()}
                  className={`rounded-full px-8 py-6 text-lg shadow-lg transition-all ${
                    canGoNext() 
                    ? "bg-[#A855F7] hover:bg-purple-700 text-white hover:scale-105" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Siguiente <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Button 
                  onClick={sendToWhatsApp}
                  disabled={!canGoNext()}
                  className="bg-[#25D366] hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-green-200 hover:scale-105 transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enviar a WhatsApp
                </Button>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// COMPONENTE AUXILIAR PARA LAS TARJETAS (Size, Flavor, Filling)
function SelectionCard({ item, isSelected, onClick }: { item: any, isSelected: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`
        relative cursor-pointer group rounded-2xl p-6 transition-all duration-300 border-2
        ${isSelected 
          ? "bg-white border-[#C5A059] shadow-xl shadow-[#C5A059]/10 translate-y-[-4px]" 
          : "bg-white border-transparent hover:border-[#C5A059]/30 shadow-sm hover:shadow-md"
        }
      `}
    >
      <div className={`
        w-10 h-10 rounded-full mb-4 flex items-center justify-center transition-colors
        ${isSelected 
            ? "bg-[#C5A059]/10 text-[#C5A059]" 
            : "bg-gray-50 text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-400"}
      `}>
        <CakeSlice size={20} />
      </div>

      <h4 className={`font-serif text-lg mb-1 ${isSelected ? "text-[#2D2D2D]" : "text-gray-600"}`}>
        {item.title}
      </h4>
      <p className="text-[#C5A059] font-bold text-xs uppercase tracking-wider mb-2">{item.subtitle}</p>
      <p className="text-xs text-gray-400 leading-relaxed">
        {item.desc}
      </p>

      {/* CHECK DORADO */}
      <div className={`
        absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
        ${isSelected 
          ? "scale-100 opacity-100 border-[#C5A059] bg-[#C5A059] text-white" 
          : "scale-0 opacity-0 border-transparent"
        }
      `}>
        <Check size={14} strokeWidth={3} />
      </div>
    </div>
  );
}