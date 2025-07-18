import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Users, Filter, Star } from 'lucide-react';
import Navigation from '../components/ui/Navigation';

const ExplorePage = () => {
  const [activeFilter, setActiveFilter] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'new', name: 'New', icon: Star },
    { id: 'people', name: 'People', icon: Users },
  ];

  const trendingBundles = [
    {
      id: 1,
      title: 'Neon Dreams',
      creator: 'cyberpunk_artist',
      views: '12.5K',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      mood: 'creative',
      trending: true,
    },
    {
      id: 2,
      title: 'Ocean Waves',
      creator: 'nature_lover',
      views: '8.9K',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
      mood: 'chill',
      trending: true,
    },
    {
      id: 3,
      title: 'Street Art Revolution',
      creator: 'urban_explorer',
      views: '15.2K',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      mood: 'energetic',
      trending: true,
    },
  ];

  const suggestedUsers = [
    {
      id: 1,
      username: 'minimalist_mike',
      followers: '2.3K',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      bio: 'Less is more. Clean designs, clear thoughts.',
      verified: true,
    },
    {
      id: 2,
      username: 'color_theory',
      followers: '5.7K',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      bio: 'Exploring the psychology of color in digital art.',
      verified: false,
    },
    {
      id: 3,
      username: 'sound_sculptor',
      followers: '1.8K',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      bio: 'Crafting audio experiences that move souls.',
      verified: true,
    },
  ];

  const trendingTags = [
    { name: 'minimalism', count: '1.2K' },
    { name: 'synthwave', count: '890' },
    { name: 'photography', count: '2.1K' },
    { name: 'ambient', count: '567' },
    { name: 'digital-art', count: '1.5K' },
    { name: 'nature', count: '980' },
  ];

  const TrendingCard = ({ bundle }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="echoe-card hover-glow cursor-pointer relative"
    >
      {bundle.trending && (
        <div className="absolute top-3 left-3 z-10">
          <div className="flex items-center space-x-1 px-2 py-1 bg-red-500 rounded-full text-white text-xs font-medium">
            <TrendingUp size={12} />
            <span>Trending</span>
          </div>
        </div>
      )}
      
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <img
          src={bundle.image}
          alt={bundle.title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute bottom-3 right-3">
          <span className="px-2 py-1 bg-black/70 rounded-full text-white text-xs">
            {bundle.views} views
          </span>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-1">{bundle.title}</h3>
        <p className="text-sm text-muted-foreground">by @{bundle.creator}</p>
      </div>
    </motion.div>
  );

  const UserCard = ({ user }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="echoe-card hover-glow cursor-pointer"
    >
      <div className="flex items-center space-x-3 mb-3">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-1">
            <h3 className="font-semibold">{user.username}</h3>
            {user.verified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{user.followers} followers</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{user.bio}</p>
      <button className="echoe-button-secondary w-full">Follow</button>
    </motion.div>
  );

  return (
    <div className="min-h-screen pulse-background">
      <Navigation />

      <main className="pt-20 pb-24 md:pt-24 md:pb-8 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Explore Pulses</h1>
          <p className="text-muted-foreground">Discover new creators and trending content</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search creators, tags, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="echoe-input pl-10"
            />
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex justify-center space-x-4">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-accent text-accent-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  <Icon size={16} />
                  <span>{filter.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content based on active filter */}
        {activeFilter === 'trending' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-6">Trending Bundles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {trendingBundles.map((bundle, index) => (
                <motion.div
                  key={bundle.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <TrendingCard bundle={bundle} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeFilter === 'people' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-6">Suggested Creators</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {suggestedUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <UserCard user={user} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Trending Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-6">Trending Tags</h2>
          <div className="flex flex-wrap gap-3">
            {trendingTags.map((tag, index) => (
              <motion.button
                key={tag.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 px-4 py-2 bg-card rounded-full border border-border/30 hover:border-accent/30 transition-all duration-300"
              >
                <span className="font-medium">#{tag.name}</span>
                <span className="text-sm text-muted-foreground">{tag.count}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Pulse Marketplace Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="echoe-card text-center hover-glow cursor-pointer"
        >
          <h3 className="text-lg font-semibold mb-2">Pulse Marketplace</h3>
          <p className="text-muted-foreground mb-4">
            Buy and sell exclusive digital content, beats, and NFTs
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium">
            <span>Coming Soon</span>
            <Star size={16} />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ExplorePage;

