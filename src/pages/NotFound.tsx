import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-gaming bg-clip-text text-transparent animate-glow-pulse mb-4">
            404
          </h1>
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-secondary/20 rounded-full animate-pulse delay-75"></div>
            <div className="absolute inset-4 bg-accent/20 rounded-full animate-pulse delay-150"></div>
            <Search className="absolute inset-0 m-auto h-12 w-12 text-muted-foreground animate-float" />
          </div>
        </div>

        {/* Content */}
        <h2 className="text-3xl font-bold text-foreground mb-4">
          ¡Oops! Página no encontrada
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Parece que el addon que buscas no está en nuestro inventario. 
          <span className="block mt-2">¿Quizás se teletransportó a otra dimensión?</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/80 shadow-gaming">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Volver al Inicio
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/#categories">
              <Search className="mr-2 h-5 w-5" />
              Explorar Categorías
            </Link>
          </Button>
        </div>

        {/* Gaming Easter Egg */}
        <div className="mt-12 p-6 bg-gradient-card rounded-2xl border border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            💡 <strong>Tip Gaming:</strong> ¡Usa el buscador para encontrar tus addons favoritos!
          </p>
          
          <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gaming-green rounded-full animate-pulse"></div>
              <span>Addons</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gaming-orange rounded-full animate-pulse delay-100"></div>
              <span>APKs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gaming-purple rounded-full animate-pulse delay-200"></div>
              <span>Texturas</span>
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 bg-secondary/10 rounded-full blur-xl animate-float delay-75"></div>
        <div className="absolute top-1/2 right-8 w-8 h-8 bg-accent/10 rounded-full blur-xl animate-float delay-150"></div>
      </div>
    </div>
  );
};

export default NotFound;
