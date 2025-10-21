import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchBar } from "@/components/SearchBar";
import { AddonCard } from "@/components/AddonCard";
import { useTheme } from "@/hooks/useTheme";
import { 
  Package, 
  Smartphone, 
  Wrench, 
  Palette, 
  Map, 
  Shield,
  TrendingUp,
  Clock,
  Download
} from "lucide-react";

// Import generated images
import addonRealismCraft from "@/assets/addon-realism-craft.jpg";
import apkMinecraftBedrock from "@/assets/apk-minecraft-bedrock.jpg";
import packActionsStuff from "@/assets/pack-action-and-stuff.jpg";
import textureRealismVFX from "@/assets/addons-realism-vfx.jpg";

const Index = () => {
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Featured addons data
  const featuredAddons = [
    {
      title: "REALISMCRAFT 2.1",
      description: "Convierte a los zombies en más inteligentes con IA avanzada",
      imageUrl: addonRealismCraft,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/realis-craft-21mcaddon-para-minecraft-bedrock",
      category: "addon" as const,
      rating: 4.8,
      downloads: 50000,
      author: "JorgeHKR",
      updatedAt: "Hace 1 día"
    },
    {
      title: "Minecraft Bedrock",
      description: "Última versión oficial para Android con todas las funciones",
      imageUrl: apkMinecraftBedrock,
      downloadUrl: "https://app.mediafire.com/folder/6vzirxgmdn4r2/1.21.94",
      category: "apk" as const,
      rating: 4.9,
      downloads: 120000,
      author: "Mojang",
      updatedAt: "Hace 3 días"
    },
    {
      title: "Actions & Stuff 1.6",
      description: "Agrega nuevas animaciones y acciones épicas al juego",
      imageUrl: packActionsStuff,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/acciones-y-mas-16-para-tu-minecraft-bedrock",
      category: "texture" as const,
      rating: 4.7,
      downloads: 35000,
      author: "Community",
      updatedAt: "Hace 5 días"
    },
    {
      title: "Realism VFX",
      description: "Efectos visuales ultra realistas para Minecraft",
      imageUrl: textureRealismVFX,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/realism-vfx-12mcaddon-para-tu-minecraft-bedrock",
      category: "texture" as const,
      rating: 4.6,
      downloads: 28000,
      author: "VFX Team",
      updatedAt: "Hace 1 semana"
    }
  ];

  const categories = [
    {
      title: "Addons (Marketplace)",
      description: "Addons gratuitos de la Marketplace oficial con nuevas mecánicas, mobs y características",
      icon: Package,
      itemCount: 150,
      color: "green" as const,
      href: "/category/addons"
    },
    {
      title: "APKs & Versiones",
      description: "Últimas versiones de Minecraft para Android, incluyendo betas y versiones modificadas",
      icon: Smartphone,
      itemCount: 25,
      color: "orange" as const,
      href: "/category/apks"
    },
    {
      title: "Mods & Tools",
      description: "Herramientas de modificación, editores de mapas y utilidades para desarrolladores",
      icon: Wrench,
      itemCount: 80,
      color: "blue" as const,
      href: "/category/tools"
    },
    {
      title: "Texture Packs",
      description: "Paquetes de texturas HD, shaders realistas y efectos visuales impresionantes",
      icon: Palette,
      itemCount: 200,
      color: "purple" as const,
      href: "/category/textures"
    },
    {
      title: "Maps & Worlds",
      description: "Mapas épicos, mundos de aventura, construcciones increíbles y desafíos únicos",
      icon: Map,
      itemCount: 120,
      color: "red" as const,
      href: "/category/maps"
    },
    {
      title: "Hacks & Utilities",
      description: "Herramientas avanzadas, cheats útiles y utilidades para mejorar tu experiencia",
      icon: Shield,
      itemCount: 45,
      color: "primary" as const,
      href: "/category/hacks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header onThemeToggle={toggleTheme} isDark={isDark} />

      {/* Hero Section */}
      <HeroSection />

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Encuentra lo que necesitas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Busca entre cientos de addons, mods, APKs y más recursos para Minecraft
            </p>
          </div>
          
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Buscar addons, mods, APKs, texturas, mapas..."
            className="mb-8"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Explora nuestras categorías
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Descubre contenido organizado por categorías para encontrar exactamente lo que buscas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                {...category}
                className={`animate-slide-up delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Downloads Section */}
      <section id="downloads" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Descargas destacadas
              </h2>
              <p className="text-lg text-muted-foreground">
                Los addons y mods más populares de la comunidad
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Más populares</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Recientes</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAddons.map((addon, index) => (
              <AddonCard
                key={addon.title}
                {...addon}
                className={`animate-scale-in delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-gaming">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 animate-glow-pulse">500+</div>
              <div className="text-lg opacity-90">Addons Gratuitos</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 animate-glow-pulse">1M+</div>
              <div className="text-lg opacity-90">Descargas Totales</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 animate-glow-pulse">24/7</div>
              <div className="text-lg opacity-90">Soporte Activo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-secondary animate-glow-pulse mb-2">
              JorgeHKR Minecraft Store
            </h3>
            <p className="text-muted-foreground">
              Tu fuente confiable para addons, mods y recursos de Minecraft
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 JorgeHKR. Todos los derechos reservados.</span>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Página desarrollada para la comunidad</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
