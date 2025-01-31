import React, { useState } from 'react';
import { BookOpen, Users, MessageSquareCode, ChevronRight, Github, Terminal } from 'lucide-react';
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
      toast.success("Thanks for signing up! We'll be in touch soon.");
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
          <a
            href="https://github.com"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-all backdrop-blur-sm"
          >
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
          <div className="p-8 space-y-8">
            <div className="text-emerald-500">
              <span className="terminal-header typing-effect">$ ./welcome.sh</span>
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Become a better<br /> 
              <span className="text-emerald-500">Software Engineer.</span>
            </h1>
            <p className="text-xl text-gray-400">
              Get hands-on with production-grade coding challenges. Unlock expert mentorship and code reviews when you need it most.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 flex gap-4">
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
                {isLoading ? 'Processing...' : 'Start Building Free'}
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Why Choose Skill404? */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why Choose Skill404?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="feature-card p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <div className="flex items-center mb-2">
                {/* Example Lucide icon, e.g. Sparkles */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 8v8m0-8H4m8 0h8"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Authentic Experience</h3>
              </div>
              <p className="text-gray-300">
                Work on production-like apps—create a mini Docker clone, implement 
                microservices, or even build your own shell.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <div className="flex items-center mb-2">
                {/* Example icon for "Free to Start" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 1v2m8.485 1.757L18.364 6m2.121 12.485L18.364 18M4.636 6 3.515 4.757M3.515 19.243 4.636 18"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Free to Start</h3>
              </div>
              <p className="text-gray-300">
                Access all core challenges at no cost. Learn at your own pace with zero
                financial barriers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <div className="flex items-center mb-2">
                {/* Example icon for "Instant Feedback" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m2 4v-4m-6 1h2m10.5 4.5a9 9 0 11-8.18-8.178"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Instant Feedback</h3>
              </div>
              <p className="text-gray-300">
                Each code push triggers automated tests, so you’ll know right away
                whether you’re on the right track.
              </p>
            </div>

            {/* Card 4 */}
            <div className="feature-card p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <div className="flex items-center mb-2">
                {/* Example icon for "Expert Guidance" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 8h14M5 16h14M11 12h2m-1 0v10"
                  />
                </svg>
                <h3 className="text-xl font-semibold">Expert Guidance</h3>
              </div>
              <p className="text-gray-300">
                Need a deeper dive? Tap into seasoned mentors for detailed code reviews
                or 1:1 sessions.
              </p>
            </div>
          </div>
        </section>

        {/* Mentorship & Code Reviews */}
<section className="mt-24 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-6">Mentorship &amp; Code Reviews</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* LEFT COLUMN: Text & Highlights */}
    <div className="space-y-8">
      <p className="text-gray-300">
        Need extra help? Our network of industry veterans is here to guide you
        with in-depth feedback, practical tips, and live 1:1 sessions
        to fast-track your growth.
      </p>
      
      {/* 1. Flexible Pricing */}
      <div className="flex items-start gap-4">
        {/* Enlarge icon to h-10 w-10 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-emerald-400 mt-1 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" 
          />
          <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 1v2m8.485 1.757L18.364 6m2.121 12.485L18.364 18M4.636 6 3.515 4.757M3.515 19.243 4.636 18" 
          />
        </svg>
        <div>
          <h3 className="text-xl font-semibold text-gray-100">Flexible Pricing</h3>
          <p className="text-gray-300 mt-1">
            Choose a per-session rate for occasional deep dives, 
            or opt for a monthly plan that keeps you supported every step of the way.
          </p>
        </div>
      </div>

      {/* 2. Expert Engineers */}
      <div className="flex items-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-emerald-400 mt-1 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3h-2.18" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17H4a3 3 0 01-3-3V6a3 3 0 013-3h14a3 3 0 013 3v8" />
        </svg>
        <div>
          <h3 className="text-xl font-semibold text-gray-100">Expert Engineers</h3>
          <p className="text-gray-300 mt-1">
            Our mentors have real-world experience in backend, DevOps,
            and more. They’ve tackled the same challenges you’re facing—learn 
            directly from their expertise.
          </p>
        </div>
      </div>

      {/* 3. Actionable Feedback */}
      <div className="flex items-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-emerald-400 mt-1 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2" 
            d="M13 16h-1v-4h-1m2 4v-4m-6 1h2m-2 4h10m2 0H9m4-8h2m-6-4h6" 
          />
        </svg>
        <div>
          <h3 className="text-xl font-semibold text-gray-100">Actionable Feedback</h3>
          <p className="text-gray-300 mt-1">
            Receive personalized code reviews that show you precisely where 
            to improve, along with best practices that help you level up 
            quickly and confidently.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN: Illustration or Image */}
    <div className="feature-card relative flex items-center justify-center">
      <img
        src="/images/pair_programming.svg"
        alt="Mentorship & Code Reviews"
        className="w-full h-auto rounded-lg border border-emerald-500/20"
      />
    </div>
  </div>
</section>




        {/* Final CTA */}
        <section className="mt-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Something Real?
          </h2>
          <p className="text-gray-300 mb-8">
            Start your first project at no cost and discover how quickly your skills can grow.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
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
        </section>
      </main>
    </div>
  );
}

export default App;
