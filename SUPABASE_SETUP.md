# Supabase Database Setup Instructions

## What You Need to Do:

### **Where to Go:**
1. Visit: **https://zxkfqxddvqjsnyqvylss.supabase.co**
2. Or go to https://supabase.com and select your "axion" project

### **Simple Step-by-Step:**

**Step 1: Open SQL Editor**
1. In your Supabase dashboard, look at the left sidebar
2. Click on **"SQL Editor"** (it looks like a database icon)
3. You'll see a text editor area

**Step 2: Run the Migration**
1. Open the file: `supabase/schema.sql` in your project
2. Copy ALL the content from that file
3. Paste it into the SQL Editor in Supabase
4. Click the **"Run"** button (or press Ctrl+Enter)
5. Wait for it to complete (should take 2-3 seconds)
6. You should see success messages

**Step 3: Verify Tables Were Created**
1. In the left sidebar, click on **"Table Editor"** (database icon)
2. You should see these tables:
   - `profiles`
   - `workout_logs`
   - `workout_exercises`
   - `skill_progress`
   - `user_stats`
3. If you see all 5 tables, you're done! ✅

**Step 4: Enable Email Auth (Optional but Recommended)**
1. Go to **Authentication** > **Providers** in the left sidebar
2. Click on **"Email"**
3. Make sure it's **Enabled** (toggle should be on)
4. You can disable email confirmation if you want users to sign up instantly:
   - Go to **Authentication** > **Settings**
   - Toggle OFF **"Enable email confirmations"** (optional)

**Step 5: Enable Google Auth (Optional)**
1. Go to **Authentication** > **Providers**
2. Click on **"Google"**
3. Toggle it **ON**
4. You'll need to add Google OAuth credentials (we can do this later)

### **What to Send Back:**
Just tell me **"continuar"** once you've run the SQL migration and I'll continue setting up the authentication connection!

---

## What This Does:
The SQL migration creates:
- **profiles** - Stores user information (username, avatar, bio)
- **workout_logs** - Stores each workout session
- **workout_exercises** - Stores exercises within each workout
- **skill_progress** - Tracks which skills you've unlocked/completed
- **user_stats** - Tracks streaks, XP, rank, and consistency

It also sets up:
- Security policies (users can only see their own data)
- Automatic profile creation when someone signs up
- Automatic timestamp updates
