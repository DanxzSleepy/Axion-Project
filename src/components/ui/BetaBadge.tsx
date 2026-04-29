'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BetaBadge() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-20 left-1/2 -translate-x-1/2 z-40 bg-warning/10 border border-warning/30 rounded-full px-4 py-2 flex items-center gap-2 backdrop-blur-sm"
    >
      <AlertTriangle className="w-4 h-4 text-warning" />
      <span className="text-warning text-sm font-medium">{t.beta}</span>
    </motion.div>
  );
}
