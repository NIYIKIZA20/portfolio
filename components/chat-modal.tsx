"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Download,
  ExternalLink,
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "action" | "suggestion";
  actions?: Array<{
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  }>;
}

const quickSuggestions = [
  "Tell me about Jean Baptiste's experience",
  "What technologies does he work with?",
  "Show me his recent projects",
  "How can I hire him?",
  "What's his development process?",
];

export function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        content:
          "Hi, I am JB Niyikiza! What can I help you with? I'm here to discuss my experience, projects, and how we can work together on your next development project.",
        sender: "bot",
        timestamp: new Date(),
        type: "text",
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setShowSuggestions(false);
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse = getEnhancedBotResponse(text);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getEnhancedBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    const messageId = (Date.now() + 1).toString();

    // Experience and Background
    if (
      input.includes("experience") ||
      input.includes("background") ||
      input.includes("about")
    ) {
      return {
        id: messageId,
        content: `I'm a seasoned Full Stack Web Developer with 5+ years of professional experience. I've worked on diverse projects ranging from e-commerce platforms to AI-powered applications.

**My Key Highlights:**
• 50+ successful projects delivered
• Expertise in modern web technologies (React, Next.js, Node.js)
• Strong background in both frontend and backend development
• Experience with cloud platforms and DevOps practices
• Passionate about creating scalable, user-friendly applications

I'm particularly skilled at taking projects from concept to deployment, ensuring both technical excellence and great user experience.`,
        sender: "bot",
        timestamp: new Date(),
        type: "action",
        actions: [
          {
            label: "View My CV",
            action: () =>
              window.open(
                "https://docs.google.com/document/d/1ffuINqC_QJB0kCKz892DSso3-QS9sbWR9aOeQW6RO9g/edit",
                "_blank",
              ),
            icon: <Download className="h-4 w-4" />,
          },
          {
            label: "Watch My Introduction",
            action: () =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" }),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      };
    }

    // Skills and Technologies
    if (
      input.includes("skills") ||
      input.includes("technologies") ||
      input.includes("tech stack")
    ) {
      return {
        id: messageId,
        content: `I've mastered a comprehensive tech stack:

**Frontend Development:**
• React, Next.js, TypeScript
• Tailwind CSS, Styled Components
• State Management (Redux, Zustand)
• Modern JavaScript (ES6+)

**Backend Development:**
• Node.js, Express.js
• Python, Django/Flask
• RESTful APIs, GraphQL
• Authentication & Authorization

**Databases:**
• PostgreSQL, MongoDB
• Redis for caching
• Database design & optimization

**DevOps & Tools:**
• Git, Docker, CI/CD
• AWS, Vercel, Netlify
• Testing (Jest, Cypress)
• Agile methodologies

I stay current with industry trends and continuously learn new technologies to deliver cutting-edge solutions.`,
        sender: "bot",
        timestamp: new Date(),
        type: "action",
        actions: [
          {
            label: "View My Projects",
            action: () =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" }),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      };
    }

    // Projects and Portfolio
    if (
      input.includes("projects") ||
      input.includes("portfolio") ||
      input.includes("work")
    ) {
      return {
        id: messageId,
        content: `I've built impressive projects showcasing my full-stack capabilities:

**My Featured Projects:**
• **E-Commerce Platform** - Complete online store with payment processing, inventory management, and admin dashboard
• **Task Management App** - Collaborative tool with real-time updates and team features
• **AI Chat Application** - Intelligent messaging system with AI-powered responses

**My Project Approach:**
• Requirements analysis and planning
• Modern, responsive UI/UX design
• Scalable architecture and clean code
• Thorough testing and optimization
• Deployment and maintenance support

Each project demonstrates my ability to handle complex requirements and deliver production-ready applications.`,
        sender: "bot",
        timestamp: new Date(),
        type: "action",
        actions: [
          {
            label: "View My Portfolio",
            action: () =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" }),
            icon: <ExternalLink className="h-4 w-4" />,
          },
          {
            label: "Read My Blog",
            action: () =>
              document
                .getElementById("blog")
                ?.scrollIntoView({ behavior: "smooth" }),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      };
    }

    // Hiring and Contact
    if (
      input.includes("hire") ||
      input.includes("contact") ||
      input.includes("work together") ||
      input.includes("collaborate")
    ) {
      return {
        id: messageId,
        content: `I'm available for exciting projects and collaborations!

**Services I Offer:**
• Full-stack web application development
• Frontend development (React/Next.js)
• Backend API development
• Database design and optimization
• Technical consulting and code reviews
• Maintenance and support

**My Working Style:**
• Clear communication and regular updates
• Agile development approach
• Focus on quality and best practices
• Collaborative problem-solving
• Timely delivery and support

**My Availability:** Open to both project-based work and long-term partnerships.

Ready to discuss your project? Let's connect!`,
        sender: "bot",
        timestamp: new Date(),
        type: "action",
        actions: [
          {
            label: "Contact Me Now",
            action: () =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" }),
            icon: <ExternalLink className="h-4 w-4" />,
          },
          {
            label: "Download My CV",
            action: () =>
              window.open(
                "https://docs.google.com/document/d/1ffuINqC_QJB0kCKz892DSso3-QS9sbWR9aOeQW6RO9g/edit",
                "_blank",
              ),
            icon: <Download className="h-4 w-4" />,
          },
        ],
      };
    }

    // Development Process
    if (
      input.includes("process") ||
      input.includes("methodology") ||
      input.includes("approach")
    ) {
      return {
        id: messageId,
        content: `I follow a structured development process to ensure project success:

**1. Discovery & Planning**
• Requirements gathering and analysis
• Technical architecture planning
• Timeline and milestone definition

**2. Design & Prototyping**
• UI/UX design and wireframing
• Technical specification documentation
• Client feedback and iterations

**3. Development**
• Agile development with regular sprints
• Clean, maintainable code practices
• Regular testing and quality assurance

**4. Deployment & Launch**
• Production deployment and optimization
• Performance monitoring and testing
• Documentation and handover

**5. Support & Maintenance**
• Ongoing support and bug fixes
• Feature enhancements and updates
• Performance optimization

This approach ensures transparency, quality, and successful project outcomes.`,
        sender: "bot",
        timestamp: new Date(),
        type: "text",
      };
    }

    // Pricing and Rates
    if (
      input.includes("price") ||
      input.includes("rate") ||
      input.includes("cost") ||
      input.includes("budget")
    ) {
      return {
        id: messageId,
        content: `I offer flexible pricing options based on project scope and requirements:

**My Pricing Models:**
• **Project-based:** Fixed price for defined scope
• **Hourly rate:** For ongoing work and consultations
• **Retainer:** Monthly arrangement for continuous support

**Factors Affecting My Pricing:**
• Project complexity and scope
• Timeline and urgency
• Technology requirements
• Ongoing support needs

**What I Include:**
• Development and testing
• Code documentation
• Basic deployment support
• Post-launch bug fixes (30 days)

For accurate pricing, I prefer to discuss your specific requirements. Every project is unique, and I provide transparent, competitive rates.`,
        sender: "bot",
        timestamp: new Date(),
        type: "action",
        actions: [
          {
            label: "Get Quote",
            action: () =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" }),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      };
    }

    // Default response with suggestions
    return {
      id: messageId,
      content: `I'd be happy to tell you more about myself! I'm a talented Full Stack Developer with extensive experience in modern web technologies.

Here are some things I can share with you:
• My professional background and experience
• Technical skills and technologies I work with
• Recent projects and portfolio highlights
• My development process and methodology
• How we can work together on your project

What specific aspect would you like to know more about?`,
      sender: "bot",
      timestamp: new Date(),
      type: "suggestion",
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open chat</span>
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6">
          <Card className="w-full max-w-md h-[600px] flex flex-col shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle
                className="text-lg flex items-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Bot className="h-5 w-5" />
                JB Niyikiza
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px] scroll-smooth">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-lg p-3"
                          : "space-y-2"
                      }`}
                    >
                      {message.sender === "bot" ? (
                        <div className="bg-muted rounded-lg p-3">
                          <div
                            className="text-sm whitespace-pre-line"
                            style={{ fontFamily: "var(--font-body)" }}
                            dangerouslySetInnerHTML={{
                              __html: message.content.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>",
                              ),
                            }}
                          />
                          {message.actions && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {message.actions.map((action, index) => (
                                <Button
                                  key={index}
                                  size="sm"
                                  variant="outline"
                                  onClick={action.action}
                                  className="text-xs bg-transparent"
                                >
                                  {action.icon}
                                  {action.label}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {message.content}
                        </p>
                      )}
                    </div>
                    {message.sender === "user" && (
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="h-4 w-4 text-accent" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-2 justify-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg p-3 flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm text-muted-foreground">
                        Thinking...
                      </span>
                    </div>
                  </div>
                )}

                {/* Quick Suggestions */}
                {showSuggestions && messages.length <= 1 && (
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground px-2">
                      Quick questions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickSuggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          size="sm"
                          variant="outline"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs h-auto py-2 px-3 whitespace-normal text-left"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about my experience..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    size="icon"
                    disabled={isTyping || !inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
