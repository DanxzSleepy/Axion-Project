import Link from 'next/link';
import { Mail, MessageSquare, Heart, AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#2a2a3e] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/tutorials" className="text-foreground/70 hover:text-primary transition-colors">Tutorials / Skills</Link></li>
              <li><Link href="/training" className="text-foreground/70 hover:text-primary transition-colors">Training Guides</Link></li>
              <li><Link href="/terminology" className="text-foreground/70 hover:text-primary transition-colors">Terminology</Link></li>
              <li><Link href="/skill-tree" className="text-foreground/70 hover:text-primary transition-colors">Skill Tree</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/how-to-use" className="text-foreground/70 hover:text-primary transition-colors">How to Use Site</Link></li>
              <li><Link href="/training/beginner-workout-structure" className="text-foreground/70 hover:text-primary transition-colors">Beginner Guide</Link></li>
              <li><Link href="/training/intermediate-workout-structure" className="text-foreground/70 hover:text-primary transition-colors">Intermediate Guide</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">About AXION</Link></li>
              <li><Link href="/terms" className="text-foreground/70 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@axion.com" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
              <li>
                <a href="https://github.com/DanxzSleepy" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.201 1.23.635-.177 1.313-.265 1.991-.265.678 0 1.356.088 1.991.265 1.192-1.553 2.199-1.23 2.199-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/feedback" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Feedback
                </Link>
              </li>
              <li>
                <a href="mailto:contact@axion.com" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <Heart className="w-4 h-4" /> Donate (Coming Soon)
                </a>
              </li>
              <li>
                <Link href="/feedback" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Report Issue
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Account Section */}
        <div className="border-t border-[#2a2a3e] pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Ready to start your calisthenics journey?</h3>
              <p className="text-foreground/70">Create an account and track your progress</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/login"
                className="px-6 py-3 border border-[#2a2a3e] hover:border-primary text-foreground rounded-lg transition-all duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all duration-200 font-medium"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2a2a3e] pt-8 text-center text-foreground/50">
          <p>&copy; 2026 AXION. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with passion for calisthenics community</p>
        </div>
      </div>
    </footer>
  );
}
