
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Award, Trophy, Briefcase } from "lucide-react";
import { useState } from "react";

const Community = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
    reason: "",
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
      description: "Join specialized groups aligned with your interests and career goals",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-soshoct-yellow" />,
      title: "Mentor support",
      description: "Get guidance from industry professionals and experienced peers",
    },
    {
      icon: <Trophy className="h-10 w-10 text-soshoct-yellow" />,
      title: "Weekly challenges",
      description: "Sharpen your skills with regular practical exercises and competitions",
    },
    {
      icon: <Award className="h-10 w-10 text-soshoct-yellow" />,
      title: "Project certificates",
      description: "Earn credentials for completed projects and challenges",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-soshoct-yellow" />,
      title: "Internship opportunities",
      description: "Access exclusive internship postings from our partner companies",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Join Our Community</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Connect with students and professionals who are serious about career growth
            </p>
            <Button 
              asChild
              size="lg"
              className="animate-bounce-subtle bg-soshoct-yellow text-black hover:bg-soshoct-yellow/90"
            >
              <a href="#apply">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Community Access Is Earned – Not Given.</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-12 text-lg text-muted-foreground">
              Soshoct is a community built for serious learners and doers. Access is selective — 
              based on an assessment that gauges your mindset, intent, and collaboration skills. 
              We aim to create a high-value network where motivated individuals can grow together.
            </p>
          </div>

          {/* Community Perks */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
            <h2 className="mb-4 text-3xl font-bold">Apply to Join</h2>
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
                    <Label htmlFor="reason">
                      Why do you want to join the Soshoct community?
                    </Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      placeholder="Tell us about your career goals and how you think the community can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-soshoct-yellow text-black hover:bg-soshoct-yellow/90"
                    size="lg"
                  >
                    Submit Application
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
            <h2 className="mb-4 text-3xl font-bold">What Our Community Members Say</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl text-soshoct-yellow">"</div>
                <p className="mb-6 text-muted-foreground">
                  Joining the Soshoct community changed my perspective on career planning. The mentorship 
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
                  The weekly challenges pushed me to develop skills I wouldn't have learned in my regular 
                  college curriculum. Now I'm much more confident in my technical abilities.
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
                  Being from a small town, I had limited exposure to career options. Soshoct's webinars 
                  and community discussions opened my eyes to possibilities I never knew existed.
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
