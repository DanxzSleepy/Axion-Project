'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, isAdmin } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { 
  MessageSquare, 
  ChevronLeft,
  Loader2,
  AlertTriangle,
  Mail,
  Calendar,
  Tag,
  CheckCircle,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function FeedbackManagement() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [feedback, setFeedback] = useState<any[]>([]);

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
      fetchFeedback();
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const fetchFeedback = async () => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFeedback(data || []);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'bug': return 'bg-danger/10 text-danger border-danger/20';
      case 'feature': return 'bg-primary/10 text-primary border-primary/20';
      case 'content': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-foreground/5 text-foreground/50 border-border';
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
        <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg font-medium">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/admin"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-4"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-primary" />
          Feedback & Support
        </h1>
      </div>

      <div className="space-y-6">
        {feedback.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-6 bg-card border border-border rounded-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTypeColor(item.type)}`}>
                  {item.type}
                </span>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  {new Date(item.created_at).toLocaleString()}
                </div>
                {item.email && (
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Mail className="w-4 h-4" />
                    {item.email}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/40 hover:text-success" title="Mark as Resolved">
                  <CheckCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap bg-background/50 p-4 rounded-xl border border-border">
              {item.message}
            </p>
          </motion.div>
        ))}

        {feedback.length === 0 && (
          <div className="p-12 text-center text-foreground/50 bg-card border border-border rounded-2xl">
            <Clock className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-xl">No feedback received yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
