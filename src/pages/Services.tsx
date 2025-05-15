
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
  const freeServices = [
    {
      title: "Community Access",
      description: "Join our exclusive community of learners and professionals.",
      features: [
        "Network with like-minded students",
        "Participate in community discussions",
        "Access to community resources",
      ],
      price: "Free for first 500 students",
      cta: "Apply Now",
      link: "/community",
      highlight: true,
    },
    {
      title: "1-on-1 Consultation",
      description: "Get personalized career advice from our experts.",
      features: [
        "30-minute video call",
        "Career path guidance",
        "Personalized recommendations",
      ],
      price: "First call free",
      cta: "Book a Call",
      link: "/contact",
    },
    {
      title: "Career Awareness Webinars",
      description: "Learn about unconventional career paths and new opportunities.",
      features: [
        "Live interactive sessions",
        "Q&A with industry professionals",
        "Access to webinar recordings",
      ],
      price: "Free",
      cta: "Register",
      link: "/community",
    },
  ];

  const premiumServices = [
    {
      title: "Resume + LinkedIn Setup",
      description: "Get professional help with your resume and LinkedIn profile.",
      features: [
        "Professional resume review",
        "LinkedIn profile optimization",
        "Personalized recommendations",
      ],
      price: "₹199",
      cta: "Get Started",
      link: "/contact",
    },
    {
      title: "Internship Hunt Support",
      description: "Get guidance and support for finding and securing internships.",
      features: [
        "Internship opportunity alerts",
        "Application review",
        "Interview preparation",
      ],
      price: "₹299",
      cta: "Learn More",
      link: "/contact",
      highlight: true,
    },
    {
      title: "Super 5/10 Online Study Room",
      description: "Join focused virtual study groups with accountability.",
      features: [
        "Structured study sessions",
        "Progress tracking",
        "Peer accountability",
      ],
      price: "₹299/month",
      cta: "Join Now",
      link: "/community",
    },
    {
      title: "Guided Study Plan",
      description: "Get a customized study plan for competitive exams.",
      features: [
        "Personalized study schedule",
        "Regular progress reviews",
        "Resource recommendations",
      ],
      price: "₹499/month",
      cta: "Get Your Plan",
      link: "/contact",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive career development services designed for students from tier 2, 3, and 4 cities
            </p>
          </div>
        </div>
      </section>

      {/* Free Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Free Services</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Start your career journey with our accessible free services designed to give you clarity and direction.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {freeServices.map((service, index) => (
              <Card key={index} className={`card-shadow-hover overflow-hidden ${service.highlight ? 'border-soshoct-yellow' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>{service.title}</CardTitle>
                    {service.highlight && <Badge className="bg-soshoct-yellow text-black">Popular</Badge>}
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-2xl font-bold">{service.price}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 shrink-0 text-soshoct-yellow" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to={service.link}>{service.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="bg-gradient-to-b from-muted to-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Premium Services</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Accelerate your career growth with our premium services designed for ambitious students.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {premiumServices.map((service, index) => (
              <Card key={index} className={`card-shadow-hover overflow-hidden ${service.highlight ? 'border-soshoct-yellow' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>{service.title}</CardTitle>
                    {service.highlight && <Badge className="bg-soshoct-yellow text-black">Popular</Badge>}
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-2xl font-bold">{service.price}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 shrink-0 text-soshoct-yellow" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className={service.highlight ? "w-full bg-soshoct-yellow text-black hover:bg-soshoct-yellow/90" : "w-full"}
                  >
                    <Link to={service.link}>{service.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plans Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Need a Custom Plan?</h2>
              <p className="mb-6 text-muted-foreground">
                We understand that every student's needs are unique. If our standard services don't 
                fully address your requirements, we can create a custom plan tailored just for you.
              </p>
              <Button asChild className="bg-soshoct-yellow text-black hover:bg-soshoct-yellow/90">
                <Link to="/contact">Contact Us for Custom Solutions</Link>
              </Button>
            </div>
            <div className="rounded-lg bg-muted p-8">
              <h3 className="mb-4 text-xl font-semibold">Custom Plans Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-soshoct-yellow" />
                  <span>Personalized mentorship programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-soshoct-yellow" />
                  <span>Specialized skill development courses</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-soshoct-yellow" />
                  <span>Industry-specific preparation</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-soshoct-yellow" />
                  <span>Group coaching for specific goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
