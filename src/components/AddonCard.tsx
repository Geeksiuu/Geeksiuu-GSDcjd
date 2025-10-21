import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Eye, Clock, User, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddonCardProps {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
  category: "addon" | "apk" | "mod" | "texture" | "map" | "tool";
  rating?: number;
  downloads?: number;
  author?: string;
  buttonText?: string;
  updatedAt?: string;
  className?: string;
}

const categoryConfig = {
  addon: { color: "gaming-green", label: "Addon" },
  apk: { color: "gaming-orange", label: "APK" },
  mod: { color: "gaming-blue", label: "Mod" },
  texture: { color: "gaming-purple", label: "Texture Pack" },
  map: { color: "gaming-red", label: "Map" },
  tool: { color: "accent", label: "Tool" },
};

export function AddonCard({
  title,
  description,
  imageUrl,
  downloadUrl,
  category,
  rating = 4.5,
  downloads = 0,
  author = "JorgeHKR",
   buttonText = "Descargar Gratis",
  updatedAt = "Hace 2 días",
  className,
}: AddonCardProps) {
  const config = categoryConfig[category];
  
  const formatDownloads = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <div
      className={cn(
        "group relative bg-gradient-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 hover:shadow-gaming hover:scale-105 hover:border-primary/50 animate-fade-in",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%239CA3AF'%3EMinecraft Addon%3C/text%3E%3C/svg%3E";
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <Badge 
          className={`absolute top-3 left-3 bg-${config.color} text-white border-0 shadow-lg`}
        >
          {config.label}
        </Badge>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="h-3 w-3 text-secondary fill-current" />
          <span className="text-xs font-medium text-foreground">{rating}</span>
        </div>

        {/* Preview Button (appears on hover) */}
        <Button
          size="icon"
          variant="secondary"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            <span>{formatDownloads(downloads)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{updatedAt}</span>
          </div>
        </div>

        {/* Download Button */}
        <Button
          asChild
          className={`w-full bg-${config.color} hover:bg-${config.color}/80 text-white shadow-lg group-hover:shadow-gaming transition-all duration-300 transform group-hover:scale-105`}
        >
          <a href={downloadUrl} download target="_blank" rel="noopener noreferrer">
            {buttonText.toLowerCase().includes("tutorial") ? (
              <Play className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            ) : (
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            )}
            {buttonText}
          </a>
        </Button>
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${config.color}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
      
      {/* Bottom Accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${config.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
    </div>
  );
}