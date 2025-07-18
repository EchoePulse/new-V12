import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Bookmark, ArrowLeft, User, Plus, Flame, Laugh, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BundleViewPage = () => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState('');
  const [sharedPulseGlow, setSharedPulseGlow] = useState(0);

  // Mock bundle data
  const bundle = {
    id: 1,
    title: 'Midnight City Vibes',
    creator: {
      username: 'alexcreates',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
      verified: true,
      followers: 2340,
    },
    mood: 'creative',
    description: 'Capturing the essence of urban nights through photography and ambient sounds. This collection explores the intersection of light and shadow in the modern cityscape, accompanied by carefully curated ambient tracks that transport you to the heart of the metropolis after dark.',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop',
        caption: 'Neon reflections on wet streets'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop',
        caption: 'Urban geometry at night'
      },
    ],
    tags: ['photography', 'urban', 'night', 'ambient'],
    likes: 234,
    comments: 18,
    views: 1247,
    createdAt: '2 hours ago',
  };

  const comments = [
    {
      id: 1,
      user: 'nightowl_photographer',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      text: 'This captures the mood perfectly! The lighting in the second shot is incredible.',
      time: '1 hour ago',
      likes: 12,
    },
    {
      id: 2,
      user: 'urban_explorer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      text: 'Love the atmospheric quality. Makes me want to explore the city at night.',
      time: '45 minutes ago',
      likes: 8,
    },
  ];

  const similarBundles = [
    {
      id: 2,
      title: 'Neon Dreams',
      creator: 'cyberpunk_artist',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop',
      mood: 'creative',
    },
    {
      id: 3,
      title: 'City Lights',
      creator: 'street_photographer',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=200&h=200&fit=crop',
      mood: 'energetic',
    },
  ];

  useEffect(() => {
    // Simulate shared pulse glow based on concurrent viewers
    const interval = setInterval(() => {
      setSharedPulseGlow(Math.random() * 0.3 + 0.1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getMoodClass = (mood) => {
    const moodClasses = {
      creative: 'mood-blue',
      chill: 'mood-purple',
      energetic: 'mood-red',
      focused: 'mood-gold',
    };
    return moodClasses[mood] || 'mood-slate';
  };

  const handleReaction = (type) => {
    if (type === 'like') {
      setLiked(!liked);
    } else if (type === 'save') {
      setSaved(!saved);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      // Handle comment submission
      setComment('');
    }
  };

  return (
    <div className={`min-h-screen ${getMoodClass(bundle.mood)} relative`}>
      {/* Shared Pulse Glow Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, ${sharedPulseGlow}) 0%, transparent 70%)`,
          transition: 'all 2s ease-in-out',
        }}
      />

      {/* Header */}
      <header className="relative z-10 p-4 border-b border-border/30 bg-background/80 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <Eye size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{bundle.views} views</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Bundle Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{bundle.title}</h1>
              <div className="flex items-center space-x-3">
                <img
                  src={bundle.creator.avatar}
                  alt={bundle.creator.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">@{bundle.creator.username}</span>
                    {bundle.creator.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{bundle.creator.followers.toLocaleString()} followers</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMoodClass(bundle.mood)} text-white`}>
                {bundle.mood}
              </span>
              <button className="echoe-button-secondary">Follow</button>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">{bundle.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {bundle.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Media Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-6"
        >
          {bundle.media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={item.url}
                    controls
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>
              {item.caption && (
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                  {item.caption}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Reactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border/30">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => handleReaction('like')}
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  liked ? 'text-red-500 scale-110' : 'text-muted-foreground hover:text-red-500'
                }`}
              >
                <Heart size={20} className={liked ? 'fill-current' : ''} />
                <span>{bundle.likes + (liked ? 1 : 0)}</span>
              </button>
              
              <button className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
                <Laugh size={20} />
                <span>React</span>
              </button>
              
              <button className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors">
                <MessageCircle size={20} />
                <span>{bundle.comments}</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleReaction('save')}
                className={`p-2 transition-all duration-300 ${
                  saved ? 'text-accent scale-110' : 'text-muted-foreground hover:text-accent'
                }`}
              >
                <Bookmark size={20} className={saved ? 'fill-current' : ''} />
              </button>
              
              <button className="p-2 text-muted-foreground hover:text-accent transition-colors">
                <Share size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Echo This Pulse Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8 text-center"
        >
          <button className="echoe-button flex items-center space-x-2 mx-auto hover-glow">
            <Plus size={16} />
            <span>Echo This Pulse</span>
          </button>
          <p className="text-sm text-muted-foreground mt-2">
            Create your own bundle inspired by this mood
          </p>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold mb-4">Comments</h3>
          
          {/* Add Comment */}
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <div className="flex space-x-3">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
                alt="Your avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts on this pulse..."
                  className="echoe-input min-h-[80px] resize-none"
                />
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    disabled={!comment.trim()}
                    className="echoe-button-secondary disabled:opacity-50"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
          
          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="bg-card/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-sm">{comment.user}</span>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <p className="text-sm">{comment.text}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 ml-3">
                    <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-accent transition-colors">
                      <Heart size={12} />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-xs text-muted-foreground hover:text-accent transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Similar Bundles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-4">Similar Pulses</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {similarBundles.map((similar) => (
              <div key={similar.id} className="echoe-card hover-glow cursor-pointer">
                <div className="flex items-center space-x-3">
                  <img
                    src={similar.image}
                    alt={similar.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{similar.title}</h4>
                    <p className="text-sm text-muted-foreground">by @{similar.creator}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Concurrent Viewers Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card/30 rounded-full border border-border/20">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              3 others are viewing this pulse right now
            </span>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BundleViewPage;

