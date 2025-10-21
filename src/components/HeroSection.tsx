import { Button } from "@/components/ui/button";
import { PlayCircle, Star } from "lucide-react";
import minecraftBg from "@/assets/minecraft-bg.png";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${minecraftBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-card/20 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-border/30 animate-fade-in shadow-gaming">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-secondary animate-glow-pulse block mb-2">
                Bienvenido amante del
              </span>
              <span className="bg-gradient-gaming bg-clip-text text-transparent animate-float">
                Minecraft
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Aquí encontrarás los mejores <span className="text-primary font-semibold">addons</span>, 
              <span className="text-secondary font-semibold"> APKs</span> y 
              <span className="text-accent font-semibold"> modificaciones</span> para tu PC y móvil.
              <span className="block mt-2 text-primary animate-glow-pulse">¡Página en desarrollo HKR 🚀!</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => window.open("https://play.google.com/store", "_blank")}
              className="bg-gaming-green hover:bg-gaming-green/80 text-white shadow-gaming group transition-all duration-300 transform hover:scale-105"
           >
             <PlayCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Google Play
             </Button>
             <Button
              size="lg"
              asChild
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-gaming group transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://chat.whatsapp.com/FmlgeXtl9OUKftE2jsZQ97" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <svg className="mr-2 h-5 w-5 group-hover:animate-pulse fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Unete al grupo para poder hacer <br />
                tu pedido de tu addon favorito
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-primary group-hover:animate-glow-pulse transition-all">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Addons Gratis</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-secondary group-hover:animate-glow-pulse transition-all">
                100+
              </div>
              <div className="text-sm text-muted-foreground">APKs Disponibles</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center text-3xl font-bold text-accent group-hover:animate-glow-pulse transition-all">
                4.9
                <Star className="ml-1 h-6 w-6 fill-current" />
              </div>
              <div className="text-sm text-muted-foreground">Calificación</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}