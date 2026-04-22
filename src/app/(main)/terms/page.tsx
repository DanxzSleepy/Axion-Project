'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-foreground/60 mb-8">Last updated: April 22, 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              By accessing and using AXION ("the Platform"), you accept and agree to be bound by these 
              Terms and Conditions. If you do not agree to these terms, please do not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              AXION provides a calisthenics training platform that includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Training tutorials and exercise guides</li>
              <li>Workout logging and progress tracking</li>
              <li>Skill progression tracking</li>
              <li>AI-powered training recommendations (coming soon)</li>
              <li>Community features and leaderboards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              To access certain features, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Use the Platform for any illegal purposes</li>
              <li>Share false or misleading information</li>
              <li>Attempt to gain unauthorized access to other users' accounts</li>
              <li>Use automated systems to access the Platform without permission</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Distribute malware or harmful code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Health Disclaimer</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>IMPORTANT:</strong> The content provided on AXION is for informational purposes 
              only and is not medical advice. Always consult with a qualified healthcare professional 
              before beginning any exercise program.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Calisthenics involves physical activity that carries inherent risks. By using this 
              Platform, you acknowledge that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>You participate in all exercises at your own risk</li>
              <li>AXION is not liable for any injuries or damages</li>
              <li>You should stop immediately if you experience pain or discomfort</li>
              <li>You are responsible for listening to your body and training safely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              All content, features, and functionality of AXION, including but not limited to text, 
              graphics, logos, and software, are the exclusive property of AXION and are protected 
              by intellectual property laws. You may not reproduce, distribute, or create derivative 
              works without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              AXION shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages resulting from your use or inability to use the Platform, including 
              but not limited to loss of data, training progress, or access to features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Beta Status</h2>
            <p className="text-foreground/80 leading-relaxed">
              AXION is currently in beta. Features may change, be removed, or be modified without 
              notice. We appreciate your feedback and patience as we improve the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to terminate or suspend your account at our sole discretion, 
              without notice, for conduct that we believe violates these Terms or is harmful to 
              other users or the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may modify these Terms at any time. Continued use of the Platform after changes 
              constitutes acceptance of the new Terms. We will notify users of significant changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions about these Terms, please contact us through the feedback feature 
              or via our social media channels.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
