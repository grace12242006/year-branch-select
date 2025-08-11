import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, User, LogOut } from "lucide-react";

interface StudentDashboardProps {
  studentData: {
    email: string;
    year: string;
    branch: string;
  };
  onLogout: () => void;
}

const StudentDashboard = ({ studentData, onLogout }: StudentDashboardProps) => {
  const getBranchFullName = (branch: string) => {
    const branchMap: Record<string, string> = {
      cse: "Computer Science Engineering",
      ece: "Electronics & Communication Engineering",
      eee: "Electrical & Electronics Engineering",
      mech: "Mechanical Engineering",
      civil: "Civil Engineering",
    };
    return branchMap[branch] || branch.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Portal</h1>
            <p className="text-muted-foreground">Welcome to your examination gateway</p>
          </div>
          <Button onClick={onLogout} variant="outline" className="border-primary/30 hover:bg-primary/10">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Student Info Card */}
        <Card className="mb-8 bg-gradient-card backdrop-blur-sm border-primary/20 shadow-academic">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <User className="h-5 w-5 text-primary" />
              Student Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{studentData.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Examination Year</p>
                <Badge variant="secondary" className="bg-primary/20 text-primary-foreground">
                  {studentData.year}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Branch</p>
                <p className="font-medium text-foreground">{getBranchFullName(studentData.branch)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                Examination Schedule
              </CardTitle>
              <CardDescription>
                View your upcoming examinations and schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-academic hover:bg-primary-glow">
                View Schedule
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                Hall Tickets
              </CardTitle>
              <CardDescription>
                Download your examination hall tickets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-academic hover:bg-primary-glow">
                Download Tickets
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 hover:shadow-glow transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <User className="h-5 w-5 text-primary" />
                Results
              </CardTitle>
              <CardDescription>
                Check your examination results and grades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-academic hover:bg-primary-glow">
                View Results
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Card className="mt-8 bg-gradient-card backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Important Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Please ensure that you download your hall tickets at least 3 days before the examination date. 
              For any technical issues, contact the examination cell at exam@university.edu
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;