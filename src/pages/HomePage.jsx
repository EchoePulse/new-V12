import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Bookmark, Flame } from 'lucide-react';
import Navigation from '../components/ui/Navigation';

const HomePage = () => {
  const [selectedMood, setSelectedMood] = useState('all');
  const [pulseParticles, setPulseParticles] = useState([]);

  const moods = [
    { id: 'all', name: 'All Vibes', color: 'slate' },
    { id: 'creative', name: 'Creative', color: 'blue' },
    { id: 'chill', name: 'Chill', color: 'purple' },
    { id: 'energetic', name: 'Energetic', color: 'red' },
    { id: 'focused', name: 'Focused', color: 'gold' },
  ];

  const mockBundles = [
    {
      id: 1,
      title: 'Midnight City Vibes',
      creator: 'alexcreates',
      mood: 'creative',
      description: 'Capturing the essence of urban nights through photography and ambient sounds.',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop',
      likes: 234,
      comments: 18,
      tags: ['photography', 'urban', 'night'],
    },
    {
      id: 2,
      title: 'Morning Meditation',
      creator: 'zenmaster',
      mood: 'chill',
      description: 'A peaceful collection of morning rituals and mindfulness practices.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      likes: 156,
      comments: 12,
      tags: ['meditation', 'peaceful', 'morning'],
    },
    {
      id: 3,
      title: 'Beat Drop Energy',
      creator: 'musicproducer',
      mood: 'energetic',
      description: 'High-energy beats and visual effects that make you want to move.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      likes: 892,
      comments: 45,
      tags: ['music', 'energy', 'beats'],
    },
  ];

  useEffect(() => {
    // Generate ambient pulse particles
    const particles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      size: Math.random() * 3 + 2,
    }));
    setPulseParticles(particles);
  }, []);

  const getMoodClass = (mood) => {
    const moodClasses = {
      blue: 'mood-blue',
      purple: 'mood-purple',
      red: 'mood-red',
      gold: 'mood-gold',
      slate: 'mood-slate',
    };
    return moodClasses[mood] || 'mood-slate';
  };

  const BundleCard = ({ bundle }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="echoe-card hover-glow cursor-pointer"
    >
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <img
          src={bundle.image}
          alt={bundle.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
            <Flame size={16} />
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{bundle.title}</h3>
            <p className="text-sm text-muted-foreground">by @{bundle.creator}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodClass(bundle.mood)} text-white`}>
            {bundle.mood}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm">{bundle.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {bundle.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-border/30">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-muted-foreground hover:text-accent transition-colors">
              <Heart size={16} />
              <span className="text-sm">{bundle.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-muted-foreground hover:text-accent transition-colors">
              <MessageCircle size={16} />
              <span className="text-sm">{bundle.comments}</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-muted-foreground hover:text-accent transition-colors">
              <Share size={16} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-accent transition-colors">
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen ${getMoodClass(selectedMood === 'all' ? 'slate' : selectedMood)} relative`}>
      {/* Ambient Pulse Particles */}
      {pulseParticles.map((particle) => (
        <div
          key={particle.id}
          className="pulse-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      <Navigation />

      <main className="pt-20 pb-24 md:pt-24 md:pb-8 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Living PulseBoard</h1>
          <p className="text-muted-foreground">Discover content that matches your current vibe</p>
        </motion.div>

        {/* Mood Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedMood === mood.id
                    ? `${getMoodClass(mood.color)} text-white shadow-lg scale-105`
                    : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {mood.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Daily Pulse Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="echoe-card mb-8 text-center hover-glow cursor-pointer"
        >
          <h3 className="text-lg font-semibold mb-2">Today's Pulse Prompt</h3>
          <p className="text-muted-foreground mb-4">
            "Share a moment that made you feel truly alive today"
          </p>
          <button className="echoe-button-secondary">
            Create Your Pulse
          </button>
        </motion.div>

        {/* Echo Feed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mockBundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <BundleCard bundle={bundle} />
            </motion.div>
          ))}
        </motion.div>

        {/* Global Pulse Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card/50 rounded-full border border-border/30">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              1,247 creators sharing their pulse right now
            </span>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;

