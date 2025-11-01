"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Tag, Heart, MessageCircle, Send } from "lucide-react";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  mood: "reflective" | "excited" | "challenging" | "grateful" | "learning";
  likes: number;
  comments: Comment[];
}

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

const journalEntries: JournalEntry[] = [
  {
    id: "ai-learning-theories",
    title: "Learning AI Theories: From Skepticism to Understanding",
    content: `While I was unhappy at first of learning AI theories in AI for personal development first session, I thought we will only just need mathematical knowledge and tech skills and then we start developing the first AI application.

    However, as I progressed through the course, I began to understand why the theoretical foundation is so crucial. The theories aren't just academic exercises - they're the building blocks that help us understand how AI systems actually work, their limitations, and their potential applications.

    Learning about neural networks, machine learning algorithms, and data processing concepts has given me a deeper appreciation for the complexity behind what seems like simple AI interactions. It's not just about implementing code; it's about understanding the principles that make intelligent systems possible.

    This experience taught me the importance of patience in learning. Sometimes the foundation work feels tedious, but it's essential for building robust, meaningful applications. The theoretical knowledge is now helping me make better decisions when implementing AI features in my projects.

    I'm grateful for this structured approach to learning AI. It's made me a more thoughtful developer who considers not just how to implement something, but why it works the way it does.`,
    date: "2024-01-25",
    readTime: "4 min read",
    tags: ["ai", "learning", "theory", "personal-development", "reflection"],
    mood: "learning",
    likes: 12,
    comments: [
      {
        id: "1",
        author: "Sarah Chen",
        content:
          "I had the exact same experience! The theory seemed boring at first but it's so valuable for understanding the bigger picture.",
        date: "2024-01-26",
      },
      {
        id: "2",
        author: "Mike Rodriguez",
        content:
          "Great reflection! The theoretical foundation really does make you a better AI developer in the long run.",
        date: "2024-01-26",
      },
    ],
  },
  {
    id: "1",
    title: "Embracing the Journey of Continuous Learning",
    content: `Today I've been reflecting on how much I've grown as a developer over the past year. The technology landscape changes so rapidly, and sometimes it feels overwhelming to keep up with all the new frameworks, tools, and best practices.

    But I've realized that this constant evolution is what makes our field so exciting. Every challenge I face, every bug I debug, and every new concept I learn adds another layer to my understanding. The key isn't to know everything, but to remain curious and adaptable.

    Recently, I've been diving deeper into TypeScript and its advanced features. The type system has completely changed how I think about code structure and error prevention. It's fascinating how adding types can make code not just safer, but also more expressive and self-documenting.

    I'm grateful for the community of developers who share their knowledge freely. Open source projects, technical blogs, and developer communities have been instrumental in my growth. It reminds me that we're all learning together, and there's always someone willing to help or share their experience.`,
    date: "2024-01-20",
    readTime: "3 min read",
    tags: ["learning", "typescript", "growth", "community"],
    mood: "reflective",
    likes: 0,
    comments: [],
  },
  {
    id: "2",
    title: "The Art of Problem-Solving in Development",
    content: `There's something deeply satisfying about solving a complex problem that has been puzzling you for hours or even days. Today, I finally cracked a performance issue that was affecting one of my React applications.

    The problem seemed simple at first - components were re-rendering unnecessarily, causing the UI to feel sluggish. But as I dug deeper, I discovered it was a combination of factors: improper dependency arrays in useEffect hooks, missing memoization, and some inefficient data structures.

    What struck me most was how the solution required both technical knowledge and creative thinking. It wasn't just about knowing React optimization techniques, but about understanding the data flow and user interactions in a holistic way.

    This experience reminded me why I love being a developer. We're not just writing code; we're solving puzzles, creating solutions, and building experiences that matter to people. Every bug is a mystery to solve, every feature is a problem to tackle creatively.

    I've started keeping a "problem-solving journal" where I document interesting challenges and their solutions. It's becoming a valuable resource for future reference and a reminder of how much I've learned.`,
    date: "2024-01-15",
    readTime: "4 min read",
    tags: ["problem-solving", "react", "performance", "optimization"],
    mood: "excited",
    likes: 0,
    comments: [],
  },
  {
    id: "3",
    title: "Navigating Imposter Syndrome in Tech",
    content: `I had one of those days today where imposter syndrome hit hard. Looking at other developers' work on GitHub, reading about their achievements, and comparing myself to where I think I "should" be at this stage of my career.

    It's a familiar feeling, but one that I'm learning to handle better. I've realized that imposter syndrome often strikes when we're actually growing and pushing our boundaries. It's a sign that we're challenging ourselves and stepping out of our comfort zone.

    What helps me is remembering that everyone's journey is different. The developer who seems to know everything about machine learning might struggle with CSS layouts. The person who builds amazing UIs might find backend architecture challenging. We all have our strengths and areas for growth.

    I've been trying to reframe these moments of self-doubt as opportunities for learning. Instead of thinking "I don't know enough," I try to think "I get to learn something new." It's a small shift in perspective, but it makes a big difference in how I approach challenges.

    The tech community has been incredibly supportive in this journey. Sharing these feelings with other developers has shown me that even the most accomplished professionals have felt this way. We're all figuring it out as we go.`,
    date: "2024-01-10",
    readTime: "3 min read",
    tags: ["imposter-syndrome", "mental-health", "growth", "community"],
    mood: "challenging",
    likes: 0,
    comments: [],
  },
  {
    id: "4",
    title: "The Joy of Mentoring and Knowledge Sharing",
    content: `I had the opportunity to mentor a junior developer this week, and it reminded me of how much I've learned and grown. Explaining concepts that have become second nature to me helped me see them from a fresh perspective.

    There's something magical about that moment when a concept clicks for someone. Watching their face light up when they finally understand how closures work, or when they successfully implement their first API integration - it's incredibly rewarding.

    But mentoring isn't just about giving; it's about receiving too. The questions that junior developers ask often challenge my assumptions and force me to think more deeply about why we do things a certain way. Their fresh perspective and curiosity remind me to stay open-minded and not get too comfortable with "the way things are done."

    I've also been contributing more to open source projects and writing technical blog posts. Sharing knowledge feels like giving back to the community that has given me so much. Every tutorial I read, every Stack Overflow answer that saved me hours of debugging, every open source library that made my job easier - they all came from developers who chose to share their knowledge.

    I'm committed to continuing this cycle of learning and sharing. It's one of the most beautiful aspects of our industry.`,
    date: "2024-01-05",
    readTime: "3 min read",
    tags: ["mentoring", "teaching", "open-source", "community"],
    mood: "grateful",
    likes: 0,
    comments: [],
  },
  {
    id: "5",
    title: "Exploring the Intersection of AI and Web Development",
    content: `The rapid advancement of AI tools has been both exciting and somewhat unsettling for our industry. As developers, we're witnessing tools that can generate code, debug issues, and even create entire applications from simple descriptions.

    Initially, I was worried about AI replacing developers. But as I've experimented with various AI coding assistants, I've realized they're more like powerful tools that augment our capabilities rather than replace our creativity and problem-solving skills.

    AI excels at generating boilerplate code, suggesting optimizations, and helping with syntax. But it still requires human insight to understand business requirements, make architectural decisions, and ensure the code serves real user needs. The human element - empathy, creativity, and critical thinking - remains irreplaceable.

    I've started incorporating AI tools into my workflow, and they've made me more productive. I spend less time on repetitive tasks and more time on the interesting challenges: designing user experiences, optimizing performance, and solving complex business problems.

    The key is learning to work with AI as a collaborator, not a replacement. It's like having a very knowledgeable pair programming partner who never gets tired but sometimes needs guidance on the bigger picture.

    I'm excited to see how this technology evolves and how it will continue to shape our industry. The future of development isn't about humans vs. AI - it's about humans with AI.`,
    date: "2024-01-01",
    readTime: "4 min read",
    tags: ["ai", "future", "tools", "productivity", "collaboration"],
    mood: "learning",
    likes: 0,
    comments: [],
  },
];

const getMoodColor = (mood: JournalEntry["mood"]) => {
  switch (mood) {
    case "reflective":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "excited":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "challenging":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case "grateful":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "learning":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export function JournalEntries() {
  const [likedEntries, setLikedEntries] = useState<Set<string>>(new Set());
  const [showComments, setShowComments] = useState<Set<string>>(new Set());
  const [newComments, setNewComments] = useState<Record<string, string>>({});

  const handleLike = (entryId: string) => {
    setLikedEntries((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(entryId)) {
        newSet.delete(entryId);
      } else {
        newSet.add(entryId);
      }
      return newSet;
    });
  };

  const toggleComments = (entryId: string) => {
    setShowComments((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(entryId)) {
        newSet.delete(entryId);
      } else {
        newSet.add(entryId);
      }
      return newSet;
    });
  };

  const handleCommentChange = (entryId: string, value: string) => {
    setNewComments((prev) => ({ ...prev, [entryId]: value }));
  };

  const handleCommentSubmit = (entryId: string) => {
    // In a real app, this would submit to an API
    console.log(`Submitting comment for ${entryId}:`, newComments[entryId]);
    setNewComments((prev) => ({ ...prev, [entryId]: "" }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2
          className="text-2xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Recent Reflections
        </h2>
        <p
          className="text-muted-foreground"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Thoughts, insights, and learnings from my development journey
        </p>
      </div>

      {journalEntries.map((entry) => (
        <Card
          key={entry.id}
          className="hover:shadow-professional-lg transition-shadow duration-300 shadow-professional"
        >
          <CardHeader className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h3
                className="text-xl font-semibold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {entry.title}
              </h3>
              <Badge className={getMoodColor(entry.mood)} variant="secondary">
                {entry.mood}
              </Badge>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  {entry.readTime}
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {entry.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-foreground leading-relaxed mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(entry.id)}
                  className={`flex items-center gap-2 ${likedEntries.has(entry.id) ? "text-red-500" : "text-muted-foreground"}`}
                >
                  <Heart
                    className={`h-4 w-4 ${likedEntries.has(entry.id) ? "fill-current" : ""}`}
                  />
                  <span>
                    {entry.likes + (likedEntries.has(entry.id) ? 1 : 0)}
                  </span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleComments(entry.id)}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{entry.comments.length}</span>
                </Button>
              </div>
            </div>

            {/* Comments Section */}
            {showComments.has(entry.id) && (
              <div className="space-y-3 pt-3 border-t border-border">
                {entry.comments.map((comment) => (
                  <div key={comment.id} className="bg-muted/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="font-medium text-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {comment.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(comment.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p
                      className="text-sm text-foreground"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {comment.content}
                    </p>
                  </div>
                ))}

                <div className="flex gap-2">
                  <Textarea
                    placeholder="Add a comment..."
                    value={newComments[entry.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(entry.id, e.target.value)
                    }
                    className="flex-1 min-h-[80px] resize-none"
                  />
                  <Button
                    size="sm"
                    onClick={() => handleCommentSubmit(entry.id)}
                    disabled={!newComments[entry.id]?.trim()}
                    className="self-end"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
