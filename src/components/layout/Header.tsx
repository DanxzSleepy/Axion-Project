'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, User } from 'lucide-react';
import { getCurrentUser, signOut } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    checkUser();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    router.push('/');
    router.refresh();
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tutorials', label: 'Tutorials' },
    { href: '/training', label: 'Training' },
    { href: '/skill-tree', label: 'Skill Tree' },
    { href: '/terminology', label: 'Terminology' },
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
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="px-4 py-2 bg-card hover:bg-card-hover border border-border rounded-lg transition-all flex items-center gap-2"
                >
                  <User className="w-4 h-4" /> Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-foreground/80 hover:text-danger transition-colors duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all duration-200 font-medium"
                >
                  Sign Up
                </Link>
              </>
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
                <div className="flex gap-3 mt-4 pt-4 border-t border-[#2a2a3e]">
                  {user ? (
                    <>
                      <Link
                        href="/profile"
                        className="flex-1 px-4 py-2 text-center bg-card hover:bg-card-hover border border-border rounded-lg transition-all flex items-center justify-center gap-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <User className="w-4 h-4" /> Profile
                      </Link>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsOpen(false);
                        }}
                        className="flex-1 px-4 py-2 text-center text-danger hover:bg-danger/10 rounded-lg transition-all"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="flex-1 px-4 py-2 text-center text-foreground/80 hover:text-primary transition-colors duration-200 border border-[#2a2a3e] rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="flex-1 px-4 py-2 text-center bg-primary hover:bg-primary-hover text-white rounded-lg transition-all duration-200 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </>
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
