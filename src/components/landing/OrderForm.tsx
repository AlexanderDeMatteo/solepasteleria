"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Upload, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  cakeSize: z.enum(["small", "medium", "large"], {
    required_error: "Debes seleccionar un tamaño.",
  }),
  cakeFlavor: z.string({ required_error: "Debes seleccionar un sabor." }),
  filling: z.string({ required_error: "Debes seleccionar un relleno." }),
  coverage: z.string({ required_error: "Debes seleccionar una cobertura." }),
  customization: z.string().max(500, "Máximo 500 caracteres.").optional(),
  referenceImage: z.any().optional(),
  customerName: z.string().min(2, { message: "El nombre es muy corto." }),
  contact: z.string().min(10, { message: "Número de contacto inválido." }),
  deliveryDate: z.date({
    required_error: "Se requiere una fecha de entrega.",
  }),
  paymentMethod: z.enum(["cash_zelle", "pagomovil"], {
    required_error: "Debes seleccionar un método de pago.",
  }),
  paymentScreenshot: z.any().optional(),
});

export function OrderForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customization: "",
    },
  });

  const paymentMethod = form.watch("paymentMethod");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "¡Pedido Recibido!",
      description: "Gracias por tu pedido. Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
  }

  const cakeSizes = [
    { id: "small", label: "Pequeña", servings: "8-10 porciones", icon: SmallCakeIcon },
    { id: "medium", label: "Mediana", servings: "16-20 porciones", icon: MediumCakeIcon },
    { id: "large", label: "Grande", servings: "25-30 porciones", icon: LargeCakeIcon },
  ];

  return (
    <section id="order-form" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Crea tu Torta Ideal
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Completa el formulario y preparate para una creación deliciosa.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl border-primary/20">
          <CardContent className="p-6 sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Step 1: Cake Details */}
                <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl font-headline text-primary">Paso 1: Tu Torta</CardTitle>
                </CardHeader>
                <FormField
                  control={form.control}
                  name="cakeSize"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-lg font-semibold">Tamaño y Porciones</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
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
                                    "flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all",
                                    field.value === size.id && "border-primary ring-2 ring-primary"
                                )}
                                >
                                <Icon className="w-16 h-16 mb-2 text-primary" />
                                <span className="font-bold text-lg">{size.label}</span>
                                <span className="text-sm text-muted-foreground">{size.servings}</span>
                                </Label>
                            </FormItem>
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <FormField
                    control={form.control}
                    name="cakeFlavor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold">Sabor del Bizcocho</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Selecciona un sabor" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="vainilla">Vainilla</SelectItem>
                            <SelectItem value="chocolate">Chocolate</SelectItem>
                            <SelectItem value="marmoleada">Marmoleada</SelectItem>
                            <SelectItem value="red_velvet">Red Velvet</SelectItem>
                            <SelectItem value="zanahoria">Zanahoria</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="filling"
                    render={({ field }) => (
                       <FormItem>
                        <FormLabel className="text-lg font-semibold">Relleno</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Selecciona un relleno" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="buttercream">Buttercream de Vainilla</SelectItem>
                            <SelectItem value="ganache">Ganache de Chocolate</SelectItem>
                            <SelectItem value="dulce_de_leche">Dulce de Leche</SelectItem>
                            <SelectItem value="crema_pastelera">Crema Pastelera</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coverage"
                    render={({ field }) => (
                       <FormItem>
                        <FormLabel className="text-lg font-semibold">Cobertura</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Selecciona una cobertura" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="buttercream">Buttercream</SelectItem>
                            <SelectItem value="ganache">Ganache</SelectItem>
                            <SelectItem value="fondant">Fondant</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="customization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">Personalización</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe el tema, colores, mensaje o cualquier detalle que desees..."
                          className="resize-y min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        ¡Cuéntanos tu idea y la haremos realidad!
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referenceImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">Foto de Referencia (Opcional)</FormLabel>
                      <FormControl>
                        <Input type="file" onChange={e => field.onChange(e.target.files?.[0])} />
                      </FormControl>
                      <FormDescription>
                        Si tienes una imagen de lo que te gustaría, ¡súbela aquí!
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Step 2: Contact and Payment */}
                <CardHeader className="p-0 pt-8 mb-8">
                    <CardTitle className="text-2xl font-headline text-primary">Paso 2: Entrega y Pago</CardTitle>
                </CardHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-semibold">Tu Nombre</FormLabel>
                        <FormControl>
                            <Input placeholder="Ej: Maria Rivas" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-semibold">WhatsApp</FormLabel>
                        <FormControl>
                            <Input type="tel" placeholder="Ej: 0412-1234567" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                <FormField
                  control={form.control}
                  name="deliveryDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="font-semibold">Fecha de Entrega Deseada</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Elige una fecha</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date() }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-lg font-semibold">Método de Pago</FormLabel>
                       <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <FormItem className="flex-1">
                            <FormControl>
                                <RadioGroupItem value="cash_zelle" id="cash_zelle" className="sr-only" />
                            </FormControl>
                            <Label htmlFor="cash_zelle" className={cn("flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer", field.value === "cash_zelle" && "border-primary")}>
                                Efectivo / Zelle
                            </Label>
                          </FormItem>
                          <FormItem className="flex-1">
                            <FormControl>
                                <RadioGroupItem value="pagomovil" id="pagomovil" className="sr-only" />
                            </FormControl>
                            <Label htmlFor="pagomovil" className={cn("flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer", field.value === "pagomovil" && "border-primary")}>
                                PagoMóvil
                            </Label>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {paymentMethod && (
                   <Card className="bg-secondary/50">
                        <CardContent className="p-4">
                            {paymentMethod === 'cash_zelle' && (
                                <p className="text-sm text-secondary-foreground">Se requiere un abono del 50%. Los detalles para el pago se coordinarán a través de WhatsApp.</p>
                            )}
                             {paymentMethod === 'pagomovil' && (
                                <div className="space-y-4">
                                     <p className="text-sm text-secondary-foreground">Realiza el PagoMóvil al siguiente número y sube el comprobante. <br /><strong>CI: V-12.345.678, Telf: 0412-1234567, Banco Banesco</strong></p>
                                     <FormField
                                        control={form.control}
                                        name="paymentScreenshot"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor="picture" className="font-semibold">Comprobante de Pago</FormLabel>
                                                <FormControl>
                                                     <Input id="picture" type="file" onChange={e => field.onChange(e.target.files?.[0])} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}
                        </CardContent>
                   </Card>
                )}


                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Pedido
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
