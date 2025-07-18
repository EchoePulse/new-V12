import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, ChevronDown, ChevronUp, Mail, MessageCircle, Book, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      questions: [
        {
          id: 1,
          question: 'How do I create my first Pulse Bundle?',
          answer: 'To create your first Pulse Bundle, click the "Bundle" button in the navigation bar or the "Create Your Pulse" button on the home page. Choose your mood, add a title and description, upload your media, and add relevant tags. Preview your bundle and hit publish when you\'re ready to share!'
        },
        {
          id: 2,
          question: 'What types of content can I share on Echoe?',
          answer: 'You can share various types of creative content including photos, videos, digital art, music, audio experiences, creative writing, and more. Each Pulse Bundle can contain multiple media files and should reflect your unique creative expression.'
        },
        {
          id: 3,
          question: 'How do mood themes work?',
          answer: 'Mood themes change the visual appearance of your content and the platform interface. Choose from Creative (blue), Chill (purple), Energetic (red), Focused (gold), or Nostalgic (slate) to match the vibe of your content. The background and UI elements will adapt to your selected mood.'
        }
      ]
    },
    {
      title: 'Account & Privacy',
      icon: HelpCircle,
      questions: [
        {
          id: 4,
          question: 'How do I change my privacy settings?',
          answer: 'Go to your Profile page and click "Edit Profile" to access privacy settings. You can control who can see your content, follow you, and send you messages. You can also make your profile private or public.'
        },
        {
          id: 5,
          question: 'Can I delete my account?',
          answer: 'Yes, you can delete your account at any time through your account settings. This will permanently remove all your content and data. Please note that this action cannot be undone.'
        },
        {
          id: 6,
          question: 'How do I report inappropriate content?',
          answer: 'Click the three dots menu on any content and select "Report". Choose the appropriate reason and provide additional details if needed. Our moderation team will review all reports promptly.'
        }
      ]
    },
    {
      title: 'Features & Functionality',
      icon: MessageCircle,
      questions: [
        {
          id: 7,
          question: 'What is the Pulse Marketplace?',
          answer: 'The Pulse Marketplace (coming soon) will allow creators to buy and sell digital content, beats, NFTs, and exclusive items. You\'ll be able to monetize your creative work and discover unique digital assets from other creators.'
        },
        {
          id: 8,
          question: 'How do I follow other creators?',
          answer: 'Visit any creator\'s profile and click the "Follow" button. You can also follow creators directly from their Pulse Bundles. Following someone means their content will appear in your personalized feed.'
        },
        {
          id: 9,
          question: 'What are Membership Exclusives?',
          answer: 'Membership Exclusives allow creators to offer premium content to their most dedicated followers. Fans can subscribe to access exclusive Pulse Bundles, behind-the-scenes content, and special perks from their favorite creators.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: Mail,
      action: 'support@echoe.com',
      color: 'blue'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other creators and get tips',
      icon: MessageCircle,
      action: 'Visit Forum',
      color: 'purple'
    },
    {
      title: 'Help Center',
      description: 'Browse detailed guides and tutorials',
      icon: Book,
      action: 'Browse Articles',
      color: 'green'
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      searchQuery === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleFaq = (questionId) => {
    setExpandedFaq(expandedFaq === questionId ? null : questionId);
  };

  return (
    <div className="min-h-screen pulse-background">
      {/* Header */}
      <header className="p-4 border-b border-border/30 bg-background/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Find answers to common questions or get in touch with our support team
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="echoe-input pl-10"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {filteredFaqs.map((category, categoryIndex) => (
                  <div key={category.title} className="echoe-card">
                    <div className="flex items-center space-x-3 mb-4">
                      <category.icon className="w-6 h-6 text-accent" />
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.questions.map((faq, index) => (
                        <motion.div
                          key={faq.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + categoryIndex * 0.1 + index * 0.05 }}
                          className="border border-border/30 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                          >
                            <span className="font-medium">{faq.question}</span>
                            {expandedFaq === faq.id ? (
                              <ChevronUp size={20} className="text-muted-foreground" />
                            ) : (
                              <ChevronDown size={20} className="text-muted-foreground" />
                            )}
                          </button>
                          
                          {expandedFaq === faq.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-4 pb-4"
                            >
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && searchQuery && (
                <div className="echoe-card text-center py-12">
                  <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    Try different keywords or browse our contact options below
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Contact Options */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="echoe-card hover-glow cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${option.color}-500/20`}>
                        <option.icon className={`w-6 h-6 text-${option.color}-500`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{option.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {option.description}
                        </p>
                        <button className="text-accent hover:text-accent/80 transition-colors text-sm font-medium">
                          {option.action}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link
                    to="/terms_of_service"
                    className="block text-muted-foreground hover:text-accent transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="/privacy_policy"
                    className="block text-muted-foreground hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/community_guidelines"
                    className="block text-muted-foreground hover:text-accent transition-colors"
                  >
                    Community Guidelines
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 echoe-card text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">All systems operational</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Current response time: ~2 hours | Last updated: 5 minutes ago
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default SupportPage;

