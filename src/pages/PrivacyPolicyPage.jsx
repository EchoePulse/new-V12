import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen pulse-background">
      {/* Header */}
      <header className="p-4 border-b border-border/30 bg-background/80 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="echoe-card"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Account Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you create an account, we collect your username, email address, date of birth (for age verification), and password. We may also collect optional profile information such as your display name, bio, and profile picture.
                </p>
                
                <h3 className="text-lg font-medium">Content and Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect the content you create and share on Echoe, including Pulse Bundles, comments, reactions, and interactions with other users' content. We also collect usage data such as pages visited, features used, and time spent on the platform.
                </p>
                
                <h3 className="text-lg font-medium">Device and Technical Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We automatically collect certain technical information, including your IP address, browser type, device type, operating system, and unique device identifiers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide and maintain the Echoe service</li>
                  <li>Personalize your experience and content recommendations</li>
                  <li>Enable communication between users</li>
                  <li>Ensure platform safety and security</li>
                  <li>Analyze usage patterns to improve our service</li>
                  <li>Send important updates and notifications</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>With other users when you choose to share content publicly</li>
                  <li>With service providers who help us operate the platform</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Your Rights and Choices</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Control your privacy settings</li>
                  <li>Opt out of certain communications</li>
                  <li>Request a copy of your data</li>
                  <li>Object to certain processing activities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Echoe may integrate with third-party services for features like social media sharing or payment processing. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Echoe is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will delete your personal information, though some information may be retained for legal or safety purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes via email or through the service. Your continued use of Echoe after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@echoe.com or through our contact form.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              Your privacy matters to us. We are committed to protecting your personal information and being transparent about our data practices.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;

