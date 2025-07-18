import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
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
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Echoe ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Age Requirement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Echoe is designed for users aged 13 and older. Users under the age of 13 are not permitted to create accounts or use the Service. By creating an account, you represent that you are at least 13 years old.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Content and Pulse Bundles</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of all content you create and share on Echoe, including Pulse Bundles. By posting content, you grant Echoe a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content on the platform.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You are solely responsible for the content you post and must ensure it complies with our Community Guidelines and applicable laws.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Acceptable Use</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Post content that is illegal, harmful, threatening, abusive, or discriminatory</li>
                  <li>Infringe on the intellectual property rights of others</li>
                  <li>Spam, harass, or engage in any form of malicious behavior</li>
                  <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
                  <li>Use the Service for any commercial purpose without our express permission</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Pulse Marketplace</h2>
              <p className="text-muted-foreground leading-relaxed">
                When the Pulse Marketplace becomes available, additional terms will apply to the buying and selling of digital content, NFTs, and other items. These terms will be provided separately and incorporated by reference.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and access to the Service at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service is provided "as is" without any warranties, express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Echoe be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@echoe.com.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              By using Echoe, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;

