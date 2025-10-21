import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ 
  onSearch, 
  placeholder = "Buscar addons, mods, APKs...", 
  className 
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className={`relative max-w-2xl mx-auto ${className}`}>
      {/* Main Search Bar */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-gaming rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-12 pr-20 py-3 bg-card border-border focus:border-primary text-foreground placeholder:text-muted-foreground rounded-lg shadow-card-gaming transition-all duration-300 focus:shadow-gaming"
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
          />

          <div className="absolute right-2 flex items-center gap-1">
            {query && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="h-8 w-8 hover:bg-accent rounded-full transition-all duration-300"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-accent rounded-full transition-all duration-300"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Search Suggestions (when expanded) */}
      {isExpanded && query === "" && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-gaming z-50 animate-fade-in">
          <div className="p-4">
            <h4 className="text-sm font-medium text-foreground mb-3">Búsquedas Populares</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Realism Craft",
                "Minecraft APK",
                "Texture Packs",
                "Shaders",
                "Maps PvP",
                "Mods Weapons"
              ].map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSearch(suggestion)}
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Results Count */}
      {query && (
        <div className="mt-2 text-sm text-muted-foreground text-center animate-fade-in">
          Buscando: <span className="text-primary font-medium">"{query}"</span>
        </div>
      )}
    </div>
  );
}