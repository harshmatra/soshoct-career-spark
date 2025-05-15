
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelineSteps = [
  {
    title: "Register",
    description: "Create your account and fill in your details",
  },
  {
    title: "Book a Call",
    description: "Schedule your career consultation call",
  },
  {
    title: "Access Resources",
    description: "Get access to our learning resources and materials",
  },
  {
    title: "Work on Live Projects",
    description: "Apply your skills on real-world industry projects",
  },
  {
    title: "Get Certified",
    description: "Earn certificates to showcase your accomplishments",
  },
  {
    title: "Apply for Internships",
    description: "Use our network to find internship opportunities",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Soshoct</h1>
            <p className="text-xl text-muted-foreground">
              Helping students from India's smaller cities achieve their career dreams
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-8 text-lg">
              Soshoct is a student-first platform helping learners from small towns gain clarity, skills,
              and confidence through personalized mentorship, live projects, and guided learning. We blend
              human guidance, AI tools, and real-world experience into one powerful ecosystem.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="card-shadow-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-soshoct-yellow/20 p-3">
                    <CheckCircle className="h-6 w-6 text-soshoct-yellow" />
                  </div>
                  <h3 className="mb-2 font-semibold">Mentorship</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Personalized guidance from industry professionals
                  </p>
                </CardContent>
              </Card>

              <Card className="card-shadow-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-soshoct-yellow/20 p-3">
                    <CheckCircle className="h-6 w-6 text-soshoct-yellow" />
                  </div>
                  <h3 className="mb-2 font-semibold">Practical Skills</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Learn by doing through real-world projects
                  </p>
                </CardContent>
              </Card>

              <Card className="card-shadow-hover">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="mb-4 rounded-full bg-soshoct-yellow/20 p-3">
                    <CheckCircle className="h-6 w-6 text-soshoct-yellow" />
                  </div>
                  <h3 className="mb-2 font-semibold">Community</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Connect with like-minded peers and build networks
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Your Journey With Us</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative mx-auto max-w-6xl">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-soshoct-yellow/50"></div>

              {/* Timeline Steps */}
              <div className="grid grid-cols-6 gap-4">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-soshoct-yellow text-black">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className={`pt-8 text-center ${index % 2 === 0 ? 'mt-4' : 'mt-0'}`}>
                      <h3 className="mb-2 font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative mx-auto max-w-md">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-soshoct-yellow/50"></div>

              {/* Timeline Steps */}
              <div className="space-y-8">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-soshoct-yellow text-black">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="mb-2 font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Values</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Accessibility</h3>
                <p className="text-muted-foreground">
                  Making quality career guidance accessible to students from all backgrounds
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Inclusivity</h3>
                <p className="text-muted-foreground">
                  Creating opportunities for students regardless of their geographic location
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Quality</h3>
                <p className="text-muted-foreground">
                  Maintaining high standards in all our programs and resources
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously improving our methods to meet evolving career demands
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Community</h3>
                <p className="text-muted-foreground">
                  Fostering a supportive network of like-minded learners and mentors
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow-hover">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Impact</h3>
                <p className="text-muted-foreground">
                  Measuring our success by the positive change we create in students' lives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
