import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AnalyticsProvider from './components/AnalyticsProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import AuthorPage from './pages/AuthorPage';
import AdminPage from './pages/AdminPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('color-scheme');
      return saved === 'dark';
    } catch (e) {
      return false;
    }
  });

  const [quickViewItem, setQuickViewItem] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync theme with HTML root & meta[name="color-scheme"] (Modern Web Guidance rule)
  useEffect(() => {
    try {
      const metaTheme = document.querySelector('meta[name="color-scheme"]');
      if (isDark) {
        document.documentElement.classList.add('dark');
        if (metaTheme) metaTheme.content = 'dark';
        localStorage.setItem('color-scheme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (metaTheme) metaTheme.content = 'light';
        localStorage.setItem('color-scheme', 'light');
      }
    } catch (e) {
      console.error(e);
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsProvider />
      <div className="min-h-screen flex flex-col bg-lux-bg-light dark:bg-lux-bg-dark text-lux-text-primary dark:text-lux-text-darkPrimary transition-colors duration-300">
        
        {/* Global Navigation Header */}
        <Header
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onQuickView={(item) => setQuickViewItem(item)} />} 
            />
            <Route 
              path="/artigo/:slug" 
              element={<ArticlePage onQuickView={(item) => setQuickViewItem(item)} />} 
            />
            <Route 
              path="/categoria/:slug" 
              element={<CategoryPage onQuickView={(item) => setQuickViewItem(item)} />} 
            />
            <Route 
              path="/autor/:slug" 
              element={<AuthorPage />} 
            />
            <Route 
              path="/admin" 
              element={<AdminPage />} 
            />
            <Route 
              path="/privacidade" 
              element={<PrivacyPage />} 
            />
            <Route 
              path="/termos" 
              element={<TermsPage />} 
            />
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Modals */}
        <QuickViewModal
          item={quickViewItem}
          onClose={() => setQuickViewItem(null)}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
