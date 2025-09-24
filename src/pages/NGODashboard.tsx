import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { 
  Heart, 
  TrendingUp, 
  Leaf, 
  FileText, 
  MapPin, 
  Plus,
  BarChart3,
  Waves
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const mockCreditData = [
  { month: "Jan", credits: 120 },
  { month: "Feb", credits: 200 },
  { month: "Mar", credits: 180 },
  { month: "Apr", credits: 250 },
  { month: "May", credits: 300 },
  { month: "Jun", credits: 280 }
];

const mockTrendData = [
  { month: "Jan", price: 45 },
  { month: "Feb", price: 52 },
  { month: "Mar", price: 48 },
  { month: "Apr", price: 55 },
  { month: "May", price: 62 },
  { month: "Jun", price: 58 }
];

const NGODashboard = () => {
  const { profile, signOut } = useAuth();
  const [projects] = useState([
    { id: 1, name: "Mangrove Restoration Project", location: "Sundarbans", credits: 450, status: "Active" },
    { id: 2, name: "Coastal Conservation", location: "Kerala", credits: 320, status: "Verified" },
    { id: 3, name: "Blue Carbon Initiative", location: "Goa", credits: 280, status: "Pending" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation userRole="ngo" onSignOut={signOut} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, {profile?.full_name || 'NGO Partner'}
              </h1>
              <p className="text-muted-foreground">
                {profile?.organization_name} • NGO Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Credits Generated</p>
                  <p className="text-2xl font-bold text-foreground">1,050</p>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Credits Sold</p>
                  <p className="text-2xl font-bold text-foreground">780</p>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +8% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-xs text-blue-500 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    Across 3 locations
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue (₹)</p>
                  <p className="text-2xl font-bold text-foreground">₹4,68,000</p>
                  <p className="text-xs text-teal-500 flex items-center mt-1">
                    <Waves className="w-3 h-3 mr-1" />
                    From blue carbon
                  </p>
                </div>
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Credits Generated</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockCreditData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="credits" fill="hsl(var(--primary))" className="opacity-80" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Market Price Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockTrendData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <Card className="glass-card border-border/50 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground">Your Projects</CardTitle>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/projects/submit">
                  <Plus className="w-4 h-4 mr-2" />
                  Submit New Project
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Waves className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {project.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{project.credits} Credits</p>
                      <Badge 
                        variant={project.status === 'Active' ? 'default' : 
                                project.status === 'Verified' ? 'secondary' : 'outline'}
                        className="mt-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card border-border/50 hover:bg-accent/20 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Plus className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Submit Project</h3>
              <p className="text-sm text-muted-foreground">Upload MRV reports and project details</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50 hover:bg-accent/20 transition-colors cursor-pointer" 
                onClick={() => window.location.href = '/marketplace'}>
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Sell Credits</h3>
              <p className="text-sm text-muted-foreground">List your verified credits for sale</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50 hover:bg-accent/20 transition-colors cursor-pointer"
                onClick={() => window.location.href = '/transactions'}>
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">View Reports</h3>
              <p className="text-sm text-muted-foreground">Check transaction history and analytics</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default NGODashboard;