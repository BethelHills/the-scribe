# The Scribe

AI-powered writing assistant for Christian authors, pastors, teachers, and ministry leaders.

## Overview

The Scribe helps authors capture their unique voice through guided interviews, build detailed voice profiles, organize scripture references, and generate manuscript content with AI assistance.

The platform is designed to feel like a personalized ghostwriter that understands an author's tone, favorite scriptures, teaching style, and signature phrases.

---

## Features

### Dashboard
- Project overview
- Writing statistics
- Author insights
- Quick actions

### Interview System
- Guided author onboarding
- Voice discovery questions
- Writing style assessment
- Ministry and theological context capture

### Voice Profile
- Author voice analysis
- Tone identification
- Common phrase tracking
- Scripture preference mapping
- Voice match scoring

### Manuscript Editor
- Rich text writing experience
- Chapter management
- AI-assisted writing
- Content enhancement tools
- Export functionality

### AI Assistant
- Chapter generation
- Sermon outline creation
- Devotional writing
- Scripture recommendations
- Tone-aware content rewriting

### Scripture Library
- Scripture organization
- Theme categorization
- Favorite verse tracking
- AI-powered scripture suggestions

### Templates
- Book chapter templates
- Sermon templates
- Devotional templates
- Bible study templates
- Prayer guide templates

### Analytics
- Writing progress tracking
- Voice consistency analysis
- Scripture usage insights
- AI activity monitoring

### Responsive Design
- Mobile-first experience
- Tablet optimization
- Desktop workspace
- Adaptive navigation

---

## Tech Stack

### Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Lucide React

### AI
- OpenAI API
- Custom prompt engineering
- Voice-aware content generation

### Deployment
- Vercel

---

## Project Structure

```
src/
├── app/
│   ├── (dashboard)/
│   │   ├── page.tsx
│   │   ├── assistant/
│   │   ├── analytics/
│   │   ├── interview/
│   │   ├── manuscript/
│   │   ├── settings/
│   │   ├── scripture-library/
│   │   ├── templates/
│   │   └── voice-profile/
│   └── api/
│       └── assistant/
│           └── route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ProfileCard.tsx
│   │   └── InspirationCard.tsx
│   └── AIChat.tsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/BethelHills/the-scribe.git
```

Navigate into the project:

```bash
cd the-scribe
```

Install dependencies:

```bash
npm install
```

Create an environment file:

```bash
touch .env.local
```

Add your OpenAI API key:

```env
OPENAI_API_KEY=your_api_key_here
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Development Roadmap

### Phase 1
- Core UI
- Responsive design
- AI integration
- Voice profiling

### Phase 2
- Supabase integration
- Authentication
- Manuscript storage
- User workspaces

### Phase 3
- Multi-author support
- Collaboration tools
- Advanced analytics
- Publishing workflows

---

## Mission

The Scribe exists to help Christian authors preserve their voice, communicate biblical truth effectively, and produce high-quality manuscripts with the assistance of modern AI technology.

---

## License

This project is intended for demonstration and evaluation purposes.

---

## Author

Bethel Hillary

Full-Stack Developer

Built with Next.js, TypeScript, Tailwind CSS, and AI-powered workflows.
