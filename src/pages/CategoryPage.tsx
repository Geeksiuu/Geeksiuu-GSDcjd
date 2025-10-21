import { moreAddons } from "@/data/moreAddons";
import { moreAddons2 } from "@/data/moreAddons2";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { AddonCard } from "@/components/AddonCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/hooks/useTheme";
import { 
  ArrowLeft, 
  Filter, 
  SortAsc, 
  Grid3X3, 
  List,
  Package,
  Smartphone,
  Wrench,
  Palette,
  Map,
  Shield,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Import images
import addonBloquearAnuncios from "@/assets/bloquear-anuncios.jpg";
import addonRealismCraft from "@/assets/addon-realism-craft.jpg";
import addonRealismAddon from "@/assets/addon-realism-addon.jpg";
import addonRealismEffects  from "@/assets/addon-realism-effects.jpg"
import addonRealismFieldsforests from "@/assets/addon-realism-fields-forests.jpg"
import apkMinecraftBedrock from "@/assets/apk-minecraft-bedrock.jpg";
import packActionStuff from "@/assets/pack-action-and-stuff.jpg";
import packRealismVFX from "@/assets/addons-realism-vfx.jpg";

const categoryConfig = {
  addons: {
    title: "Addons (Marketplace)",
    icon: Package,
    color: "gaming-green",
    description: "Addons gratuitos de la Marketplace oficial con nuevas mecánicas, mobs y características"
  },
  apks: {
    title: "APKs & Versiones",
    icon: Smartphone,
    color: "gaming-orange",
    description: "Últimas versiones de Minecraft para Android, incluyendo betas y versiones modificadas"
  },
  tools: {
    title: "Mods & Tools",
    icon: Wrench,
    color: "gaming-blue",
    description: "Herramientas de modificación, editores de mapas y utilidades para desarrolladores"
  },
  textures: {
    title: "Texture Packs",
    icon: Palette,
    color: "gaming-purple",
    description: "Paquetes de texturas HD, shaders realistas y efectos visuales impresionantes"
  },
  maps: {
    title: "Maps & Worlds",
    icon: Map,
    color: "gaming-red",
    description: "Mapas épicos, mundos de aventura, construcciones increíbles y desafíos únicos"
  },
  hacks: {
    title: "Hacks & Utilities",
    icon: Shield,
    color: "primary",
    description: "Herramientas avanzadas, cheats útiles y utilidades para mejorar tu experiencia"
  }
};

// Sample data for each category
const categoryData = {
  addons: [
    {
      title: "Tutorial para evitar anuncios",
      description: "Tutorial para evitar molestos anuncios al momento de la descargsa de su addon fav..",
      imageUrl: addonBloquearAnuncios,
      downloadUrl: "https://youtu.be/BjoCDi8sWus?feature=shared",
      category: "addon" as const,
      rating: 4.8,
      downloads: 50000,
      author: "Craft",
      updatedAt: "Hace 1 día",
      buttonText: "Ver Tutorial"
    },
    {
      title: "REALISMCRAFT 2.1",
      description: "Convierte a los zombies en más inteligentes con IA avanzada",
      imageUrl: addonRealismCraft,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/realis-craft-21mcaddon-para-minecraft-bedrock",
      category: "addon" as const,
      rating: 4.8,
      downloads: 50000,
      author: "Craft",
      updatedAt: "Hace 1 día"
    },
    {
      title: "REALISM+ Add-on",
      description: "Última versión del popular addon de realismo",
      imageUrl: addonRealismAddon,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/realism-add-onmcaddon-para-tu-minecraft-bedrock",
      category: "addon" as const,
      rating: 4.7,
      downloads: 35000,
      author: "Realism Team",
      updatedAt: "Hace 3 días"
    },
    {
      title: "Realism Effects",
      description: "Efectos visuales realistas para tu mundo",
      imageUrl: addonRealismEffects,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/realism-effects-11mcaddon-para-tu-minecraft-bedrock",
      category: "addon" as const,
      rating: 4.6,
      downloads: 28000,
      author: "Effects Pro",
      updatedAt: "Hace 1 semana"
    },
      {
      title: "Realism Fields+Forests",
      description: "Efectos visuales realistas para tu mundo",
      imageUrl: addonRealismFieldsforests,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/realism-11-fields-forests-para-minecraft-bedrock",
      category: "addon" as const,
      rating: 4.6,
      downloads: 28000,
      author: "Effects Pro",
      updatedAt: "Hace 1 semana"
    },
  
...moreAddons,
...moreAddons2

  ],
  apks: [
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
      title: "Minecraft Patch Edition",
      description: "Versión modificada con shaders integrados",
      imageUrl: apkMinecraftBedrock,
      downloadUrl: "https://app.mediafire.com/folder/j78ogo2elrzb8",
      category: "apk" as const,
      rating: 4.5,
      downloads: 85000,
      author: "Community",
      updatedAt: "Hace 1 semana"
    }
  ],
  tools: [
    {
      title: "Actions & Stuff 1.7",
      description: "Agrega nuevas animaciones y acciones épicas al juego",
      imageUrl: packActionStuff,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/acciones-y-mas-16-para-tu-minecraft-bedrock",
      category: "texture" as const,
      rating: 4.7,
      downloads: 35000,
      author: "Community",
      updatedAt: "Hace 5 días"
    }
  ],
  textures: [
    {
      title: "Realism VFX Pack",
      description: "Efectos visuales ultra realistas para Minecraft",
      imageUrl: packRealismVFX,
      downloadUrl: "https://linkyshare.com/es/@Geekhkr/realism-vfx-12mcaddon-para-tu-minecraft-bedrock",
      category: "texture" as const,
      rating: 4.6,
      downloads: 28000,
      author: "VFX Team",
      updatedAt: "Hace 1 semana"
    }
  ],
  maps: [],
  hacks: []
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"popular" | "recent" | "rating">("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 72;

  const category = categoryId ? categoryConfig[categoryId as keyof typeof categoryConfig] : null;
  const items = categoryId ? categoryData[categoryId as keyof typeof categoryData] || [] : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Categoría no encontrada</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = category.icon;
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onThemeToggle={toggleTheme} isDark={isDark} />

      {/* Category Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-card border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="mr-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
            </Link>
            <Badge className={`bg-${category.color} text-white`}>
              {category.title}
            </Badge>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className={`p-4 rounded-2xl bg-${category.color}/20`}>
              <Icon className={`h-12 w-12 text-${category.color}`} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                {category.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{filteredItems.length} elementos disponibles</span>
            <span>•</span>
            <span>Actualizado diariamente</span>
            <span>•</span>
            <span>Descarga gratuita</span>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <SearchBar
                onSearch={setSearchQuery}
                placeholder={`Buscar en ${category.title.toLowerCase()}...`}
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ordenar:</span>
                <Button
                  variant={sortBy === "popular" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("popular")}
                >
                  Popular
                </Button>
                <Button
                  variant={sortBy === "recent" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("recent")}
                >
                  Reciente
                </Button>
                <Button
                  variant={sortBy === "rating" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("rating")}
                >
                  Rating
                </Button>
              </div>

              {/* View Mode */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <Icon className="h-24 w-24 text-muted-foreground mx-auto mb-6 opacity-50" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {searchQuery ? "No se encontraron resultados" : "Próximamente"}
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                {searchQuery 
                  ? `No encontramos elementos que coincidan con "${searchQuery}"`
                  : "Estamos trabajando para traerte el mejor contenido en esta categoría."
                }
              </p>
              {searchQuery && (
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSearchQuery("")}
                >
                  Limpiar búsqueda
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-6"
              }>
                {currentItems.map((item, index) => (
                  <AddonCard
                    key={item.title}
                    {...item}
                    isRedButton={currentPage === 2}
                    className={`animate-fade-in delay-${index * 50} ${
                      viewMode === "list" ? "flex flex-row max-w-none h-48" : ""
                    }`}
                  />
                ))}
              </div>

              {/* Gaming Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-16">
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-transparent border-2 border-gaming-green text-gaming-green hover:bg-gaming-green/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 rounded-lg px-4 py-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant="outline"
                        size="lg"
                        onClick={() => handlePageChange(page)}
                        className={`min-w-[3rem] h-12 font-bold transition-all duration-300 rounded-lg ${
                          currentPage === page
                            ? "bg-gaming-green border-2 border-gaming-green text-white shadow-[0_0_20px_hsl(142_76%_36%/0.6)]"
                            : "bg-transparent border-2 border-gaming-green text-gaming-green hover:bg-gaming-green/10"
                        }`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="bg-transparent border-2 border-gaming-green text-gaming-green hover:bg-gaming-green/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 rounded-lg px-4 py-2"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </>
          )}  
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
