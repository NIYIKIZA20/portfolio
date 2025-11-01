"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { LoadingSpinner } from "@/components/loading-spinner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "bc0d3da8-b2bd-4dc7-bc6d-7f6efba144b7",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get In Touch
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ready to start your next project? I'd love to hear from you. Let's
              discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl font-semibold mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Let's Connect
                </h3>
                <p
                  className="text-muted-foreground mb-8"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:jbniyikiza20@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      jbniyikiza20@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Phone
                    </h4>
                    <a
                      href="tel:+250789092847"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      +250 789 092 847
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Location
                    </h4>
                    <p
                      className="text-muted-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h4
                    className="font-semibold mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Connect With Me
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/NIYIKIZA20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/niyikiza-jean-baptiste2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://www.facebook.com/niyikizajb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                      aria-label="Facebook Profile"
                    >
                      <Facebook className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-heading)" }}>
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3
                        className="text-xl font-semibold mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Message Sent!
                      </h3>
                      <p
                        className="text-muted-foreground"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <Input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <Input
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <LoadingSpinner size="sm" />
                            <span className="ml-2">Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
