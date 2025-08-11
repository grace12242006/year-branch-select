import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Calendar, Building } from "lucide-react";

interface StudentLoginFormProps {
  onLogin: (data: {
    email: string;
    year: string;
    branch: string;
  }) => void;
}

const StudentLoginForm = ({ onLogin }: StudentLoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !year || !branch) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin({ email, year, branch });
      toast({
        title: "Login Successful",
        description: `Welcome! Redirecting to ${year} ${branch} portal...`,
      });
      setIsLoading(false);
    }, 1500);
  };

  const years = [
    { value: "2027", label: "2027" },
    { value: "2028", label: "2028" },
    { value: "2029", label: "2029" },
  ];

  const branches = [
    { value: "cse", label: "Computer Science Engineering (CSE)" },
    { value: "ece", label: "Electronics & Communication Engineering (ECE)" },
    { value: "eee", label: "Electrical & Electronics Engineering (EEE)" },
    { value: "mech", label: "Mechanical Engineering (MECH)" },
    { value: "civil", label: "Civil Engineering (CIVIL)" },
  ];

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-card backdrop-blur-sm border-primary/20 shadow-academic">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-academic rounded-full shadow-glow">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">Student Portal</CardTitle>
        <CardDescription className="text-muted-foreground">
          Access your examination gateway
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="student@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-input/50 border-primary/30 focus:border-primary text-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-input/50 border-primary/30 focus:border-primary text-foreground"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <Label className="text-foreground font-medium">Examination Year</Label>
              </div>
              <RadioGroup value={year} onValueChange={setYear} className="grid grid-cols-3 gap-2">
                {years.map((yearOption) => (
                  <div key={yearOption.value} className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={yearOption.value} 
                      id={`year-${yearOption.value}`}
                      className="border-primary text-primary focus:ring-primary"
                    />
                    <Label 
                      htmlFor={`year-${yearOption.value}`} 
                      className="text-sm text-foreground cursor-pointer"
                    >
                      {yearOption.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                <Label className="text-foreground font-medium">Branch of Study</Label>
              </div>
              <RadioGroup value={branch} onValueChange={setBranch} className="space-y-2">
                {branches.map((branchOption) => (
                  <div key={branchOption.value} className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={branchOption.value} 
                      id={`branch-${branchOption.value}`}
                      className="border-primary text-primary focus:ring-primary"
                    />
                    <Label 
                      htmlFor={`branch-${branchOption.value}`} 
                      className="text-sm text-foreground cursor-pointer leading-relaxed"
                    >
                      {branchOption.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-academic hover:bg-primary-glow shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "Access Portal"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentLoginForm;