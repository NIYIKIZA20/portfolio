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
import { CV_URL } from "@/lib/profile-data";

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
  "What are his skills?",
  "Show me his projects",
  "Where did he study?",
  "How can I contact him?",
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
          "Hi, I am JB Niyikiza! Ask me about my experience, skills, projects, education, or how to get in touch.",
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

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const getEnhancedBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    const messageId = (Date.now() + 1).toString();
    const reply = (
      content: string,
      actions?: Message["actions"],
    ): Message => ({
      id: messageId,
      content,
      sender: "bot",
      timestamp: new Date(),
      type: actions ? "action" : "text",
      actions,
    });

    // Education
    if (
      input.includes("study") ||
      input.includes("education") ||
      input.includes("school") ||
      input.includes("university") ||
      input.includes("degree")
    ) {
      return reply(
        `**Education:**
• MSc, Smart Manufacturing, Nanyang Technological University (NTU) Singapore (Jun 2026 – Jun 2027)
• BEng, Electronics and Telecommunication Engineering, University of Rwanda (2021 – 2025), GPA 3.5/4.0
• High School Diploma, Mathematics, Physics and Chemistry, Petit Séminaire St. Vincent de Paul, Ndera (score 73/73)`,
        [
          {
            label: "See Education",
            action: () => scrollTo("education"),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      );
    }

    // Experience and Background
    if (
      input.includes("experience") ||
      input.includes("background") ||
      input.includes("about")
    ) {
      return reply(
        `I'm a Smart Manufacturing engineer with a background in Electronics and Telecommunications.

**Recent roles:**
• Embedded Systems and IoT Engineer, Beno Holdings (2026)
• Computer Literacy Instructor, Alight Rwanda (2025)
• Perception Annotation and Review Engineer, ReadyToBloom Inc., Japan (2025)
• Embedded Systems Trainer, Unipod and FabLab, University of Rwanda (2025)
• Firmware Engineer, Beno Holdings (2024 – 2025)
• Firmware and IoT Trainer, Kagoma Tech (2023 – 2025)`,
        [
          {
            label: "View My CV",
            action: () => window.open(CV_URL, "_blank"),
            icon: <Download className="h-4 w-4" />,
          },
          {
            label: "See Experience",
            action: () => scrollTo("skills"),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      );
    }

    // Skills and Technologies
    if (
      input.includes("skill") ||
      input.includes("technolog") ||
      input.includes("tech stack")
    ) {
      return reply(
        `**Embedded Systems & IoT:** microcontroller firmware, sensors, real-time data acquisition, cloud integration, PCB design (Altium, EasyEDA)

**3D Printing & Enclosure Design:** SolidWorks, Fusion CAD, 3D modelling, Creality printing, 3D & 4D printing workflows

**Software Development:** React, Next.js, Node.js, Nest.js, Express, PostgreSQL, MongoDB, Docker

**Others:** research and technical writing, perception annotation, technical training, MATLAB, Origin Pro`,
        [
          {
            label: "See Skills",
            action: () => scrollTo("skills"),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      );
    }

    // Projects and Publications
    if (
      input.includes("project") ||
      input.includes("portfolio") ||
      input.includes("work") ||
      input.includes("publication") ||
      input.includes("research")
    ) {
      return reply(
        `**Projects:**
• **Smart Cane (E-nkoni):** IoT-enabled assistive navigation device for the visually impaired
• **The AUTO Test:** sensor and cloud-based digitization of the motorcycle driving-license test
• **Bilitrack:** hyperbilirubinemia (jaundice) testing device

**Publication:** "Optical Sensor-based Assessment of bio-waste Levels for Home Water Safety Monitoring", MDPI, 2024.`,
        [
          {
            label: "See Projects",
            action: () => scrollTo("skills"),
            icon: <ExternalLink className="h-4 w-4" />,
          },
          {
            label: "Publications",
            action: () => window.open("/publications", "_self"),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      );
    }

    // Contact
    if (
      input.includes("hire") ||
      input.includes("contact") ||
      input.includes("email") ||
      input.includes("collaborate")
    ) {
      return reply(
        `I'm open to research, engineering and collaboration opportunities in smart manufacturing, embedded systems and IoT.

The quickest way to reach me is WhatsApp, or send an email from the contact form.

**Based in:** Singapore / Kigali, Rwanda`,
        [
          {
            label: "Contact Me",
            action: () => scrollTo("contact"),
            icon: <ExternalLink className="h-4 w-4" />,
          },
        ],
      );
    }

    // Default response with suggestions
    return {
      id: messageId,
      content: `I can tell you about:
• My experience
• My skills
• My projects and publication
• My education
• How to contact me

What would you like to know?`,
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
