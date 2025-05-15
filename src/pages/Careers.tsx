
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const Careers = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    position: "",
    portfolio: "",
    cover: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formState);
    alert("Your application has been submitted! We'll review and get back to you soon.");
  };

  const openPositions = [
    {
      title: "Content Creator",
      type: "Part-time",
      description: "Create engaging career guidance content for our social media channels and blog.",
      responsibilities: [
        "Develop content ideas related to career development",
        "Create written, visual, and video content",
        "Collaborate with the marketing team on content strategy",
      ],
      requirements: [
        "Excellent communication skills",
        "Experience with content creation",
        "Understanding of social media platforms",
      ],
    },
    {
      title: "Career Mentor",
      type: "Freelance",
      description: "Guide students through personalized career counseling sessions and workshops.",
      responsibilities: [
        "Conduct one-on-one career guidance sessions",
        "Develop workshop materials and resources",
        "Provide feedback on resumes and portfolios",
      ],
      requirements: [
        "3+ years of industry experience",
        "Strong mentoring and communication skills",
        "Passion for helping students grow",
      ],
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      description: "Help build and maintain our web platform and digital learning tools.",
      responsibilities: [
        "Develop responsive web interfaces",
        "Collaborate with designers and backend developers",
        "Optimize applications for maximum speed and scalability",
      ],
      requirements: [
        "Experience with React and modern JavaScript",
        "Knowledge of frontend best practices",
        "Passion for creating user-friendly experiences",
      ],
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We're constantly seeking better ways to serve our students",
    },
    {
      title: "Impact",
      description: "Making a meaningful difference in students' lives drives us",
    },
    {
      title: "Inclusivity",
      description: "We believe talent is distributed equally, but opportunity is not",
    },
    {
      title: "Growth",
      description: "We support continuous learning and development",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Join Our Mission</h1>
            <p className="text-xl text-muted-foreground">
              Help us empower students from tier 2, 3, and 4 cities to achieve their career dreams
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Why Work With Us?</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                We're building India's boldest student career platform. If you're passionate about 
                building meaningful things, we want you on our team.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                At Soshoct, you'll be part of a mission to democratize career opportunities and help 
                students from underserved communities achieve their professional dreams.
              </p>
              <div className="mb-6">
                <p className="font-semibold">Mail us at:</p>
                <a 
                  href="mailto:pranamocto.soshoct@gmail.com" 
                  className="text-soshoct-yellow underline hover:text-soshoct-yellow/80"
                >
                  pranamocto.soshoct@gmail.com
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <Card key={index} className="card-shadow-hover">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-soshoct-yellow/20">
                      <CheckCircle className="h-6 w-6 text-soshoct-yellow" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Open Positions</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {openPositions.map((position, index) => (
              <Card key={index} className="card-shadow-hover">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <span className="rounded-full bg-soshoct-yellow/20 px-3 py-1 text-xs font-medium">
                      {position.type}
                    </span>
                  </div>
                  <p className="mb-4 text-muted-foreground">{position.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold">Responsibilities:</h4>
                    <ul className="space-y-1">
                      {position.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="mb-2 text-sm font-semibold">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full">
                    <a href="#application-form">Apply Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Apply Now</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Don't see a position that matches your skills? We're always looking for talented individuals.
              Send us your application and tell us how you can contribute to our mission.
            </p>
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

                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formState.position}
                      onChange={handleChange}
                      placeholder="Which position are you applying for?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio/LinkedIn URL (Optional)</Label>
                    <Input
                      id="portfolio"
                      name="portfolio"
                      value={formState.portfolio}
                      onChange={handleChange}
                      placeholder="Share a link to your work or profile"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cover">Why do you want to work with Soshoct?</Label>
                    <Textarea
                      id="cover"
                      name="cover"
                      value={formState.cover}
                      onChange={handleChange}
                      placeholder="Tell us about your passion for our mission and how you can contribute..."
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
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
