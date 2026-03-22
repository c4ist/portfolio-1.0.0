import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageShell from '../components/layout/PageShell';

const Literature = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('currently-reading');

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
    <PageShell mainClassName="max-w-4xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-3">
              {t('literature.title')}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
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
              {t('literature.wantToRead')}
            </button>
          </div>

          {/* Book List */}
          <div className="space-y-12">
            {activeTab === 'currently-reading' && books.currentlyReading.map((book) => (
              <article key={book.id} className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-24 md:w-32 shrink-0 aspect-2/3 bg-neutral-100 rounded-md overflow-hidden shadow-sm">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/200x300/f5f5f5/a3a3a3?text=No+Cover';
                      e.currentTarget.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0 py-1">
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
              <article key={book.id} className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-24 md:w-32 shrink-0 aspect-2/3 bg-neutral-100 rounded-md overflow-hidden shadow-sm">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/200x300/f5f5f5/a3a3a3?text=No+Cover';
                      e.currentTarget.onerror = null;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0 py-1">
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
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {book.genre.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            {activeTab === 'want-to-read' && books.wantToRead.map((book) => (
              <article key={book.id} className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="w-24 md:w-32 shrink-0 aspect-2/3 bg-neutral-100 rounded-md overflow-hidden shadow-sm">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/200x300/f5f5f5/a3a3a3?text=No+Cover';
                      e.currentTarget.onerror = null;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <h3 className="text-2xl font-medium text-neutral-900 mb-2">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-neutral-500">
                    <span>{book.author}</span>
                    <span>·</span>
                    <span>{book.year}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {book.genre.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
    </PageShell>
  );
};

export default Literature;
