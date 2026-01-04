
"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Upload, Send, ArrowRight, ArrowLeft, User, MessageSquare, Cookie, Layers, Palette } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SmallCakeIcon } from "@/components/icons/SmallCakeIcon";
import { MediumCakeIcon } from "@/components/icons/MediumCakeIcon";
import { LargeCakeIcon } from "@/components/icons/LargeCakeIcon";
import { TwoTierCakeIcon } from "@/components/icons/TwoTierCakeIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CakeIcon } from "../icons/CakeIcon";


const formSchema = z.object({
  cakeSize: z.enum(["6-pulgadas", "8-pulgadas", "10-pulgadas", "dos-pisos"], {
    required_error: "Debes seleccionar un tamaño.",
  }),
  cakeFlavor: z.string({ required_error: "Debes seleccionar un sabor." }).optional(),
  filling: z.string({ required_error: "Debes seleccionar un relleno." }).optional(),
  customization: z.string().max(500, "Máximo 500 caracteres.").optional(),
  referenceImage: z.any().optional(),
  customerName: z.string().min(2, { message: "El nombre es muy corto." }).optional(),
  contact: z.string().min(10, { message: "Número de contacto inválido." }).optional(),
  deliveryDate: z.date().optional(),
  paymentMethod: z.enum(["cash_zelle", "pagomovil"]).optional(),
  paymentScreenshot: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
    { id: 'size', name: 'Tamaño', icon: CakeIcon },
    { id: 'flavor', name: 'Sabor', icon: Cookie },
    { id: 'filling', name: 'Relleno', icon: Layers },
    { id: 'decor', name: 'Decoración', icon: Palette },
    { id: 'data', name: 'Datos', icon: User },
];

export function OrderForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customization: "",
    },
  });

  const { watch, trigger } = form;
  const paymentMethod = watch("paymentMethod");

  const processForm = async (values: FormData) => {
    console.log({ values });
    toast({
      title: "¡Pedido Recibido!",
      description: "Gracias por tu pedido. Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
    setCurrentStep(0);
  };

  type FieldName = keyof FormData;

  const next = async () => {
    const fields = steps[currentStep].id === 'size' ? ['cakeSize'] : [];

    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
        setCurrentStep(step => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1);
    }
  };

  const cakeSizes = [
    { id: "6-pulgadas", label: "6 Pulgadas", servings: "8-10 porciones", icon: SmallCakeIcon },
    { id: "8-pulgadas", label: "8 Pulgadas", servings: "15-20 porciones", icon: MediumCakeIcon },
    { id: "10-pulgadas", label: "10 Pulgadas", servings: "25-30 porciones", icon: LargeCakeIcon },
    { id: "dos-pisos", label: "Dos Pisos", servings: "40+ porciones", icon: TwoTierCakeIcon },
  ];

  return (
    <section id="order-form" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl tracking-tight sm:text-5xl text-foreground">
            Haz tu <span className="text-primary">Pedido</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Te guiamos paso a paso para crear la torta perfecta
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-12">
            <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex flex-col items-center">
                            <div className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300",
                                currentStep === index ? "bg-primary border-primary text-primary-foreground" : "bg-muted border-border text-muted-foreground",
                                currentStep > index && "bg-primary/20 border-primary/30 text-primary"
                            )}>
                                <step.icon className="w-6 h-6" />
                            </div>
                            <p className={cn(
                                "mt-2 text-sm font-medium transition-all duration-300",
                                currentStep === index ? "text-primary" : "text-muted-foreground"
                            )}>{step.name}</p>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={cn(
                                "flex-auto border-t-2 mx-4 transition-all duration-300",
                                currentStep > index ? "border-primary" : "border-border"
                            )} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>

        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(processForm)} className="space-y-8">
            
            {/* Step 1: Size */}
            {currentStep === 0 && (
              <Card className="border-primary/20 shadow-xl">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl font-headline text-foreground">
                        <CakeIcon className="w-7 h-7 text-primary"/>
                        Elige el tamaño de tu torta
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <FormField
                      control={form.control}
                      name="cakeSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                            >
                              {cakeSizes.map((size) => {
                                const Icon = size.icon;
                                return (
                                <FormItem key={size.id}>
                                    <FormControl>
                                        <RadioGroupItem value={size.id} id={size.id} className="sr-only" />
                                    </FormControl>
                                    <Label
                                    htmlFor={size.id}
                                    className={cn(
                                        "flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all h-full",
                                        field.value === size.id && "border-primary ring-2 ring-primary bg-primary/5"
                                    )}
                                    >
                                    <Icon className="w-16 h-16 mb-4 text-primary" />
                                    <span className="font-bold text-lg">{size.label}</span>
                                    <span className="text-sm text-muted-foreground">{size.servings}</span>
                                    </Label>
                                </FormItem>
                                );
                              })}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage className="pt-2 text-center" />
                        </FormItem>
                      )}
                    />
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4">
                <Button type="button" variant="ghost" onClick={prev} disabled={currentStep === 0} className="rounded-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Anterior
                </Button>
                
                {currentStep === steps.length - 1 ? (
                    <Button type="submit" size="lg" className="rounded-full">
                        Enviar Pedido
                        <Send className="ml-2 h-4 w-4" />
                    </Button>
                ) : (
                    <Button type="button" size="lg" onClick={next} className="rounded-full bg-primary hover:bg-primary/90">
                        Siguiente
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
