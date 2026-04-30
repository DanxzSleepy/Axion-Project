'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, isAdmin } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { 
  Users, 
  ChevronLeft,
  Loader2,
  AlertTriangle,
  Search,
  Filter,
  User as UserIcon,
  Award
} from 'lucide-react';
import Link from 'next/link';

export default function UserManagement() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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
      fetchUsers();
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          id,
          username,
          display_name,
          nickname,
          role,
          created_at,
          user_stats (
            xp,
            rank_tier,
            total_workouts
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const filteredUsers = users.filter(user => 
    user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.display_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.nickname?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Users className="w-8 h-8 text-primary" />
          User Management
        </h1>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input 
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-card-hover transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/50 text-sm font-medium text-foreground/60">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">XP / Rank</th>
                <th className="px-6 py-4">Workouts</th>
                <th className="px-6 py-4">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <UserIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold">{user.display_name || user.username}</div>
                        <div className="text-xs text-foreground/50">{user.username}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      user.role === 'admin' 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'bg-foreground/5 text-foreground/50 border border-border'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-warning" />
                      <div>
                        <div className="font-bold">{user.user_stats?.[0]?.xp || 0} XP</div>
                        <div className="text-xs text-foreground/50">{user.user_stats?.[0]?.rank_tier || 'F'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {user.user_stats?.[0]?.total_workouts || 0}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground/60">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredUsers.length === 0 && (
          <div className="p-12 text-center text-foreground/50">
            No users found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
