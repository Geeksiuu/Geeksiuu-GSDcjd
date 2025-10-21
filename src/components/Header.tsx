import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onThemeToggle?: () => void;
  isDark?: boolean;
}

export function Header({ onThemeToggle, isDark = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border shadow-card-gaming sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-secondary animate-glow-pulse">
              JorgeHKR
            </h1>
            <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full animate-float">
              MC Store
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#categories"
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Categorías
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#downloads"
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Descargas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={onThemeToggle}
              className="border-border bg-card hover:bg-accent transition-all duration-300"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden border-border bg-card hover:bg-accent"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "max-h-64 opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#categories"
              className="text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorías
            </a>
            <a
              href="#downloads"
              className="text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Descargas
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}