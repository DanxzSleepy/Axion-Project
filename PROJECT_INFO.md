# AXION - Calisthenics Training Platform

## 🚀 Project Overview

AXION is a complete calisthenics training platform featuring:
- **AI-Powered Training** - Personalized workout plans (coming soon with OpenAI)
- **Skill Progression Tracking** - Interactive skill tree with prerequisites
- **Comprehensive Tutorials** - Detailed guides for every calisthenics movement
- **Workout Logging** - Track your training sessions and progress
- **Gamification** - XP, rankings, and streak tracking
- **Terminology Guide** - Complete reference for calisthenics terms

## 🛠️ Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database & Auth:** Supabase
- **Icons:** Lucide React
- **AI:** OpenAI API (pending setup)
- **Deployment:** Vercel (pending setup)

## 📁 Project Structure

```
Axion-Project/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication pages
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (main)/            # Main application pages
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── tutorials/     # Tutorials & Skills
│   │   │   ├── training/      # AI Training
│   │   │   ├── skill-tree/    # Skill Progression
│   │   │   └── terminology/   # Terminology Guide
│   │   ├── profile/           # User Profile
│   │   ├── auth/callback/     # OAuth callback
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── ui/                # UI components
│   │   └── features/          # Feature components
│   ├── lib/                   # Utilities
│   │   ├── supabase.ts        # Supabase client
│   │   ├── auth.ts            # Auth helper functions
│   │   └── exercises.ts       # Exercise data
│   └── types/                 # TypeScript types
├── supabase/
│   └── schema.sql             # Database migration
├── .env.local                 # Environment variables (gitignored)
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account and project

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd Axion-Project
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the database migration:**
- Go to your Supabase dashboard
- Navigate to SQL Editor
- Copy the contents of `supabase/schema.sql`
- Paste and run in the SQL Editor

5. **Start the development server:**
```bash
npm run dev
```

6. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The project uses the following tables:

- **profiles** - User profile information
- **workout_logs** - Training session records
- **workout_exercises** - Individual exercises within workouts
- **skill_progress** - User skill progression tracking
- **user_stats** - Streaks, XP, rankings, and consistency

All tables have Row Level Security (RLS) policies to ensure users can only access their own data.

## 🔐 Authentication

The platform supports:
- Email/Password authentication
- Google OAuth (requires additional setup)
- Automatic profile creation on signup
- Protected routes for authenticated users

## 🎨 Features

### Completed ✅
- Home page with hero section and site overview
- Tutorials page with exercise categories and detailed modals
- Terminology page with abbreviations and difficulty rankings
- Training page with manual guides (AI placeholder ready)
- Skill tree with progression paths
- User authentication (email/password)
- Profile page with stats tracking
- Workout logging UI
- Responsive design for all screen sizes
- Dark theme with custom color palette
- Framer Motion animations throughout

### Pending 🚧
- OpenAI integration for AI-powered training
- Google OAuth setup
- Vercel deployment
- Advanced profile customization
- Social features (leaderboards, sharing)
- YouTube video integration in tutorials

## 📝 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Component-based architecture
- Server and client components as appropriate

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Detailed deployment instructions will be provided when ready.

## 🤝 Contributing

This is a personal project, but contributions and feedback are welcome!

## 📄 License

All rights reserved © 2026 AXION

## 👤 Creator

Created by DanxzSleepy

- GitHub: [@DanxzSleepy](https://github.com/DanxzSleepy)

## 🙏 Acknowledgments

- Inspired by wingssw.com
- Built for the calisthenics community
- Powered by modern web technologies

---

**Status:** MVP Complete - Core functionality implemented and ready for testing!
