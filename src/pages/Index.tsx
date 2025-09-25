import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Waves, 
  Shield, 
  TrendingUp, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Leaf,
  Database
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(194_95%_48%_/_0.1)_0%,transparent_50%)] opacity-20"></div>
        
        {/* Animated Ocean Background */}
        <div className="absolute inset-0 z-0">
          <div className="ocean-animation">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="floating-bubbles">
              <div className="bubble bubble1"></div>
              <div className="bubble bubble2"></div>
              <div className="bubble bubble3"></div>
              <div className="bubble bubble4"></div>
              <div className="bubble bubble5"></div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ocean-blue to-teal-accent flex items-center justify-center ocean-glow">
                <Waves className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-ocean-blue via-teal-accent to-primary bg-clip-text text-transparent">
              Blue Carbon Ledger
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Verifiable Truth for Carbon Credits
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Blockchain-powered MRV system for transparent, verifiable blue carbon credit management
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 ocean-glow">
                <Link to="/signup">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/login">
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Blue Carbon Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What is Blue Carbon?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Blue carbon refers to the carbon stored in coastal and marine ecosystems like mangroves, 
              salt marshes, and seagrass beds. These ecosystems are among the most carbon-rich on Earth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-blue to-teal-accent flex items-center justify-center mb-4">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Coastal Ecosystems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mangroves, salt marshes, and seagrass beds store massive amounts of carbon in their biomass and sediments.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success-green to-accent flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Carbon Sequestration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These ecosystems sequester carbon 10x faster than terrestrial forests, making them crucial for climate action.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-carbon-gold to-warning-amber flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Economic Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blue carbon credits represent verified carbon storage and sequestration, creating economic incentives for conservation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Required Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why is This Required?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Current carbon credit systems lack transparency and verifiability. Our blockchain-based solution ensures 
              trust and accuracy in blue carbon management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success-green mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparent Verification</h3>
                    <p className="text-muted-foreground">
                      Blockchain technology ensures immutable records of carbon credit transactions and project data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success-green mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Automated MRV</h3>
                    <p className="text-muted-foreground">
                      AI-powered monitoring, reporting, and verification reduces costs and improves accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success-green mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
                    <p className="text-muted-foreground">
                      Decentralized platform enables worldwide participation in blue carbon markets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-success-green mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">SATBARA Integration</h3>
                    <p className="text-muted-foreground">
                      Land certificate verification ensures legitimate project ownership and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ocean-blue to-teal-accent flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
                <p className="text-muted-foreground">Verified Projects</p>
              </Card>
              <Card className="glass-card text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success-green to-accent flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
                <p className="text-muted-foreground">Monitoring</p>
              </Card>
              <Card className="glass-card text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-carbon-gold to-warning-amber flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Global</h3>
                <p className="text-muted-foreground">Reach</p>
              </Card>
              <Card className="glass-card text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-ocean-blue flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Real-time</h3>
                <p className="text-muted-foreground">Analytics</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join the Blue Carbon Revolution
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey towards verified, transparent carbon credit management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 ocean-glow">
              <Link to="/signup">
                Create Account <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;