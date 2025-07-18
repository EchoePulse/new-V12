import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [pulseParticles, setPulseParticles] = useState([]);

  useEffect(() => {
    // Generate random pulse particles
    const particles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
    }));
    setPulseParticles(particles);
  }, []);

  return (
    <div className="min-h-screen pulse-background relative overflow-hidden">
      {/* Pulse Particles */}
      {pulseParticles.map((particle) => (
        <div
          key={particle.id}
          className="pulse-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-10 p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="echoe-logo text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Echoe
            </span>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mt-4 text-xl text-shimmer"
        >
          Share Your Pulse, Shape Your World
        </motion.p>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Core Explanation Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Your Platform for Authentic Digital Expression
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Echoe is where your unique digital voice finds its rhythm. Discover, create, and share your distinct aesthetic – your Pulse – in a vibrant community built for true connection and creative growth.
          </p>
        </motion.section>

        {/* Three Main Pillars */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Pillar 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="echoe-card hover-glow"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Craft Your Living Billboard</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Transform your profile into a dynamic, themeable showcase for your art, brand, portfolio, or personal vision. Combine photos, videos, sounds, and text into immersive Pulse Bundles. This is where all types of artists take full control of their creative expression.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="echoe-card hover-glow"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Discover Your Authentic Community</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Tired of generic feeds? Explore a living stream of Pulses matched to your mood. Find creators and content that truly understand your vibe. Experience discovery driven by emotion, not just algorithms or fleeting trends.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="echoe-card hover-glow"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Amplify Your Creative Impact</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Turn your passion into profit and take full control of your art's value. Offer exclusive content to members, license your beats, and sell your digital products, physical goods, and unique Pulse NFTs in a dedicated, curated marketplace.
            </p>
          </motion.div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="space-y-6">
            <Link
              to="/sign_up"
              className="echoe-button inline-block text-lg px-12 py-4 hover-glow"
            >
              Join Echoe
            </Link>
            
            <div className="text-muted-foreground">
              <Link
                to="/sign_in"
                className="hover:text-accent transition-colors duration-300 underline decoration-accent/30 hover:decoration-accent"
              >
                Already have an account? Log In
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 py-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Echoe. All rights reserved.
          </p>
          <div className="mt-4 space-x-6 text-sm">
            <Link to="/terms_of_service" className="text-muted-foreground hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy_policy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/community_guidelines" className="text-muted-foreground hover:text-accent transition-colors">
              Community Guidelines
            </Link>
            <Link to="/support" className="text-muted-foreground hover:text-accent transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

