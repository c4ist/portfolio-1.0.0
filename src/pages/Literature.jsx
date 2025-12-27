import React, { useState } from 'react';
import { BookOpen, Globe, Menu, Star, Clock, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import useKeyboardNav from '../hooks/useKeyboardNav';
import { useSidebar } from '../context/SidebarContext';

const Literature = () => {
  const { t, i18n } = useTranslation();
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('currently-reading');
  useKeyboardNav();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const books = {
    currentlyReading: [
      {
        id: 1,
        title: "The Three-Body Problem",
        author: "Liu Cixin",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1415428227i/20518872.jpg",
        rating: 5,
        progress: 65,
        genre: ["sci-fi", "hard sci-fi"],
        year: 2008
      }
    ],
    favorites: [
      {
        id: 2,
        title: "Dune",
        author: "Frank Herbert",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
        rating: 5,
        genre: ["sci-fi", "epic"],
        year: 1965
      },
      {
        id: 3,
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1488213612i/18423.jpg",
        rating: 5,
        genre: ["sci-fi", "philosophical"],
        year: 1969
      },
      {
        id: 4,
        title: "Neuromancer",
        author: "William Gibson",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
        rating: 4,
        genre: ["sci-fi", "cyberpunk"],
        year: 1984
      },
      {
        id: 5,
        title: "Solaris",
        author: "Stanisław Lem",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524596953i/95558.jpg",
        rating: 5,
        genre: ["sci-fi", "philosophical"],
        year: 1961
      },
      {
        id: 6,
        title: "Blood Meridian",
        author: "Cormac McCarthy",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1453995760i/394535.jpg",
        rating: 5,
        genre: ["literary fiction", "western"],
        year: 1985
      }
    ],
    wantToRead: [
      {
        id: 7,
        title: "Blindsight",
        author: "Peter Watts",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327656478i/48484.jpg",
        genre: ["sci-fi", "hard sci-fi"],
        year: 2006
      },
      {
        id: 8,
        title: "The Dispossessed",
        author: "Ursula K. Le Guin",
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353623456i/13651.jpg",
        genre: ["sci-fi", "philosophical"],
        year: 1974
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-neutral-200 selection:text-neutral-900 flex">
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={toggleSidebar}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />
      
      <div className={`flex-1 transition-all duration-300 md:${sidebarCollapsed ? 'ml-16' : 'ml-56'}`}>
        <nav className={`fixed top-0 right-0 bg-[#fafafa]/80 backdrop-blur-sm z-30 py-6 px-6 md:px-12 flex justify-between md:justify-end items-center transition-all duration-300 left-0 md:${sidebarCollapsed ? 'left-16' : 'left-56'}`}>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-neutral-500 hover:text-neutral-900 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <button 
            onClick={toggleLanguage}
            className="text-neutral-500 hover:text-neutral-900 transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={16} />
          </button>
        </nav>
        <main className="max-w-4xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-32">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-3">
              {t('literature.title')}
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed">
              {t('literature.subtitle')}
            </p>
          </header>

          {/* Tabs */}
          <div className="flex gap-6 mb-12 overflow-x-auto">
            <button
              onClick={() => setActiveTab('currently-reading')}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === 'currently-reading'
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {t('literature.currentlyReading')}
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === 'favorites'
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {t('literature.favorites')}
            </button>
            <button
              onClick={() => setActiveTab('want-to-read')}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === 'want-to-read'
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              want to read
            </button>
          </div>

          {/* Book List */}
          <div className="space-y-12">
            {activeTab === 'currently-reading' && books.currentlyReading.map((book) => (
              <article key={book.id} className="group">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-neutral-900 mb-2">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <span>{book.author}</span>
                    <span>·</span>
                    <span>{book.year}</span>
                    {book.rating && (
                      <>
                        <span>·</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < book.rating ? 'fill-neutral-400 text-neutral-400' : 'text-neutral-300'}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                {book.progress && (
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-1 bg-neutral-200 rounded-full h-1">
                        <div 
                          className="bg-neutral-400 h-1 rounded-full transition-all"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-neutral-400 tabular-nums">{book.progress}%</span>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {book.genre.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            {activeTab === 'favorites' && books.favorites.map((book) => (
              <article key={book.id} className="group">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-neutral-900 mb-2">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <span>{book.author}</span>
                    <span>·</span>
                    <span>{book.year}</span>
                    {book.rating && (
                      <>
                        <span>·</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < book.rating ? 'fill-neutral-400 text-neutral-400' : 'text-neutral-300'}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {book.genre.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            {activeTab === 'want-to-read' && books.wantToRead.map((book) => (
              <article key={book.id} className="group">
                <div className="mb-3">
                  <h3 className="text-2xl font-medium text-neutral-900 mb-2">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <span>{book.author}</span>
                    <span>·</span>
                    <span>{book.year}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {book.genre.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Literature;
