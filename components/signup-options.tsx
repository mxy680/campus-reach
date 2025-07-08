import { User, Building2, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";

function SignupOptions() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-background relative">
      <div className="absolute top-4 right-4 z-10">
        <ModeToggle />
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          <div className="mb-4 flex flex-col items-center">
            <Badge className="mb-2">Sign Up</Badge>
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold">
              How will you contribute?
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center mt-2">
              Select your role to get started with your account.
            </p>
          </div>
          <div className="grid pt-6 text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 justify-center animate-fadeIn">
            {/* Volunteer Card */}
            <Card className="w-full max-w-sm rounded-xl border bg-card shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.03] backdrop-blur-sm mx-auto">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-lg">
                    <User className="w-8 h-8 text-primary" /> Volunteer
                  </span>
                </CardTitle>
                <CardDescription>
                  Sign up to discover, track, and participate in volunteer opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ul className="flex flex-col gap-2 mb-4 pl-2">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> Track your hours</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> Access exclusive opportunities</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> Get certificates</li>
                </ul>
                <Link href="/auth/signup/volunteer">
                  <Button className="w-full group" variant="outline" asChild>
                    <span>
                      Sign up as Volunteer
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                    </span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
            {/* Organization Card */}
            <Card className="w-full max-w-sm rounded-xl border bg-card shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.03] backdrop-blur-sm mx-auto">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-lg">
                    <Building2 className="w-8 h-8 text-primary" /> Organization
                  </span>
                </CardTitle>
                <CardDescription>
                  Register your organization to post opportunities and manage volunteers.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ul className="flex flex-col gap-2 mb-4 pl-2">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> Post volunteer opportunities</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> Manage volunteers</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> View analytics</li>
                </ul>
                <Link href="/auth/signup/organization">
                  <Button className="w-full group" variant="default" asChild>
                    <span>
                      Sign up as Organization
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                    </span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
            {/* Career Service Card */}
            <Card className="w-full max-w-sm rounded-xl border bg-card shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.03] backdrop-blur-sm mx-auto">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-bold text-lg">
                    <Briefcase className="w-8 h-8 text-primary" /> Career Service
                  </span>
                </CardTitle>
                <CardDescription>
                  Join as a career service to connect students with opportunities and track engagement.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ul className="flex flex-col gap-2 mb-4 pl-2">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> Connect students</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> Track engagement</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500 w-4 h-4" /> Access reports</li>
                </ul>
                <Link href="/auth/signup/career-service">
                  <Button className="w-full group" variant="outline" asChild>
                    <span>
                      Sign up as Career Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                    </span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SignupOptions };
