import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import { 
  TrendingUp, 
  Coins, 
  Upload, 
  MapPin, 
  Leaf,
  Activity,
  BarChart3,
  PieChart
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell, Pie } from "recharts";

const Dashboard = () => {
  // Mock data for charts
  const carbonTrendsData = [
    { month: 'Jan', credits: 1200 },
    { month: 'Feb', credits: 1500 },
    { month: 'Mar', credits: 1800 },
    { month: 'Apr', credits: 2200 },
    { month: 'May', credits: 2800 },
    { month: 'Jun', credits: 3200 },
  ];

  const projectData = [
    { name: 'Mangrove Restoration', value: 45, color: 'hsl(var(--ocean-blue))' },
    { name: 'Seagrass Conservation', value: 30, color: 'hsl(var(--teal-accent))' },
    { name: 'Salt Marsh Protection', value: 25, color: 'hsl(var(--success-green))' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Welcome back, John
            </h1>
            <p className="text-muted-foreground">
              Here's your blue carbon portfolio overview
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                <Coins className="h-4 w-4 text-carbon-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">3,245</div>
                <p className="text-xs text-success-green">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <MapPin className="h-4 w-4 text-ocean-blue" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">12</div>
                <p className="text-xs text-success-green">+2 new this month</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Biodiversity Index</CardTitle>
                <Leaf className="h-4 w-4 text-success-green" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">8.7</div>
                <p className="text-xs text-success-green">+0.3 from last week</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mangrove Count</CardTitle>
                <Activity className="h-4 w-4 text-teal-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">15,432</div>
                <p className="text-xs text-success-green">+1,234 planted</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Carbon Market Trends */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-ocean-blue" />
                    Carbon Market Trends
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={carbonTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="credits" 
                      stroke="hsl(var(--ocean-blue))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--ocean-blue))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Project Distribution */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-teal-accent" />
                  Project Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <RechartsPieChart>
                    <Pie
                      data={projectData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {projectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-1 gap-2 mt-4">
                  {projectData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="text-foreground font-medium ml-auto">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocean-blue to-teal-accent flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Upload MRV Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Submit your latest monitoring, reporting, and verification data.
                </p>
                <Button variant="outline" className="w-full">
                  Upload Report
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success-green to-accent flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle>View Satellite Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Monitor your projects with real-time satellite imagery.
                </p>
                <Button variant="outline" className="w-full">
                  Open Map
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-carbon-gold to-warning-amber flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Deep dive into your project performance and insights.
                </p>
                <Button variant="outline" className="w-full">
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;