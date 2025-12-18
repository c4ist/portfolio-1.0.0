import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Trash2, Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemoryLane = () => {
  const [memories, setMemories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '', date: new Date().toISOString().split('T')[0] });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('memory-lane-data');
    if (saved) {
      setMemories(JSON.parse(saved));
    } else {
      // Seed data
      const seed = [
        {
          id: 1,
          title: "Grandma's Sourdough Starter",
          content: "She always said the secret was talking to it every morning. 'Feed it flour, water, and gossip,' she'd say. The starter is 40 years old now.",
          date: "2023-10-15"
        },
        {
          id: 2,
          title: "The Old Cabin",
          content: "Found the keys to the lake house in dad's old jacket. The wood still smells like pine and rain.",
          date: "2023-09-02"
        }
      ];
      setMemories(seed);
      localStorage.setItem('memory-lane-data', JSON.stringify(seed));
    }
  }, []);

  const saveMemory = (e) => {
    e.preventDefault();
    const newMemory = {
      id: Date.now(),
      ...formData
    };
    const updated = [newMemory, ...memories];
    setMemories(updated);
    localStorage.setItem('memory-lane-data', JSON.stringify(updated));
    setFormData({ title: '', content: '', date: new Date().toISOString().split('T')[0] });
    setShowForm(false);
  };

  const deleteMemory = (id) => {
    const updated = memories.filter(m => m.id !== id);
    setMemories(updated);
    localStorage.setItem('memory-lane-data', JSON.stringify(updated));
  };

  const filteredMemories = memories.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fffcf5] font-sans selection:bg-amber-200 selection:text-amber-900">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-serif font-medium tracking-tight text-stone-900 mb-2">Memory Lane</h1>
              <p className="text-stone-600 max-w-lg italic">
                A digital garden for preserving moments and recipes.
              </p>
            </div>
            <button 
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-stone-900 text-[#fffcf5] px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm"
            >
              {showForm ? 'Cancel' : <><Plus size={16} /> Add Memory</>}
            </button>
          </div>
        </header>

        {showForm && (
          <form onSubmit={saveMemory} className="mb-12 bg-white p-6 rounded-xl border border-stone-200 shadow-sm animate-fade-in">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Title</label>
                <input
                  required
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full p-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                  placeholder="Grandma's Apple Pie"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                <input
                  required
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full p-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Memory</label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="w-full p-2 h-32 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 resize-none"
                  placeholder="Write down the details..."
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-stone-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
                  Save to Garden
                </button>
              </div>
            </div>
          </form>
        )}

        <div className="mb-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={18} />
          <input
            type="text"
            placeholder="Search your memories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 transition-shadow shadow-sm placeholder:text-stone-400"
          />
        </div>

        <div className="grid gap-6">
          {filteredMemories.length > 0 ? (
            filteredMemories.map(memory => (
              <div key={memory.id} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-medium text-stone-900">{memory.title}</h3>
                  <button 
                    onClick={() => deleteMemory(memory.id)}
                    className="text-stone-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-sm text-stone-500 mb-4 font-mono">{memory.date}</p>
                <p className="text-stone-600 leading-relaxed whitespace-pre-wrap font-serif text-lg">{memory.content}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-stone-400">
              <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
              <p>No memories found. Start planting some.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;
