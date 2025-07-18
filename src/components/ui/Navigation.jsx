import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Plus, User } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/create_bundle', icon: Plus, label: 'Bundle' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-card/80 backdrop-blur-lg border-t md:border-b border-border/30 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-around md:justify-center md:space-x-8 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-accent bg-accent/10 shadow-lg'
                    : 'text-muted-foreground hover:text-accent hover:bg-accent/5'
                }`}
              >
                <Icon 
                  size={20} 
                  className={`transition-all duration-300 ${
                    isActive ? 'scale-110' : 'hover:scale-105'
                  }`} 
                />
                <span className="text-xs md:text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

