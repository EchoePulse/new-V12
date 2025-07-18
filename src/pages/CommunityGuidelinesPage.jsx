import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Heart, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityGuidelinesPage = () => {
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
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Community Guidelines</h1>
            <p className="text-muted-foreground">Building a positive and creative community together</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
                <h2 className="text-xl font-semibold">Our Community Values</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Echoe is built on the foundation of authentic creative expression and meaningful connections. We believe in fostering a community where artists, creators, and enthusiasts can share their unique "Pulse" while respecting and celebrating the diversity of others.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">1. Be Authentic and Original</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Share content that represents your genuine creative voice. While inspiration from others is natural, always give credit where it's due and avoid copying or plagiarizing others' work.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Create original Pulse Bundles that reflect your unique perspective</li>
                  <li>Credit collaborators, inspirations, and sources appropriately</li>
                  <li>Respect intellectual property rights and copyright laws</li>
                  <li>Use your real identity or a consistent creative persona</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Respect and Kindness</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Treat all community members with respect, regardless of their background, experience level, or creative style. Constructive feedback is welcome, but personal attacks are not.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Engage in constructive and supportive discussions</li>
                  <li>Provide helpful feedback when commenting on others' work</li>
                  <li>Respect different artistic styles and creative approaches</li>
                  <li>Be patient with new community members</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Content Standards</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  We encourage creative freedom while maintaining a safe environment for all users. Content should be appropriate for a diverse, global audience.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-green-400 mb-2">✓ Encouraged Content</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm ml-4">
                    <li>Original artwork, photography, and visual creations</li>
                    <li>Music, audio experiences, and sound design</li>
                    <li>Creative writing and storytelling</li>
                    <li>Behind-the-scenes content and creative processes</li>
                    <li>Collaborative projects and community challenges</li>
                    <li>Educational content about creative techniques</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-red-400 mb-2">✗ Prohibited Content</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm ml-4">
                    <li>Hate speech, discrimination, or harassment</li>
                    <li>Explicit sexual content or nudity</li>
                    <li>Violence, threats, or harmful content</li>
                    <li>Spam, misleading information, or scams</li>
                    <li>Content that infringes on others' rights</li>
                    <li>Illegal activities or dangerous behavior</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Pulse Marketplace Ethics</h2>
              <p className="text-muted-foreground leading-relaxed">
                When the Pulse Marketplace launches, additional guidelines will apply to commercial activities. We expect all transactions to be conducted honestly and fairly, with clear descriptions of digital products and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Privacy and Safety</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Protect your own privacy and respect others' privacy. Never share personal information without consent.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Don't share others' personal information without permission</li>
                  <li>Be cautious about sharing your own personal details</li>
                  <li>Report suspicious or harmful behavior immediately</li>
                  <li>Use privacy settings to control who can see your content</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-semibold">Reporting and Enforcement</h2>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  If you encounter content or behavior that violates these guidelines, please report it using our reporting tools. We review all reports and take appropriate action.
                </p>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-yellow-400 mb-2">Enforcement Actions</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm ml-4">
                    <li>Content removal or restriction</li>
                    <li>Temporary account suspension</li>
                    <li>Permanent account termination</li>
                    <li>Restriction from certain features</li>
                    <li>Warning notifications</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Appeals Process</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you believe your content was removed or your account was restricted in error, you can appeal our decision through our support channels. We will review appeals fairly and respond promptly.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-semibold">Building Together</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                These guidelines evolve with our community. We welcome feedback and suggestions for improving our platform and fostering an even better creative environment. Together, we can build a space where every creator's Pulse can shine.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Contact and Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these guidelines or to report violations, contact us at community@echoe.com or use the in-app reporting features.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              Thank you for helping us maintain a positive, creative, and inspiring community for all Echoe users.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CommunityGuidelinesPage;

