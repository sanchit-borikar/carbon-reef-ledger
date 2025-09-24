import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { 
  ShoppingCart, 
  Wallet, 
  TrendingUp, 
  MapPin, 
  Coins,
  Star,
  Filter,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface CarbonCredit {
  id: string;
  name: string;
  location: string;
  price: number;
  available: number;
  rating: number;
  projectType: 'mangrove' | 'seagrass' | 'saltmarsh';
  verified: boolean;
  nftEnabled: boolean;
}

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { toast } = useToast();

  const carbonCredits: CarbonCredit[] = [
    {
      id: "1",
      name: "Sundarbans Mangrove Restoration",
      location: "West Bengal, India",
      price: 45,
      available: 1250,
      rating: 4.8,
      projectType: "mangrove",
      verified: true,
      nftEnabled: true
    },
    {
      id: "2", 
      name: "Coastal Seagrass Conservation",
      location: "Tamil Nadu, India",
      price: 38,
      available: 800,
      rating: 4.6,
      projectType: "seagrass",
      verified: true,
      nftEnabled: false
    },
    {
      id: "3",
      name: "Salt Marsh Protection Initiative",
      location: "Gujarat, India",
      price: 42,
      available: 950,
      rating: 4.7,
      projectType: "saltmarsh",
      verified: true,
      nftEnabled: true
    },
    {
      id: "4",
      name: "Mangrove Afforestation Project",
      location: "Odisha, India",
      price: 40,
      available: 1100,
      rating: 4.5,
      projectType: "mangrove",
      verified: true,
      nftEnabled: false
    }
  ];

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'mangrove': return 'bg-ocean-blue text-white';
      case 'seagrass': return 'bg-teal-accent text-white';
      case 'saltmarsh': return 'bg-success-green text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleBuyCredits = (credit: CarbonCredit) => {
    toast({
      title: "Purchase Initiated",
      description: `Purchasing credits from ${credit.name}`,
    });
  };

  const handleMintNFT = (credit: CarbonCredit) => {
    toast({
      title: "NFT Minting",
      description: `Minting NFT for ${credit.name} credits`,
    });
  };

  const handleConnectWallet = () => {
    toast({
      title: "Connect Wallet",
      description: "Wallet connection feature coming soon!",
    });
  };

  const filteredCredits = carbonCredits.filter(credit => {
    const matchesSearch = credit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         credit.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || credit.projectType === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Carbon Credit Marketplace
                </h1>
                <p className="text-muted-foreground">
                  Buy and sell verified blue carbon credits
                </p>
              </div>
              <Button 
                onClick={handleConnectWallet}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Volume</p>
                    <p className="text-2xl font-bold text-foreground">$2.4M</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-success-green" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Price</p>
                    <p className="text-2xl font-bold text-foreground">$41</p>
                  </div>
                  <Coins className="w-8 h-8 text-carbon-gold" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Available</p>
                    <p className="text-2xl font-bold text-foreground">4,100</p>
                  </div>
                  <ShoppingCart className="w-8 h-8 text-ocean-blue" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                    <p className="text-2xl font-bold text-foreground">24</p>
                  </div>
                  <MapPin className="w-8 h-8 text-teal-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                onClick={() => setSelectedFilter("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={selectedFilter === "mangrove" ? "default" : "outline"}
                onClick={() => setSelectedFilter("mangrove")}
                size="sm"
              >
                Mangrove
              </Button>
              <Button
                variant={selectedFilter === "seagrass" ? "default" : "outline"}
                onClick={() => setSelectedFilter("seagrass")}
                size="sm"
              >
                Seagrass
              </Button>
              <Button
                variant={selectedFilter === "saltmarsh" ? "default" : "outline"}
                onClick={() => setSelectedFilter("saltmarsh")}
                size="sm"
              >
                Salt Marsh
              </Button>
            </div>
          </div>

          {/* Credits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCredits.map((credit) => (
              <Card key={credit.id} className="glass-card border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{credit.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {credit.location}
                      </div>
                    </div>
                    {credit.verified && (
                      <Badge variant="secondary" className="bg-success-green/20 text-success-green">
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className={getProjectTypeColor(credit.projectType)}>
                      {credit.projectType.charAt(0).toUpperCase() + credit.projectType.slice(1)}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-carbon-gold fill-current" />
                      <span className="text-sm font-medium">{credit.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price per credit</span>
                      <span className="font-bold text-foreground">${credit.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available</span>
                      <span className="font-medium text-foreground">{credit.available.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleBuyCredits(credit)}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Credits
                    </Button>
                    {credit.nftEnabled && (
                      <Button 
                        variant="outline"
                        onClick={() => handleMintNFT(credit)}
                        className="px-3"
                      >
                        NFT
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;