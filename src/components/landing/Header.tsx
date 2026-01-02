import Link from "next/link";
import { CakeIcon } from "@/components/icons/CakeIcon";

export function Header() {
  return (
    <header className="bg-primary/5 border-b border-primary/10 sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary text-primary-foreground rounded-full group-hover:scale-110 transition-transform">
              <CakeIcon className="h-6 w-6" />
            </div>
            <span className="font-headline text-2xl font-bold text-primary">
              SolePasteleria
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
