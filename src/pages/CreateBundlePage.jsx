import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Eye, Save, Camera, Link as LinkIcon } from 'lucide-react';
import Navigation from '../components/ui/Navigation';

const CreateBundlePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mood: '',
    tags: [],
    media: null,
  });
  const [currentTag, setCurrentTag] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const moods = [
    { id: 'creative', name: 'Creative', color: 'blue' },
    { id: 'chill', name: 'Chill', color: 'purple' },
    { id: 'energetic', name: 'Energetic', color: 'red' },
    { id: 'focused', name: 'Focused', color: 'gold' },
    { id: 'nostalgic', name: 'Nostalgic', color: 'slate' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMoodSelect = (mood) => {
    setFormData(prev => ({
      ...prev,
      mood: mood.id
    }));
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileUpload = (file) => {
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          media: {
            file,
            preview: e.target.result,
            type: file.type.startsWith('image/') ? 'image' : 'video'
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const getMoodClass = (mood) => {
    const moodClasses = {
      blue: 'mood-blue',
      purple: 'mood-purple',
      red: 'mood-red',
      gold: 'mood-gold',
      slate: 'mood-slate',
    };
    return moodClasses[mood] || '';
  };

  const selectedMood = moods.find(m => m.id === formData.mood);

  return (
    <div className={`min-h-screen ${selectedMood ? getMoodClass(selectedMood.color) : 'pulse-background'} transition-all duration-500`}>
      <Navigation />

      <main className="pt-20 pb-24 md:pt-24 md:pb-8 px-4 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Create Your Pulse Bundle</h1>
          <p className="text-muted-foreground">Share your unique creative expression with the world</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title */}
            <div className="echoe-card">
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Bundle Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="echoe-input"
                placeholder="Give your bundle a compelling title..."
                maxLength={100}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {formData.title.length}/100 characters
              </p>
            </div>

            {/* Description */}
            <div className="echoe-card">
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="echoe-input min-h-[120px] resize-none"
                placeholder="Describe your pulse, the story behind it, or what inspired you..."
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {formData.description.length}/500 characters
              </p>
            </div>

            {/* Mood Selector */}
            <div className="echoe-card">
              <label className="block text-sm font-medium mb-4">
                Choose Your Mood
              </label>
              <div className="grid grid-cols-2 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.mood === mood.id
                        ? `${getMoodClass(mood.color)} border-accent text-white`
                        : 'border-border hover:border-accent/30 hover:bg-accent/5'
                    }`}
                  >
                    <span className="font-medium">{mood.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="echoe-card">
              <label className="block text-sm font-medium mb-2">
                Tags
              </label>
              <form onSubmit={handleAddTag} className="flex space-x-2 mb-3">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  className="echoe-input flex-1"
                  placeholder="Add a tag..."
                  maxLength={20}
                />
                <button
                  type="submit"
                  className="echoe-button-secondary px-4"
                  disabled={!currentTag.trim()}
                >
                  Add
                </button>
              </form>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center space-x-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  >
                    <span>#{tag}</span>
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-destructive transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Media Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Media Upload */}
            <div className="echoe-card">
              <label className="block text-sm font-medium mb-4">
                Upload Media
              </label>
              
              {!formData.media ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-accent/50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-2">
                    Drag and drop your image or video here
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse files
                  </p>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0])}
                    className="hidden"
                    id="media-upload"
                  />
                  <label
                    htmlFor="media-upload"
                    className="echoe-button-secondary cursor-pointer inline-flex items-center space-x-2"
                  >
                    <Camera size={16} />
                    <span>Choose File</span>
                  </label>
                </div>
              ) : (
                <div className="relative">
                  {formData.media.type === 'image' ? (
                    <img
                      src={formData.media.preview}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={formData.media.preview}
                      className="w-full h-64 object-cover rounded-lg"
                      controls
                    />
                  )}
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, media: null }))}
                    className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Preview Toggle */}
            <div className="echoe-card">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="echoe-button-secondary w-full flex items-center justify-center space-x-2"
              >
                <Eye size={16} />
                <span>{previewMode ? 'Edit Mode' : 'Preview Mode'}</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="echoe-button w-full flex items-center justify-center space-x-2">
                <span>Publish Bundle</span>
              </button>
              <button className="echoe-button-secondary w-full flex items-center justify-center space-x-2">
                <Save size={16} />
                <span>Save as Draft</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Preview Section */}
        {previewMode && formData.title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h2 className="text-xl font-semibold mb-6">Bundle Preview</h2>
            <div className="echoe-card max-w-md mx-auto">
              {formData.media && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  {formData.media.type === 'image' ? (
                    <img
                      src={formData.media.preview}
                      alt={formData.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <video
                      src={formData.media.preview}
                      className="w-full h-48 object-cover"
                      controls
                    />
                  )}
                </div>
              )}
              
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{formData.title}</h3>
                    <p className="text-sm text-muted-foreground">by @your_username</p>
                  </div>
                  {selectedMood && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodClass(selectedMood.color)} text-white`}>
                      {selectedMood.name}
                    </span>
                  )}
                </div>
                
                {formData.description && (
                  <p className="text-muted-foreground text-sm">{formData.description}</p>
                )}
                
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default CreateBundlePage;

