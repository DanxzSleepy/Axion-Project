# Database Migration Instructions

## Overview
This migration enhances your AXION database with:
- Enhanced profile fields (display name, nickname, bio, favorites, saved guides)
- Real XP/progression system with rank tiers (F, D, C, B, A, S, SS)
- Automatic streak tracking and XP rewards
- Community-ready profile structure
- Public leaderboard view

## How to Run Migration

### Option 1: Supabase Dashboard (Recommended)

1. **Go to your Supabase project**
   - URL: https://zxkfqxddvqjsnyqvylss.supabase.co
   - Login with your credentials

2. **Open SQL Editor**
   - Click "SQL Editor" in the left sidebar
   - Click the "+ New query" button at the top right

3. **Copy and paste the migration SQL**
   - Open the file: `supabase/migration_enhanced_profile.sql`
   - Select ALL the SQL code (Ctrl+A)
   - Copy it (Ctrl+C)
   - Paste into the SQL Editor (Ctrl+V)

4. **Run the migration**
   - Click the "Run" button (or press Ctrl+Enter)
   - Wait for execution (should take 2-5 seconds)

5. **Verify success**
   - You should see multiple "Success. No rows returned" messages
   - Check that NO errors appear in red text
   - If you see errors, screenshot them and share

6. **Test the migration**
   - Go to "Table Editor" in the left sidebar
   - Click on "profiles" table
   - You should see new columns: display_name, nickname, level, favorite_exercises, saved_guides, etc.
   - Click on "user_stats" table
   - You should see new column: rank_tier, milestones_achieved, skills_unlocked, community_reputation

### Option 2: Supabase CLI (Advanced)

If you have Supabase CLI installed:

```bash
supabase db push
```

## What This Migration Does

### 1. Enhanced Profiles Table
Adds columns:
- `display_name` - User's chosen display name
- `nickname` - Unique nickname/handle (auto-generated on signup)
- `level` - Calculated from XP (1 XP = 1 level per 100 XP)
- `favorite_exercises` - Array of favorite exercise IDs
- `saved_guides` - Array of saved training guide slugs
- `social_links` - JSON object for future social features
- `is_public` - Privacy toggle for community features
- `joined_community` - Flag for future community features

### 2. Enhanced User Stats Table
Adds columns:
- `rank_tier` - Current rank (F, D, C, B, A, S, SS)
- `milestones_achieved` - Array of milestone IDs
- `skills_unlocked` - Count of unlocked skills
- `community_reputation` - Reputation score for future features

### 3. XP & Ranking System
Creates functions:
- `calculate_rank(xp)` - Returns rank tier based on XP
- `calculate_level(xp)` - Returns level number based on XP
- `award_xp(user_id, amount, reason)` - Awards XP and auto-updates rank/level

**XP Rewards:**
- Logging workout: 50 XP
- First workout: 100 XP (bonus)
- 7-day streak: 100 XP (bonus)
- 14-day streak: 150 XP (bonus)
- 30-day streak: 200 XP (bonus)
- Unlocking skill: 100 XP
- Completing profile: 75 XP

**Rank Tiers:**
- F: 0-199 XP (Beginner)
- D: 200-499 XP (Novice)
- C: 500-999 XP (Apprentice)
- B: 1,000-2,499 XP (Practitioner)
- A: 2,500-4,999 XP (Athlete)
- S: 5,000-9,999 XP (Master)
- SS: 10,000+ XP (Grandmaster)

### 4. Automatic Triggers
- `on_workout_logged` - Automatically updates streak and awards XP when workout is logged
- `on_workout_for_consistency` - Calculates 30-day consistency percentage

### 5. Community Features (Future-Ready)
- `leaderboard` view - Public leaderboard showing top users by XP
- RLS policies for public profile visibility
- Privacy controls (is_public flag)

## After Migration

Once the migration is complete:

1. **Tell me**: "Migration complete" or share any errors
2. **I will**: Continue with the remaining work
3. **You can test**: Login to your app and check your profile page - it should now show XP, level, rank, and edit functionality

## Rollback (If Needed)

If something goes wrong, you can rollback by:
1. Going to Supabase Dashboard
2. Opening SQL Editor
3. Running the rollback SQL (contact me for rollback script)

## Questions?

If you encounter any issues during migration:
1. Take a screenshot of the error
2. Share it with me
3. I'll help you resolve it
