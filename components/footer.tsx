import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import { WhatsAppIcon, XIcon } from "@/components/icons/social-icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-primary mb-4 block"
            >
              <span style={{ fontFamily: "var(--font-heading)" }}>
                Jean Baptiste Niyikiza
              </span>
            </Link>
            <p
              className="text-muted-foreground mb-6 max-w-md"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Smart Manufacturing engineer working across embedded systems, IoT,
              PCB design, and 3D/4D printing, turning engineering ideas into
              deployable technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/NIYIKIZA20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/niyikiza-jean-baptiste2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/niyikizajb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://x.com/jb_niyikiza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <XIcon className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a
                href="https://wa.me/250789092847"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a
                href="mailto:jbniyikiza20@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/#home", label: "Home" },
                { href: "/#education", label: "Education" },
                { href: "/publications", label: "Publication" },
                { href: "/#skills", label: "Skills & Experience" },
                { href: "/journal", label: "Journal" },
                { href: "/#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-semibold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Focus Areas
            </h3>
            <ul className="space-y-2">
              {[
                "Embedded Systems & IoT",
                "3D Printing & 4D Printing",
                "PCB Design & nanofabrication",
                "Smart Manufacturing & Automation",
                "Laser Cutting & CNC Machining",
              ].map((service) => (
                <li key={service}>
                  <span
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p
            className="text-muted-foreground text-sm flex items-center gap-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Jean Baptiste Niyikiza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
