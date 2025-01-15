import React, { useState } from 'react';
import { Code2, BookOpen, Users, MessageSquareCode, ChevronRight, Github, Terminal } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { supabase } from './lib/supabase';

function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) throw error;
      toast.success('Thanks for signing up! We\'ll be in touch soon.');
      setEmail('');
    } catch (error) {
      toast.error('This email has already signed up or something went wrong.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 matrix-bg">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold terminal-header">Skill404</span>
          </div>
          <a href="https://github.com" 
             className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-all backdrop-blur-sm">
            <Github className="h-5 w-5" />
            <span>Star on GitHub</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="terminal-window p-1 mb-24 max-w-4xl mx-auto">
          <div className="terminal-header p-2 flex justify-between items-center">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="text-sm text-gray-400 terminal-header">~/dev/projects</span>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              <div className="text-emerald-500">
                <span className="terminal-header typing-effect">$ ./welcome.sh</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Master Backend Development<br />Through
                <span className="text-emerald-500"> Real-World Projects</span>
              </h1>
              <p className="text-xl text-gray-400">
                <span className="text-emerald-500 terminal-header">$</span> Practice building production-ready backend systems with our curated projects.
              </p>
              <p className="text-xl text-gray-400">
                <span className="text-emerald-500 terminal-header">$</span> Get expert code reviews and mentorship to level up your skills.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-12 flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-lg bg-gray-800/50 border border-emerald-500/20 focus:border-emerald-500/60 focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-500 font-semibold flex items-center gap-2 transition-all border border-emerald-500/40 hover:border-emerald-500/60 terminal-header disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Get Early Access'}
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: <BookOpen className="h-12 w-12 text-emerald-500 mb-4 feature-icon" />,
              title: "Real-World Projects",
              description: "Practice with projects that mirror actual industry challenges in API design, Docker, databases, and more."
            },
            {
              icon: <MessageSquareCode className="h-12 w-12 text-emerald-500 mb-4 feature-icon" />,
              title: "Expert Code Reviews",
              description: "Get detailed feedback on your code from experienced developers to improve your implementation."
            },
            {
              icon: <Users className="h-12 w-12 text-emerald-500 mb-4 feature-icon" />,
              title: "1:1 Mentorship",
              description: "Accelerate your growth with personalized guidance from industry professionals."
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card p-8">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;