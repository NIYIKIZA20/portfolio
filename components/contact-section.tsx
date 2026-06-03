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
    <section id="contact" className="py-24 bg-muted/25 dark:bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get In Touch
            </h2>
            <div className="mx-auto mt-3 mb-6 h-1 w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ready to start your next project? I&apos;d love to hear from you. Let&apos;s
              discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Two-column layout: info left, form right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contact information */}
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Let&apos;s Connect
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I&apos;m always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl shrink-0">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:jbniyikiza20@gmail.com"
                      className="text-foreground hover:text-blue-500 transition-colors font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      jbniyikiza20@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl shrink-0">
                    <Phone className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Phone
                    </h4>
                    <a
                      href="tel:+250789092847"
                      className="text-foreground hover:text-emerald-500 transition-colors font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      +250 789 092 847
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl shrink-0">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Location
                    </h4>
                    <p
                      className="text-foreground font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <h4
                  className="font-semibold mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Connect With Me
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/NIYIKIZA20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/niyikiza-jean-baptiste2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/niyikizajb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-blue-600 hover:text-blue-600 hover:bg-blue-600/5 transition-all duration-300"
                    aria-label="Facebook Profile"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle style={{ fontFamily: "var(--font-heading)" }}>
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
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
                      Thank you for reaching out. I&apos;ll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>

                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      style={{ fontFamily: "var(--font-body)" }}
                    />

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      style={{ fontFamily: "var(--font-body)" }}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-all duration-300 font-semibold"
                      disabled={isSubmitting}
                      style={{ fontFamily: "var(--font-heading)" }}
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
    </section>
  );
}
