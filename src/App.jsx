import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import page components
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ProfilePage from './pages/ProfilePage';
import CreateBundlePage from './pages/CreateBundlePage';
import BundleViewPage from './pages/BundleViewPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CommunityGuidelinesPage from './pages/CommunityGuidelinesPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <Router>
      <div className="App dark">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign_in" element={<SignInPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create_bundle" element={<CreateBundlePage />} />
          <Route path="/bundle_view" element={<BundleViewPage />} />
          <Route path="/bundle_view/:id" element={<BundleViewPage />} />
          <Route path="/terms_of_service" element={<TermsOfServicePage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicyPage />} />
          <Route path="/community_guidelines" element={<CommunityGuidelinesPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


