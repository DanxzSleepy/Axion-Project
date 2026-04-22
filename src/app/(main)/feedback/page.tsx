'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageSquare, Bug, Lightbulb, Heart, Send, CheckCircle } from 'lucide-react';

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: 'general',
    message: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase or email service
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ type: 'general', message: '', email: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-4">Feedback & Support</h1>
        <p className="text-xl text-foreground/70 mb-12">
          Help us improve AXION! Share your feedback, report bugs, or suggest features.
        </p>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-success/10 border border-success/30 rounded-xl mb-8 flex items-center gap-3"
          >
            <CheckCircle className="w-6 h-6 text-success" />
            <div>
              <p className="font-medium text-success">Thank you!</p>
              <p className="text-sm text-foreground/70">Your feedback has been submitted successfully.</p>
            </div>
          </motion.div>
        )}

        {/* Feedback Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 bg-card border border-border rounded-xl mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Send Us Feedback</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Feedback Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'general', label: 'General', icon: <MessageSquare className="w-4 h-4" /> },
                  { value: 'bug', label: 'Bug Report', icon: <Bug className="w-4 h-4" /> },
                  { value: 'feature', label: 'Feature Request', icon: <Lightbulb className="w-4 h-4" /> },
                  { value: 'donate', label: 'Support Us', icon: <Heart className="w-4 h-4" /> }
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, type: type.value })}
                    className={`p-3 rounded-lg border transition-all flex flex-col items-center gap-2 ${
                      formData.type === type.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {type.icon}
                    <span className="text-sm">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full p-4 bg-background border border-border rounded-lg focus:border-primary focus:outline-none resize-none"
                placeholder={
                  formData.type === 'bug'
                    ? 'Describe the bug you encountered...'
                    : formData.type === 'feature'
                    ? 'What feature would you like to see?'
                    : 'Share your thoughts, suggestions, or questions...'
                }
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email (optional - for follow-up)
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg transition-all font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Feedback
            </button>
          </form>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">Social Media</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Follow us and send direct messages on any platform
              </p>
              <div className="space-y-2 text-sm">
                <p>📷 Instagram: @axion_calisthenics</p>
                <p>🐦 Twitter: @axion_fit</p>
                <p>💬 Discord: discord.gg/axion</p>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">Community</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Join our community discussions
              </p>
              <div className="space-y-2 text-sm">
                <p>💪 Reddit: r/axion_calisthenics</p>
                <p>📺 YouTube: AXION Calisthenics</p>
                <p>💻 GitHub: github.com/axion-project</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly will I receive a response?',
                a: 'We aim to respond to all feedback within 48 hours. Bug reports are prioritized and may be addressed sooner.'
              },
              {
                q: 'Can I contribute to the project?',
                a: 'Yes! AXION is open to community contributions. Check our GitHub repository for contribution guidelines.'
              },
              {
                q: 'How can I report a security vulnerability?',
                a: 'Please email us directly with details. We take security seriously and will address issues promptly.'
              },
              {
                q: 'Will AXION always be free?',
                a: 'The core features will always remain free. We may offer premium features in the future, but the essential training tools will stay accessible to everyone.'
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-foreground/70 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
