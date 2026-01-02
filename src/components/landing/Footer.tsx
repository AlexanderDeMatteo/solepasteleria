import { Copyright } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <Copyright className="h-4 w-4 mr-2" />
          <span>{new Date().getFullYear()} SolePasteleria. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
