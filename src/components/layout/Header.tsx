'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, User, Languages } from 'lucide-react';
import { getCurrentUser, signOut } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check initial user
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      if (_event === 'SIGNED_IN') router.refresh();
      if (_event === 'SIGNED_OUT') {
        router.push('/');
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    router.push('/');
    router.refresh();
  };

  const navLinks = [
    { href: '/', label: t.common.home },
    { href: '/tutorials', label: t.common.tutorials },
    { href: '/training', label: t.common.training },
    { href: '/skill-tree', label: t.common.skillTree },
    { href: '/terminology', label: t.common.terminology },
    { href: '/community', label: t.common.community },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-[#2a2a3e]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Dumbbell className="w-8 h-8 text-primary" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AXION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: Language + Auth */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-card border border-border rounded-lg p-1">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 text-xs font-bold rounded ${language === 'pt' ? 'bg-primary text-white' : 'text-foreground/60 hover:text-foreground'}`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-bold rounded ${language === 'en' ? 'bg-primary text-white' : 'text-foreground/60 hover:text-foreground'}`}
              >
                EN
              </button>
            </div>

            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/profile"
                  className="px-4 py-2 bg-card hover:bg-card-hover border border-border rounded-lg transition-all flex items-center gap-2"
                >
                  <User className="w-4 h-4" /> {t.common.profile}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-foreground/80 hover:text-danger transition-colors duration-200 font-medium"
                >
                  {t.common.logout}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {t.common.login}
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all duration-200 font-medium"
                >
                  {t.common.register}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#2a2a3e]">
                  {/* Mobile Language Switcher */}
                  <div className="flex items-center justify-between p-2 bg-card border border-border rounded-lg mb-2">
                    <span className="text-sm font-medium text-foreground/60">Language / Idioma</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setLanguage('pt')}
                        className={`px-3 py-1 text-sm font-bold rounded ${language === 'pt' ? 'bg-primary text-white' : 'text-foreground/60'}`}
                      >
                        PT
                      </button>
                      <button
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-1 text-sm font-bold rounded ${language === 'en' ? 'bg-primary text-white' : 'text-foreground/60'}`}
                      >
                        EN
                      </button>
                    </div>
                  </div>

                  {user ? (
                    <div className="flex gap-3">
                      <Link
                        href="/profile"
                        className="flex-1 px-4 py-2 text-center bg-card hover:bg-card-hover border border-border rounded-lg transition-all flex items-center justify-center gap-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="w-4 h-4" /> {t.common.profile}
                      </Link>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsOpen(false);
                        }}
                        className="flex-1 px-4 py-2 text-center text-danger hover:bg-danger/10 rounded-lg transition-all font-medium"
                      >
                        {t.common.logout}
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <Link
                        href="/login"
                        className="flex-1 px-4 py-2 text-center text-foreground/80 hover:text-primary transition-colors duration-200 border border-[#2a2a3e] rounded-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.common.login}
                      </Link>
                      <Link
                        href="/register"
                        className="flex-1 px-4 py-2 text-center bg-primary hover:bg-primary-hover text-white rounded-lg transition-all duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.common.register}
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
