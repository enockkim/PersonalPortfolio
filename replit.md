# Enock Kimutai Sang - Portfolio Website

## Overview

This is a modern, responsive portfolio website for Enock Kimutai Sang, a backend software engineer. The application is built as a full-stack web application using React for the frontend, Express.js for the backend, and includes a comprehensive UI component library based on shadcn/ui. The site showcases Enock's professional experience, skills, projects, and provides a contact form for potential clients or employers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds
- **Theme**: Dark/light mode support with system preference detection

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development**: Hot reloading with Vite middleware integration
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Driver**: Neon Database serverless driver
- **Session Storage**: PostgreSQL-based session storage (connect-pg-simple)

### Component Architecture
The frontend uses a component-based architecture with:
- Reusable UI components in `/client/src/components/ui/`
- Page-specific components in `/client/src/components/`
- Single-page application structure with modular sections
- TypeScript for type safety throughout

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation and theme toggle
2. **Hero Section**: Landing area with name, title, and call-to-action buttons
3. **About Section**: Personal introduction with professional background
4. **Skills Section**: Categorized display of technical skills and tools
5. **Projects Section**: Portfolio showcase with filtering capabilities
6. **Experience Section**: Professional work history with timeline layout
7. **Education Section**: Academic background and certifications
8. **Contact Section**: Contact form with validation and toast notifications
9. **Footer**: Simple footer with social links and copyright

### Backend Infrastructure
1. **API Routes**: RESTful API structure (routes currently placeholder)
2. **Storage Interface**: Abstracted storage layer with in-memory implementation
3. **Error Handling**: Centralized error handling middleware
4. **Request Logging**: Automated API request logging with timing
5. **Static Serving**: Production-ready static file serving

### Database Schema
- **Users Table**: Basic user management structure with username/password
- **Drizzle Configuration**: PostgreSQL dialect with migration support
- **Type Safety**: Zod schemas for runtime validation

## Data Flow

### Development Workflow
1. Vite dev server handles frontend development with HMR
2. Express server provides API endpoints and serves the React app
3. Database migrations managed through Drizzle Kit
4. TypeScript compilation for both frontend and backend

### Production Flow
1. React app builds to static files via Vite
2. Express server serves static files and API routes
3. PostgreSQL database for persistent data storage
4. Single deployment artifact with both frontend and backend

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **Express.js**: Web framework with middleware support
- **Database**: Drizzle ORM, Neon Database driver, PostgreSQL session store
- **UI Framework**: Radix UI primitives, Tailwind CSS, class-variance-authority

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Code Quality**: ESLint configuration, PostCSS for CSS processing
- **Replit Integration**: Runtime error overlay, cartographer plugin

### UI and Styling
- **Component Library**: Complete shadcn/ui implementation
- **Icons**: Lucide React icon library
- **Animations**: CSS-based animations with Tailwind utilities
- **Typography**: Inter font family from Google Fonts

### Form and Interaction
- **Form Handling**: React Hook Form with Hookform resolvers
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date utilities
- **Carousel**: Embla Carousel for image galleries

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to `/dist/public`
2. **Backend Build**: esbuild bundles Express server to `/dist/index.js`
3. **Database Setup**: Drizzle migrations apply schema changes
4. **Environment**: NODE_ENV controls development vs production behavior

### Environment Configuration
- **Database**: `DATABASE_URL` required for PostgreSQL connection
- **Development**: Replit-specific plugins and error handling
- **Production**: Optimized builds with static file serving

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (configured for Neon Database)
- Environment variables for database connection
- Static file serving capability

The application is designed to be deployed on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support. The modular architecture allows for easy extension of features and scaling of both frontend and backend components.