import { useState } from "react";
import StudentLoginForm from "@/components/StudentLoginForm";
import StudentDashboard from "@/components/StudentDashboard";
import heroImage from "@/assets/hero-gateway.jpg";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentData, setStudentData] = useState<{
    email: string;
    year: string;
    branch: string;
  } | null>(null);

  const handleLogin = (data: { email: string; year: string; branch: string }) => {
    setStudentData(data);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStudentData(null);
  };

  if (isLoggedIn && studentData) {
    return <StudentDashboard studentData={studentData} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-academic bg-clip-text text-transparent">
              Student Gateway
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your secure portal for examination services, hall tickets, and academic information. 
              Access your personalized dashboard with branch-specific resources.
            </p>
          </div>
          
          <div className="flex justify-center">
            <StudentLoginForm onLogin={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
