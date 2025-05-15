
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Award, Trophy, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

const Community = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
    reason: "",
    careerGoals: "", // Added field for career goals
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, like sending the data to a server
    console.log("Form submitted:", formState);
    alert("Application submitted successfully! We'll get back to you soon.");
  };

  const communityPerks = [
    {
      icon: <Users className="h-10 w-10 text-soshoct-yellow" />,
      title: "Skill-based micro-communities",
      description: "Join specialized groups aligned with your interests and career development goals",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-soshoct-yellow" />,
      title: "Career mentorship support",
      description: "Get personalized guidance from industry professionals and experienced peers",
    },
    {
      icon: <Trophy className="h-10 w-10 text-soshoct-yellow" />,
      title: "Weekly skill development challenges",
      description: "Sharpen your skills with regular practical exercises and competitions",
    },
    {
      icon: <Award className="h-10 w-10 text-soshoct-yellow" />,
      title: "Project certificates",
      description: "Earn credentials for completed projects and career roadmap milestones",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-soshoct-yellow" />,
      title: "Internship opportunities",
      description: "Access exclusive internship postings from our partner companies",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-soshoct-yellow" />,
      title: "Job readiness training",
      description: "Prepare for the workplace with practical skills and interview coaching",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Career Guidance & Community</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Connect with students and professionals for personalized career development and growth
            </p>
            <Button 
              asChild
              size="lg"
              className="animate-bounce-subtle bg-soshoct-yellow text-black hover:bg-soshoct-yellow/90"
            >
              <a href="#apply">Apply for Career Mentorship</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Student Career Development Community</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-12 text-lg text-muted-foreground">
              Soshoct provides affordable career counseling for students from tier 2, 3, and 4 cities across India. 
              Our community is built for serious learners seeking personalized career guidance and skill development. 
              Access is selective — based on an assessment that gauges your mindset, intent, and collaboration skills.
            </p>
          </div>

          {/* Community Perks */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {communityPerks.map((perk, index) => (
              <Card key={index} className="card-shadow-hover">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4">{perk.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Career Guidance Assessment</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="college">College/University</Label>
                      <Input
                        id="college"
                        name="college"
                        value={formState.college}
                        onChange={handleChange}
                        placeholder="Enter your college name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="year">Year of Study</Label>
                      <Input
                        id="year"
                        name="year"
                        value={formState.year}
                        onChange={handleChange}
                        placeholder="e.g., 1st Year, 2nd Year"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="careerGoals">
                      What are your current career goals?
                    </Label>
                    <Textarea
                      id="careerGoals"
                      name="careerGoals"
                      value={formState.careerGoals}
                      onChange={handleChange}
                      placeholder="Describe your career aspirations and what specific guidance you're seeking..."
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">
                      How do you think our mentorship programs and career guidance can help you?
                    </Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      placeholder="Tell us about your expectations from our student career roadmap and support services..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-soshoct-yellow text-black hover:bg-soshoct-yellow/90"
                    size="lg"
                  >
                    Submit Career Guidance Application
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By submitting, you agree to our{" "}
                    <Link to="#" className="text-soshoct-yellow underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-soshoct-yellow underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Career Success Stories</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl text-soshoct-yellow">"</div>
                <p className="mb-6 text-muted-foreground">
                  Joining Soshoct's career guidance program changed my perspective on career planning. The mentorship 
                  and resources helped me land my first internship at a startup.
                </p>
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">Computer Science Student, Jaipur</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl text-soshoct-yellow">"</div>
                <p className="mb-6 text-muted-foreground">
                  The skill development challenges pushed me to develop abilities I wouldn't have learned in my regular 
                  college curriculum. Now I'm much more confident in my technical skills.
                </p>
                <div>
                  <p className="font-semibold">Rahul Patel</p>
                  <p className="text-sm text-muted-foreground">Engineering Student, Nagpur</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl text-soshoct-yellow">"</div>
                <p className="mb-6 text-muted-foreground">
                  Being from a tier 3 city, I had limited exposure to career options. Soshoct's career awareness webinars 
                  and personalized counseling opened my eyes to possibilities I never knew existed.
                </p>
                <div>
                  <p className="font-semibold">Amit Kumar</p>
                  <p className="text-sm text-muted-foreground">Economics Student, Patna</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
