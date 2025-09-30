import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/ui/navigation";
import { Upload, FileText, CheckCircle, MapPin, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ProjectSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    coordinates: ""
  });
  const [mrvFile, setMrvFile] = useState<File | null>(null);
  const [satbaraFile, setSatbaraFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiValidation, setAiValidation] = useState<string | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleFileUpload = (file: File | null, type: 'mrv' | 'satbara') => {
    if (type === 'mrv') {
      setMrvFile(file);
    } else {
      setSatbaraFile(file);
    }
  };

  const simulateAIValidation = () => {
    const validationMessages = [
      "✅ Project location verified within coastal blue carbon zone",
      "✅ SATBARA certificate authentic and valid",
      "✅ MRV data shows consistent carbon sequestration rates",
      "⚠️ Recommend additional biodiversity monitoring sensors",
      "✅ Project meets international blue carbon standards"
    ];
    
    return validationMessages.join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate AI validation
    await new Promise(resolve => setTimeout(resolve, 2000));
    const validation = simulateAIValidation();
    setAiValidation(validation);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Project Submitted Successfully",
      description: "Your blue carbon project has been submitted for verification.",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Submit New Project
            </h1>
            <p className="text-muted-foreground">
              Register your blue carbon project for verification and credit generation
            </p>
          </div>

          {/* Project Form */}
          <Card className="glass-card border-border/50 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-ocean-blue" />
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Project Name</Label>
                    <Input
                      id="name"
                      placeholder="Mangrove Restoration Initiative"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="Sundarbans, West Bengal, India"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coordinates">GPS Coordinates</Label>
                  <Input
                    id="coordinates"
                    placeholder="21.9497° N, 88.2639° E"
                    value={formData.coordinates}
                    onChange={handleInputChange}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your blue carbon project, including objectives, methodology, and expected outcomes..."
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 min-h-[120px]"
                  />
                </div>
              </form>
            </CardContent>
          </Card>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* MRV Upload */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal-accent" />
                  MRV Report Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Upload your Monitoring, Reporting & Verification documents
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload(e.target.files?.[0] || null, 'mrv')}
                    className="hidden"
                    id="mrv-upload"
                  />
                  <label htmlFor="mrv-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Choose File
                    </Button>
                  </label>
                  {mrvFile && (
                    <p className="text-sm text-success-green mt-2">
                      ✅ {mrvFile.name} uploaded
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* SATBARA Upload */}
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success-green" />
                  SATBARA Certificate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Upload your land ownership certificate
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(e.target.files?.[0] || null, 'satbara')}
                    className="hidden"
                    id="satbara-upload"
                  />
                  <label htmlFor="satbara-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Choose File
                    </Button>
                  </label>
                  {satbaraFile && (
                    <p className="text-sm text-success-green mt-2">
                      ✅ {satbaraFile.name} uploaded
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Validation Results */}
          {aiValidation && (
            <Card className="glass-card border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-carbon-gold" />
                  AI Validation Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <pre className="whitespace-pre-wrap text-sm">{aiValidation}</pre>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.name || !formData.location || !formData.description}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            >
              {isSubmitting ? (
                <>
                  <Bot className="w-4 h-4 mr-2 animate-spin" />
                  AI Validating...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Submit Project
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubmission;