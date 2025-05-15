
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Your message has been sent! We'll get back to you soon.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or need more information? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Whether you're a student looking for guidance, an educator wanting to partner with us, 
                or someone interested in our mission, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soshoct-yellow/20">
                    <MapPin className="h-5 w-5 text-soshoct-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soshoct-yellow/20">
                    <Mail className="h-5 w-5 text-soshoct-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a 
                      href="mailto:info.soshoct@gmail.com" 
                      className="text-muted-foreground hover:text-soshoct-yellow"
                    >
                      info.soshoct@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soshoct-yellow/20">
                    <Phone className="h-5 w-5 text-soshoct-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <a 
                      href="tel:+919168224042" 
                      className="text-muted-foreground hover:text-soshoct-yellow"
                    >
                      +91 9168224042
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soshoct-yellow/20">
                    <Clock className="h-5 w-5 text-soshoct-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM IST</p>
                    <p className="text-muted-foreground">Saturday: 10 AM - 2 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
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
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-soshoct-yellow text-black hover:bg-soshoct-yellow/90"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map or FAQ Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mx-auto mb-8 h-1 w-16 bg-soshoct-yellow"></div>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="divide-y">
              <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold">How can I join the Soshoct community?</h3>
                <p className="text-muted-foreground">
                  You can apply to join our community through the application form on our Community page.
                  The process includes filling out a form and a short assessment to understand your goals and mindset.
                </p>
              </div>

              <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold">Are your services only for college students?</h3>
                <p className="text-muted-foreground">
                  While our primary focus is on college students, we also cater to recent graduates and working
                  professionals looking to pivot their careers or gain new skills. Each program has specific
                  eligibility criteria.
                </p>
              </div>

              <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold">Do you offer scholarships or financial aid?</h3>
                <p className="text-muted-foreground">
                  Yes, we have scholarship programs for students who demonstrate exceptional potential but face
                  financial constraints. Please contact us directly to learn more about our financial aid options.
                </p>
              </div>

              <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold">Can I get a refund if I'm not satisfied with a paid service?</h3>
                <p className="text-muted-foreground">
                  We have a satisfaction guarantee for all our paid services. If you're not satisfied with the quality
                  of service, please contact us within 7 days of purchase, and we'll work to resolve the issue or
                  provide a refund.
                </p>
              </div>

              <div className="py-5">
                <h3 className="mb-2 text-lg font-semibold">How can organizations partner with Soshoct?</h3>
                <p className="text-muted-foreground">
                  We welcome partnerships with educational institutions, companies, and non-profits who share our mission.
                  Please send us an email at info.soshoct@gmail.com with your partnership proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
