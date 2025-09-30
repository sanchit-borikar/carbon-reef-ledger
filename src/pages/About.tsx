import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import { 
  Waves, 
  BookOpen, 
  ExternalLink,
  Users,
  Award,
  Globe,
  Leaf,
  Shield
} from "lucide-react";

const About = () => {
  const researchPapers = [
    {
      title: "Blue Carbon Ecosystems: A Global Perspective",
      authors: "Smith, J. et al.",
      journal: "Nature Climate Change",
      year: "2024",
      url: "#"
    },
    {
      title: "Blockchain Technology for Carbon Credit Verification",
      authors: "Kumar, R. & Patel, S.",
      journal: "Environmental Technology & Innovation",
      year: "2024",
      url: "#"
    },
    {
      title: "Mangrove Conservation and Economic Incentives",
      authors: "Chen, L. et al.",
      journal: "Marine Policy",
      year: "2023",
      url: "#"
    },
    {
      title: "AI in Environmental Monitoring: MRV Applications",
      authors: "Johnson, M. & Williams, A.",
      journal: "Remote Sensing of Environment",
      year: "2023",
      url: "#"
    }
  ];

  const teamMembers = [
    {
      name: "Team Syntax",
      role: "Development Team",
      institution: "Smart India Hackathon 2025",
      id: "Team ID: 738"
    },
    {
      name: "Problem Statement",
      role: "SIH25038",
      institution: "Blue Carbon Registry & MRV System",
      id: "Blockchain Solution"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Blockchain Verification",
      description: "Immutable records ensure transparency and trust in carbon credit transactions."
    },
    {
      icon: Leaf,
      title: "Blue Carbon Focus",
      description: "Specialized in coastal ecosystems with 10x higher carbon sequestration rates."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting projects worldwide to create a unified blue carbon marketplace."
    },
    {
      icon: Award,
      title: "AI-Powered MRV",
      description: "Automated monitoring, reporting, and verification using advanced AI algorithms."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-ocean-blue to-teal-accent flex items-center justify-center mx-auto mb-6 ocean-glow">
              <Waves className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Blue Carbon Ledger
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A revolutionary blockchain-based platform for transparent, verifiable blue carbon 
              credit management and environmental impact tracking.
            </p>
          </div>

          {/* What is Blue Carbon - Detailed */}
          <section className="mb-16">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Waves className="w-6 h-6 text-ocean-blue" />
                  Understanding Blue Carbon
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Blue carbon refers to the organic carbon captured and stored by coastal and marine ecosystems, 
                  particularly vegetated coastal ecosystems including mangroves, tidal marshes, and seagrass meadows. 
                  These ecosystems are among the most carbon-rich ecosystems on Earth, storing carbon at rates 
                  up to 10 times higher than terrestrial forests.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold text-foreground mb-2">Mangroves</h3>
                    <p className="text-sm text-muted-foreground">
                      Tropical coastal forests that store massive amounts of carbon in their biomass and deep sediments.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold text-foreground mb-2">Seagrass Beds</h3>
                    <p className="text-sm text-muted-foreground">
                      Underwater flowering plants that create extensive carbon storage systems in marine sediments.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold text-foreground mb-2">Salt Marshes</h3>
                    <p className="text-sm text-muted-foreground">
                      Coastal wetlands that efficiently capture and store carbon in waterlogged soils.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Despite covering less than 2% of the ocean surface, blue carbon ecosystems store 50% of 
                  all carbon buried in marine sediments. However, these ecosystems are disappearing at rates 
                  2-7 times faster than tropical rainforests, making their protection and restoration critical 
                  for climate change mitigation.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Key Features & Innovation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="glass-card border-border/50">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-blue to-teal-accent flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Development Team
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="glass-card border-border/50">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ocean-blue to-teal-accent flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <p className="text-center text-muted-foreground">{member.role}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">{member.institution}</p>
                    <p className="text-xs text-carbon-gold">{member.id}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Research Papers */}
          <section className="mb-16">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-carbon-gold" />
                  Research & Publications
                </CardTitle>
                <p className="text-muted-foreground">
                  Scientific foundation and research backing our blue carbon initiatives
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {researchPapers.map((paper, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{paper.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            <strong>Authors:</strong> {paper.authors}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Published:</strong> {paper.journal}, {paper.year}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={paper.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button variant="outline" className="w-full md:w-auto">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View All Research
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="glass-card border-border/50 bg-gradient-to-br from-card to-ocean-blue/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Join the Blue Carbon Revolution
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Be part of the solution to climate change by supporting verified blue carbon projects 
                  that protect and restore critical coastal ecosystems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started Today
                  </Button>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;