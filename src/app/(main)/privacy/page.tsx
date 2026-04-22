'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-foreground/60 mb-8">Last updated: April 22, 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We collect information that you provide directly to us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li><strong>Account Information:</strong> Email address, username, password</li>
              <li><strong>Profile Data:</strong> Avatar, bio, fitness level</li>
              <li><strong>Training Data:</strong> Workout logs, skill progress, achievements</li>
              <li><strong>Usage Data:</strong> How you interact with the Platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Provide, maintain, and improve the Platform</li>
              <li>Personalize your training experience</li>
              <li>Track your progress and generate insights</li>
              <li>Communicate with you about updates and features</li>
              <li>Ensure platform security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Data Storage & Security</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Your data is stored securely using Supabase, a trusted database provider. We implement 
              industry-standard security measures including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Encryption of data in transit and at rest</li>
              <li>Row-level security policies</li>
              <li>Regular security audits</li>
              <li>Secure authentication systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We do NOT sell your personal information. We may share data only in these circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li><strong>With your consent:</strong> When you explicitly agree to sharing</li>
              <li><strong>Leaderboards:</strong> Username and rank may be visible to other users (optional)</li>
              <li><strong>Legal requirements:</strong> If required by law or to protect rights</li>
              <li><strong>Service providers:</strong> Trusted third parties who help us operate (bound by confidentiality)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt-out of non-essential communications</li>
              <li>Disable public visibility of your profile</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies & Analytics</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use essential cookies for authentication and platform functionality. We may use 
              analytics tools to understand how users interact with the Platform to improve the 
              experience. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              AXION is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13. If we learn we have collected such information, 
              we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
            <p className="text-foreground/80 leading-relaxed">
              We retain your data as long as your account is active. If you delete your account, 
              we will remove your personal information within 30 days, except where retention is 
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant 
              changes by email or through a prominent notice on the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions about this Privacy Policy or your data, please contact us 
              through the feedback feature or our social media channels.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
