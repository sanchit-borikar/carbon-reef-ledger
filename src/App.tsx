import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NGODashboard from "./pages/NGODashboard";
import MNCDashboard from "./pages/MNCDashboard";
import ProjectSubmission from "./pages/ProjectSubmission";
import Marketplace from "./pages/Marketplace";
import TransactionHistory from "./pages/TransactionHistory";
import Profile from "./pages/Profile";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ngo-dashboard" element={<NGODashboard />} />
            <Route path="/mnc-dashboard" element={<MNCDashboard />} />
            <Route path="/projects/submit" element={<ProjectSubmission />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/transactions" element={<TransactionHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
