import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Edit, Plus, Grid, Bookmark, Lock, ExternalLink } from 'lucide-react';
import Navigation from '../components/ui/Navigation';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('bundles');

  const user = {
    username: 'your_username',
    displayName: 'Your Creative Name',
    bio: 'Digital artist exploring the intersection of technology and emotion. Creating immersive experiences through visual storytelling.',
    followers: 1247,
    following: 892,
    bundles: 23,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=300&fit=crop',
    verified: true,
    currentMood: 'creative',
  };

  const tabs = [
    { id: 'bundles', name: 'My Pulse Bundles', icon: Grid },
    { id: 'saved', name: 'Saved Pulses', icon: Bookmark },
    { id: 'exclusive', name: 'Membership Exclusives', icon: Lock },
  ];

  const userBundles = [
    {
      id: 1,
      title: 'Digital Dreams',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop',
      likes: 234,
      views: '1.2K',
      mood: 'creative',
    },
    {
      id: 2,
      title: 'Sunset Reflections',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      likes: 156,
      views: '890',
      mood: 'chill',
    },
    {
      id: 3,
      title: 'Urban Energy',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      likes: 892,
      views: '3.4K',
      mood: 'energetic',
    },
  ];

  const getMoodClass = (mood) => {
    const moodClasses = {
      creative: 'mood-blue',
      chill: 'mood-purple',
      energetic: 'mood-red',
      focused: 'mood-gold',
    };
    return moodClasses[mood] || 'mood-slate';
  };

  const BundleCard = ({ bundle }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer"
    >
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={bundle.image}
          alt={bundle.title}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center">
              <p className="font-medium">{bundle.likes} likes</p>
              <p className="text-sm">{bundle.views} views</p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <button className="p-1 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Edit size={14} />
          </button>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-sm">{bundle.title}</h3>
      </div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen ${getMoodClass(user.currentMood)}`}>
      <Navigation />

      <main className="pt-20 pb-24 md:pt-24 md:pb-8">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64">
          <img
            src={user.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Settings Button */}
          <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
            <Settings size={20} />
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative -mt-16 md:-mt-20"
          >
            <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background object-cover"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
              </div>

              {/* User Info */}
              <div className="text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <h1 className="text-2xl font-bold">{user.displayName}</h1>
                  {user.verified && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mb-2">@{user.username}</p>
                <p className="text-sm max-w-md">{user.bio}</p>
              </div>

              {/* Edit Profile Button */}
              <button className="echoe-button-secondary flex items-center space-x-2">
                <Edit size={16} />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start space-x-8 mt-6 pt-6 border-t border-border/30">
              <div className="text-center">
                <p className="text-xl font-bold">{user.bundles}</p>
                <p className="text-sm text-muted-foreground">Bundles</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{user.followers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{user.following}</p>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
            </div>
          </motion.div>

          {/* Create New Bundle CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 mb-8"
          >
            <div className="echoe-card text-center hover-glow cursor-pointer">
              <Plus className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">Create New Bundle</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Share your latest pulse with the community
              </p>
              <button className="echoe-button">Start Creating</button>
            </div>
          </motion.div>

          {/* Pulse Creation Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="echoe-card">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Pulse Creation Streak</h3>
                  <p className="text-muted-foreground text-sm">Keep the creative momentum going!</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">7</p>
                  <p className="text-xs text-muted-foreground">days</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="flex space-x-4 border-b border-border/30">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 font-medium transition-all duration-300 border-b-2 ${
                      activeTab === tab.id
                        ? 'text-accent border-accent'
                        : 'text-muted-foreground border-transparent hover:text-accent'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {activeTab === 'bundles' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {userBundles.map((bundle, index) => (
                  <motion.div
                    key={bundle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <BundleCard bundle={bundle} />
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="text-center py-12">
                <Bookmark className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Saved Pulses Yet</h3>
                <p className="text-muted-foreground">
                  Start exploring and save bundles that inspire you
                </p>
              </div>
            )}

            {activeTab === 'exclusive' && (
              <div className="echoe-card text-center">
                <Lock className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">Membership Exclusives</h3>
                <p className="text-muted-foreground mb-4">
                  Offer premium content to your most dedicated followers
                </p>
                <button className="echoe-button">Set Up Memberships</button>
              </div>
            )}
          </motion.div>

          {/* Marketplace Storefront Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <div className="echoe-card text-center hover-glow cursor-pointer">
              <ExternalLink className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">Pulse Marketplace Storefront</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sell your digital products, beats, and exclusive content
              </p>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium">
                <span>Coming Soon</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;

