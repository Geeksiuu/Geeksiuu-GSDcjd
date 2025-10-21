import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  itemCount: number;
  color: "green" | "orange" | "purple" | "red" | "blue" | "primary";
  gradient?: string;
  href: string;
  className?: string;
}

const colorMap = {
  green: "gaming-green",
  orange: "gaming-orange", 
  purple: "gaming-purple",
  red: "gaming-red",
  blue: "gaming-blue",
  primary: "primary",
};

export function CategoryCard({
  title,
  description,
  icon: Icon,
  itemCount,
  color,
  href,
  className
}: CategoryCardProps) {
  const colorClass = colorMap[color];
  
  return (
    <div
      className={cn(
        "group relative bg-gradient-card rounded-2xl p-6 border border-border/50 transition-all duration-500 hover:shadow-gaming hover:scale-105 hover:border-primary/50 animate-fade-in overflow-hidden",
        className
      )}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-${colorClass}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Icon Container */}
      <div className="relative mb-4">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${colorClass}/20 group-hover:bg-${colorClass}/30 transition-all duration-300 group-hover:animate-glow-pulse`}>
          <Icon className={`h-8 w-8 text-${colorClass} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        
        {/* Item Count Badge */}
        <Badge 
          variant="secondary" 
          className={`absolute -top-2 -right-2 bg-${colorClass} text-white border-0 group-hover:animate-bounce`}
        >
          {itemCount}
        </Badge>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Action Button */}
        <Button
          asChild
          variant="outline"
          className={`w-full border-${colorClass}/50 text-${colorClass} hover:bg-${colorClass} hover:text-white transition-all duration-300 group-hover:shadow-lg`}
        >
          <a href={href}>
            Explorar Categoría
          </a>
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${colorClass} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
    </div>
  );
}