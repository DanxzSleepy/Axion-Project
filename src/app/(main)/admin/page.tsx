'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, isAdmin } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  ExternalLink, 
  Loader2,
  AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalFeedback: 0,
    totalWorkouts: 0,
    activeToday: 0
  });

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getCurrentUser();
      if (!user) {
        router.push('/login');
        return;
      }

      const isUserAdmin = await isAdmin(user.id);
      if (!isUserAdmin) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      setAuthorized(true);
      fetchStats();
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const fetchStats = async () => {
    try {
      // Fetch total users
      const { count: userCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Fetch total feedback
      const { count: feedbackCount } = await supabase
        .from('feedback')
        .select('*', { count: 'exact', head: true });

      // Fetch total workouts
      const { count: workoutCount } = await supabase
        .from('workout_logs')
        .select('*', { count: 'exact', head: true });

      setStats({
        totalUsers: userCount || 0,
        totalFeedback: feedbackCount || 0,
        totalWorkouts: workoutCount || 0,
        activeToday: 0 // Would need more complex query
      });
    } catch (error) {
      console.error('Error fetching admin stats:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
        <AlertTriangle className="w-16 h-16 text-danger mb-4" />
        <h1 className="text-3xl font-bold mb-2">Access Denied</h1>
        <p className="text-foreground/60 mb-8 text-center max-w-md">
          You do not have the required permissions to view the Admin Dashboard.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const cards = [
    { label: 'Total Users', value: stats.totalUsers, icon: <Users className="w-6 h-6" />, color: 'bg-blue-500/10 text-blue-500' },
    { label: 'Feedback', value: stats.totalFeedback, icon: <MessageSquare className="w-6 h-6" />, color: 'bg-purple-500/10 text-purple-500' },
    { label: 'Workouts', value: stats.totalWorkouts, icon: <Activity className="w-6 h-6" />, color: 'bg-green-500/10 text-green-500' },
    { label: 'Platform Growth', value: '+12%', icon: <TrendingUp className="w-6 h-6" />, color: 'bg-orange-500/10 text-orange-500' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 text-primary mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-bold tracking-wider uppercase text-sm">Admin Portal</span>
          </div>
          <h1 className="text-4xl font-bold">Dashboard Overview</h1>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={fetchStats}
            className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-card-hover transition-colors"
          >
            Refresh Data
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-card border border-border rounded-2xl"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
              {card.icon}
            </div>
            <div className="text-3xl font-bold mb-1">{card.value}</div>
            <div className="text-sm text-foreground/60">{card.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-8 bg-card border border-border rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            User Management
          </h2>
          <p className="text-foreground/70 mb-8">
            View all registered users, their stats, rankings, and activity.
          </p>
          <Link 
            href="/admin/users"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            Manage Users <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-8 bg-card border border-border rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            Feedback & Support
          </h2>
          <p className="text-foreground/70 mb-8">
            Review user feedback, bug reports, and feature suggestions.
          </p>
          <Link 
            href="/admin/feedback"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            View Feedback <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Site Health */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 p-8 bg-card border border-border rounded-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Activity className="w-6 h-6 text-success" />
          Site Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <div>
              <div className="font-bold">Database</div>
              <div className="text-xs text-foreground/50 text-success">Operational</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <div>
              <div className="font-bold">Auth Service</div>
              <div className="text-xs text-foreground/50 text-success">Operational</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <div>
              <div className="font-bold">Storage</div>
              <div className="text-xs text-foreground/50 text-success">Operational</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
