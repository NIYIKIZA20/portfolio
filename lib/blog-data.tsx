export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js",
    slug: "building-scalable-web-applications-nextjs",
    excerpt:
      "Learn how to create performant and scalable web applications using Next.js, including best practices for routing, data fetching, and optimization.",
    content: `# Building Scalable Web Applications with Next.js

Next.js has revolutionized the way we build React applications by providing a powerful framework that handles many complex aspects of modern web development out of the box. In this comprehensive guide, we'll explore how to leverage Next.js to build scalable, performant web applications.

## Why Next.js for Scalable Applications?

Next.js offers several key advantages that make it ideal for building scalable applications:

### 1. Server-Side Rendering (SSR) and Static Site Generation (SSG)

Next.js provides multiple rendering strategies that can significantly improve your application's performance and SEO:

- **Static Site Generation (SSG)**: Pre-renders pages at build time, perfect for content that doesn't change frequently
- **Server-Side Rendering (SSR)**: Renders pages on each request, ideal for dynamic content
- **Incremental Static Regeneration (ISR)**: Combines the benefits of SSG with the ability to update content

### 2. Automatic Code Splitting

Next.js automatically splits your code at the page level, ensuring that users only download the JavaScript they need for the current page. This results in faster initial page loads and better performance.

### 3. Built-in Performance Optimizations

The framework includes numerous performance optimizations:

- Image optimization with the \`next/image\` component
- Font optimization
- Script optimization
- Automatic bundle analysis

## Best Practices for Scalable Next.js Applications

### 1. Organize Your Project Structure

A well-organized project structure is crucial for scalability:

\`\`\`
src/
  app/
    (dashboard)/
      dashboard/
        page.tsx
    api/
      users/
        route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    ui/
    forms/
    layout/
  lib/
    utils.ts
    validations.ts
  hooks/
    use-auth.ts
\`\`\`

### 2. Implement Proper Data Fetching Strategies

Choose the right data fetching method based on your needs:

\`\`\`typescript
// Static data fetching
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// Server-side data fetching
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store' // Disable caching for dynamic data
  })
  return res.json()
}
\`\`\`

### 3. Optimize Images and Assets

Use Next.js Image component for automatic optimization:

\`\`\`jsx
import Image from 'next/image'

function ProfileImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={500}
      height={300}
      priority // Load above-the-fold images with priority
    />
  )
}
\`\`\`

### 4. Implement Proper Error Handling

Create error boundaries and error pages:

\`\`\`tsx
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
\`\`\`

## Performance Monitoring and Optimization

### 1. Use Next.js Analytics

Monitor your application's performance with built-in analytics:

\`\`\`javascript
// next.config.js
module.exports = {
  experimental: {
    instrumentationHook: true,
  },
}
\`\`\`

### 2. Implement Proper Caching Strategies

Leverage Next.js caching mechanisms:

\`\`\`typescript
// Revalidate data every hour
export const revalidate = 3600

// Cache API responses
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }
})
\`\`\`

## Conclusion

Building scalable web applications with Next.js requires careful planning and implementation of best practices. By leveraging the framework's built-in optimizations and following the patterns outlined in this guide, you can create applications that perform well at scale and provide excellent user experiences.

Remember that scalability isn't just about handling more users—it's also about maintaining code quality, developer productivity, and application performance as your project grows.`,
    image: "/nextjs-development-coding.png",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance", "Scalability", "SSR"],
    author: {
      name: "Jean Baptiste N.",
      avatar: "/author-avatar.png",
      bio: "Full Stack Web Developer passionate about creating scalable web applications and sharing knowledge with the developer community.",
    },
  },
  {
    id: "2",
    title: "The Future of Full-Stack Development",
    slug: "future-of-fullstack-development",
    excerpt:
      "Exploring emerging trends and technologies that are shaping the future of full-stack development, from AI integration to serverless architectures.",
    content: `# The Future of Full-Stack Development

The landscape of full-stack development is evolving at an unprecedented pace. As we look toward the future, several key trends and technologies are reshaping how we build, deploy, and maintain web applications. Let's explore what lies ahead for full-stack developers.

## AI-Powered Development Tools

Artificial Intelligence is revolutionizing the development process:

### Code Generation and Assistance
- AI-powered code completion and generation
- Automated testing and bug detection
- Intelligent refactoring suggestions
- Natural language to code conversion

### Impact on Developers
Rather than replacing developers, AI tools are becoming powerful assistants that:
- Increase productivity and reduce repetitive tasks
- Help with learning new technologies and patterns
- Provide intelligent debugging and optimization suggestions
- Enable faster prototyping and iteration

## Serverless and Edge Computing

The shift toward serverless architectures continues to gain momentum:

### Benefits of Serverless
- Reduced operational overhead
- Automatic scaling and cost optimization
- Faster deployment and iteration cycles
- Focus on business logic rather than infrastructure

### Edge Computing Integration
- Reduced latency through geographic distribution
- Improved user experience with faster response times
- Better handling of real-time applications
- Enhanced security and data privacy

## The Rise of Full-Stack Frameworks

Modern frameworks are becoming more comprehensive:

### Meta-Frameworks
- Next.js, Nuxt.js, and SvelteKit leading the way
- Built-in optimization and best practices
- Unified development experience
- Seamless integration of frontend and backend

### Database Integration
- Type-safe database access with tools like Prisma and Drizzle
- Real-time capabilities with technologies like Supabase
- Simplified data management and synchronization

## WebAssembly and Performance

WebAssembly (WASM) is opening new possibilities:

### Performance Benefits
- Near-native performance in the browser
- Ability to run complex algorithms client-side
- Support for multiple programming languages
- Reduced server load and improved user experience

### Use Cases
- Image and video processing
- Scientific computing
- Game development
- Cryptographic operations

## The Evolution of JavaScript

JavaScript continues to evolve with new features and capabilities:

### Modern JavaScript Features
- Enhanced async/await patterns
- Improved module system
- Better error handling
- Performance optimizations

### TypeScript Adoption
- Increased type safety and developer experience
- Better tooling and IDE support
- Easier refactoring and maintenance
- Growing ecosystem support

## Micro-Frontends and Modular Architecture

The trend toward modular, scalable architectures:

### Benefits
- Independent development and deployment
- Technology diversity within applications
- Better team scalability
- Improved fault isolation

### Implementation Strategies
- Module federation
- Web components
- Micro-service architecture
- Container-based deployment

## Security and Privacy Focus

Growing emphasis on security and privacy:

### Zero-Trust Architecture
- Assume no implicit trust
- Verify every request and user
- Implement least-privilege access
- Continuous monitoring and validation

### Privacy-First Development
- GDPR and privacy regulation compliance
- Data minimization principles
- User consent management
- Transparent data handling

## The Developer Experience Revolution

Focus on improving developer productivity:

### Better Tooling
- Improved debugging and profiling tools
- Enhanced IDE integration
- Automated testing and deployment
- Real-time collaboration features

### Learning and Adaptation
- Continuous learning becomes essential
- Community-driven knowledge sharing
- Open-source collaboration
- Cross-functional skill development

## Conclusion

The future of full-stack development is exciting and full of opportunities. While new technologies and paradigms emerge, the fundamental principles of good software development remain constant: writing clean, maintainable code, focusing on user experience, and continuously learning and adapting.

As full-stack developers, we must embrace these changes while maintaining a solid foundation in core technologies and principles. The key to success will be balancing innovation with stability, and always keeping the end user's needs at the center of our development decisions.

The future belongs to developers who can adapt, learn continuously, and leverage new technologies to create better, more efficient, and more user-friendly applications.`,
    image: "/future-tech-development.png",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Technology Trends",
    tags: ["Future Tech", "AI", "Serverless", "WebAssembly", "JavaScript"],
    author: {
      name: "Jean Baptiste N.",
      avatar: "/author-avatar.png",
      bio: "Full Stack Web Developer passionate about creating scalable web applications and sharing knowledge with the developer community.",
    },
  },
  {
    id: "3",
    title: "Mastering TypeScript for Better Code Quality",
    slug: "mastering-typescript-code-quality",
    excerpt:
      "Discover how TypeScript can improve your development workflow and code quality with practical examples and advanced patterns.",
    content: `# Mastering TypeScript for Better Code Quality

TypeScript has become an essential tool for modern JavaScript development, offering static type checking that catches errors early and improves code maintainability. In this comprehensive guide, we'll explore advanced TypeScript patterns and best practices that will elevate your code quality.

## Why TypeScript Matters

TypeScript provides several key benefits that directly impact code quality:

### 1. Early Error Detection
Static type checking catches errors at compile time rather than runtime:

\`\`\`typescript
// This will cause a TypeScript error
function greet(name: string): string {
  return "Hello, " + name.toUpperCase()
}

greet(123) // Error: Argument of type 'number' is not assignable to parameter of type 'string'
\`\`\`

### 2. Enhanced IDE Support
Better autocomplete, refactoring, and navigation:

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  preferences: UserPreferences
}

interface UserPreferences {
  theme: 'light' | 'dark'
  notifications: boolean
}

// IDE will provide autocomplete for all User properties
function updateUser(user: User) {
  user.preferences.theme // Autocomplete available
}
\`\`\`

### 3. Self-Documenting Code
Types serve as inline documentation:

\`\`\`typescript
type APIResponse<T> = {
  data: T
  status: 'success' | 'error'
  message?: string
  timestamp: Date
}

// The function signature clearly shows what it returns
async function fetchUser(id: number): Promise<APIResponse<User>> {
  // Implementation
}
\`\`\`

## Advanced TypeScript Patterns

### 1. Utility Types for Code Reuse

TypeScript provides powerful utility types:

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
}

// Create a type without sensitive fields
type PublicUser = Omit<User, 'password'>

// Create a type with only specific fields
type UserSummary = Pick<User, 'id' | 'name'>

// Make all properties optional for updates
type UserUpdate = Partial<User>

// Make specific properties required
type UserRegistration = Required<Pick<User, 'name' | 'email' | 'password'>>
\`\`\`

### 2. Generic Types for Flexibility

Create reusable, type-safe components:

\`\`\`typescript
// Generic API client
class APIClient<T> {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async get(endpoint: string): Promise<T> {
    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`)
    return response.json()
  }

  async post(endpoint: string, data: Partial<T>): Promise<T> {
    const response = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return response.json()
  }
}

// Usage with specific types
const userClient = new APIClient<User>('/api/users')
const postClient = new APIClient<Post>('/api/posts')
\`\`\`

### 3. Discriminated Unions for State Management

Handle different states safely:

\`\`\`typescript
type LoadingState = {
  status: 'loading'
}

type SuccessState = {
  status: 'success'
  data: User[]
}

type ErrorState = {
  status: 'error'
  error: string
}

type AsyncState = LoadingState | SuccessState | ErrorState

function handleState(state: AsyncState) {
  switch (state.status) {
    case 'loading':
      return <Spinner />
    case 'success':
      return <UserList users={state.data} /> // TypeScript knows data exists
    case 'error':
      return <ErrorMessage error={state.error} /> // TypeScript knows error exists
  }
}
\`\`\`

### 4. Template Literal Types

Create dynamic, type-safe strings:

\`\`\`typescript
type EventName = 'click' | 'hover' | 'focus'
type ElementType = 'button' | 'input' | 'div'

// Generate all possible combinations
type EventHandler = \`on\${Capitalize<EventName>}\${Capitalize<ElementType>}\`
// Results in: 'onClickButton' | 'onClickInput' | 'onClickDiv' | 'onHoverButton' | etc.

// Usage in component props
interface ComponentProps {
  [K in EventHandler]?: () => void
}
\`\`\`

## Best Practices for TypeScript

### 1. Use Strict Mode

Enable strict TypeScript settings:

\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noImplicitThis": true
  }
}
\`\`\`

### 2. Prefer Type Assertions Over Any

When you must override TypeScript, be specific:

\`\`\`typescript
// Bad
const data = response as any

// Better
const data = response as { users: User[] }

// Best - use type guards
function isUserResponse(response: unknown): response is { users: User[] } {
  return typeof response === 'object' && 
         response !== null && 
         'users' in response
}

if (isUserResponse(response)) {
  // TypeScript now knows response has users property
  console.log(response.users)
}
\`\`\`

### 3. Use Branded Types for Domain Modeling

Create distinct types for similar data:

\`\`\`typescript
type UserId = string & { readonly brand: unique symbol }
type PostId = string & { readonly brand: unique symbol }

function createUserId(id: string): UserId {
  return id as UserId
}

function createPostId(id: string): PostId {
  return id as PostId
}

// This prevents mixing up IDs
function getUser(id: UserId): Promise<User> {
  // Implementation
}

const userId = createUserId('user-123')
const postId = createPostId('post-456')

getUser(userId) // ✓ Correct
getUser(postId) // ✗ TypeScript error
\`\`\`

## Testing with TypeScript

### Type-Safe Testing

Ensure your tests are type-safe:

\`\`\`typescript
import { render, screen } from '@testing-library/react'
import { UserProfile } from './UserProfile'

// Mock with proper typing
const mockUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  password: 'hashed-password',
  createdAt: new Date()
}

describe('UserProfile', () => {
  it('displays user information', () => {
    render(<UserProfile user={mockUser} />)
    
    expect(screen.getByText(mockUser.name)).toBeInTheDocument()
    expect(screen.getByText(mockUser.email)).toBeInTheDocument()
  })
})
\`\`\`

## Conclusion

TypeScript is more than just adding types to JavaScript—it's a powerful tool for improving code quality, developer experience, and application reliability. By mastering advanced TypeScript patterns and following best practices, you can write more maintainable, scalable, and bug-free code.

The key to success with TypeScript is to embrace its type system fully and use it to model your domain accurately. Start with basic types and gradually incorporate more advanced patterns as your understanding grows.

Remember, the goal isn't to satisfy the TypeScript compiler—it's to write better code that's easier to understand, maintain, and debug.`,
    image: "/typescript-code.png",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Programming",
    tags: [
      "TypeScript",
      "JavaScript",
      "Code Quality",
      "Best Practices",
      "Types",
    ],
    author: {
      name: "Jean Baptiste N.",
      avatar: "/author-avatar.png",
      bio: "Full Stack Web Developer passionate about creating scalable web applications and sharing knowledge with the developer community.",
    },
  },
];

export const blogCategories = [
  "All",
  "Web Development",
  "Technology Trends",
  "Programming",
  "React",
  "Next.js",
  "TypeScript",
  "Performance",
  "Best Practices",
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.id !== currentPost.id)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}
