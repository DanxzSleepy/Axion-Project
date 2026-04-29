'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageSquare, Bug, Lightbulb, Heart, Send, CheckCircle, Users, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/lib/supabase';
import { getCurrentUser } from '@/lib/auth';
import { useEffect } from 'react';

export default function FeedbackPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    type: 'general',
    message: '',
    email: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      if (currentUser?.email) {
        setFormData(prev => ({ ...prev, email: currentUser.email! }));
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('feedback').insert({
        user_id: user?.id || null,
        email: formData.email,
        type: formData.type,
        message: formData.message
      });

      if (error) throw error;

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ ...formData, message: '' });
    } catch (err) {
      console.error('Error submitting feedback:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-4">{t.feedback.title}</h1>
        <p className="text-xl text-foreground/70 mb-12">
          {t.feedback.subtitle}
        </p>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-success/10 border border-success/30 rounded-xl mb-8 flex items-center gap-3"
          >
            <CheckCircle className="w-6 h-6 text-success" />
            <div>
              <p className="font-medium text-success">{t.common.success}!</p>
              <p className="text-sm text-foreground/70">{t.feedback.success}</p>
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
          <h2 className="text-2xl font-bold mb-6">{t.feedback.submitButton}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t.feedback.typeLabel}</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'general', label: t.feedback.typeGeneral, icon: <MessageSquare className="w-4 h-4" /> },
                  { value: 'bug', label: t.feedback.typeBug, icon: <Bug className="w-4 h-4" /> },
                  { value: 'feature', label: t.feedback.typeFeature, icon: <Lightbulb className="w-4 h-4" /> },
                  { value: 'content', label: t.feedback.typeContent, icon: <Users className="w-4 h-4" /> }
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
                    <span className="text-xs text-center font-medium leading-tight">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t.feedback.messageLabel} *
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
                    ? t.feedback.placeholderBug
                    : formData.type === 'feature'
                    ? t.feedback.placeholderFeature
                    : t.feedback.placeholderGeneral
                }
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t.auth.emailLabel} ({t.common.optional})
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none"
                placeholder={t.auth.emailPlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.feedback.submitting}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t.feedback.submitButton}
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">{t.feedback.otherWays}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">{t.feedback.socialMedia}</h3>
              <p className="text-foreground/70 text-sm mb-4">
                {t.feedback.socialMediaDesc}
              </p>
              <div className="space-y-2 text-sm text-foreground/60">
                <p>📷 Instagram: @axion_calisthenics</p>
                <p>🐦 Twitter: @axion_fit</p>
                <p>💬 Discord: discord.gg/axion</p>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-bold mb-2">{t.common.community}</h3>
              <p className="text-foreground/70 text-sm mb-4">
                {t.community.subtitle}
              </p>
              <div className="space-y-2 text-sm text-foreground/60">
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
          <h2 className="text-2xl font-bold mb-6">{t.feedback.faqTitle}</h2>
          <div className="space-y-4">
            {t.feedback.faq.map((faq, index) => (
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
