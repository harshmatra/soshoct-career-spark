
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Home = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about-home");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col space-y-6 text-center lg:text-left">
              <h1 className="animate-fade-in text-balance text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Your Career. <br />
                <span className="bg-gradient-to-r from-soshoct-yellow to-soshoct-yellow/70 bg-clip-text text-transparent">
                  Our Mission.
                </span>
              </h1>
              <p className="animate-fade-in text-balance text-lg text-muted-foreground delay-100 md:text-xl">
                Get career clarity, build real-world skills, and join a community that helps you grow.
              </p>
              <div className="flex flex-col justify-center gap-4 min-[400px]:flex-row lg:justify-start">
                <Button
                  asChild
                  className="animate-fade-in bg-soshoct-yellow text-black delay-200 hover:bg-soshoct-yellow/90"
                  size="lg"
                >
                  <Link to="/community">Join 1000s of learners. It's FREE!</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-full bg-soshoct-yellow/10 backdrop-blur-sm">
                <div className="absolute inset-0 animate-bounce-subtle">
                  <div className="h-full w-full rounded-full bg-soshoct-yellow/40"></div>
                </div>
                <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-soshoct-yellow"></div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="ghost" size="icon" onClick={scrollToNextSection} className="animate-bounce-subtle">
              <ArrowDown />
              <span className="sr-only">Scroll down</span>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about-home" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Soshoct</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-8 text-balance text-lg">
              Soshoct is a student-first platform helping learners from small towns gain clarity, skills, 
              and confidence through personalized mentorship, live projects, and guided learning. We blend 
              human guidance, AI tools, and real-world experience into one powerful ecosystem.
            </p>
            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
            <p className="mx-auto mb-8 max-w-3xl text-balance text-muted-foreground">
              From free community access to premium career support, we offer services
              tailored to the needs of students from tier 2, 3, and 4 cities across India.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Free Services */}
            <div className="rounded-lg bg-background p-6 shadow transition hover:shadow-md">
              <h3 className="mb-4 text-xl font-semibold">Free Services</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-soshoct-yellow"></div>
                  <span>Community Access — free for the first 500 students</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-soshoct-yellow"></div>
                  <span>1-on-1 Consultation — first call free</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-soshoct-yellow"></div>
                  <span>Career Awareness Webinars</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>

            {/* Premium Services */}
            <div className="rounded-lg bg-soshoct-yellow p-6 shadow transition hover:shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-black">Premium Services</h3>
              <ul className="mb-6 space-y-3 text-black">
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-black"></div>
                  <span>Resume + LinkedIn Setup — ₹199</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-black"></div>
                  <span>Internship Hunt Support — ₹299</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-black"></div>
                  <span>Super 5/10 Online Study Room — ₹299/month</span>
                </li>
              </ul>
              <Button asChild variant="secondary">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join Our Community</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-6 text-2xl font-semibold">Community Access Is Earned – Not Given.</h3>
            <p className="mb-8 text-muted-foreground">
              Soshoct is a community built for serious learners and doers. Access is selective — 
              based on an assessment that gauges your mindset, intent, and collaboration skills. 
              We aim to create a high-value network where motivated individuals can grow together.
            </p>
            <Button asChild className="bg-soshoct-yellow text-black hover:bg-soshoct-yellow/90">
              <Link to="/community">Apply to Join the Community</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-soshoct-yellow py-16 text-black md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Career Journey?</h2>
              <p className="mb-6 text-lg">
                Take the first step towards a clearer career path with personalized guidance.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 lg:items-end">
              <Button asChild className="bg-black text-white hover:bg-black/90" size="lg">
                <Link to="/community">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
