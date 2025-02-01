import React, { useState } from 'react';
import { ChevronRight, Github, Terminal, Sparkles, CircleDollarSign, Users, MessageSquareText, Coins, Zap, GraduationCap } from 'lucide-react';
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
      <header className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500" />
            <span className="text-lg sm:text-xl font-bold terminal-header">Skill404</span>
          </div>
          <a
            href="https://github.com"
            className="flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-all backdrop-blur-sm text-sm sm:text-base"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Star on GitHub</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="terminal-window p-1 mb-16 sm:mb-24 max-w-4xl mx-auto">
          <div className="terminal-header p-2 flex justify-between items-center">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="text-xs sm:text-sm text-gray-400 terminal-header">~/dev/projects</span>
          </div>
          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            <div className="text-emerald-500">
              <span className="terminal-header typing-effect">$ ./welcome.sh</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Become a better<br /> 
              <span className="text-emerald-500">Software Engineer.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400">
              Get hands-on with production-grade coding challenges. Unlock expert mentorship and code reviews when you need it most.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full flex-1 px-4 sm:px-6 py-3 rounded-lg bg-gray-800/50 border border-emerald-500/20 focus:border-emerald-500/60 focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-500 font-semibold flex items-center justify-center sm:justify-start gap-2 transition-all border border-emerald-500/40 hover:border-emerald-500/60 terminal-header disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Start Building Free'}
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Why Choose Skill404? */}
        <section className="mt-12 sm:mt-16 max-w-4xl mx-auto px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Why Choose Skill404?</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            {/* Card 1 */}
            <div className="feature-card p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <div className="flex items-center mb-2">
                <Sparkles className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold">Authentic Experience</h3>
              </div>
              <p className="text-gray-300">
                Work on production-like apps—create a mini Docker clone, implement 
                microservices, or even build your own shell.
              </p>
            </div>

            {/* Card 2 - Free to Start */}
            <div className="feature-card p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <div className="flex items-center mb-2">
                <Coins className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold">Free to Start</h3>
              </div>
              <p className="text-gray-300">
                Access all core challenges at no cost. Learn at your own pace with zero
                financial barriers.
              </p>
            </div>

            {/* Card 3 - Instant Feedback */}
            <div className="feature-card p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <div className="flex items-center mb-2">
                <Zap className="h-6 w-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold">Instant Feedback</h3>
              </div>
              <p className="text-gray-300">
                Each code push triggers automated tests, so you'll know right away
                whether you're on the right track.
              </p>
            </div>

            {/* Card 4 - Expert Guidance */}
            <div className="feature-card p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <div className="flex items-center mb-2">
                <GraduationCap className="h-6 w-6 text-emerald-400 mr-3" />
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
        <section className="mt-16 sm:mt-24 max-w-4xl mx-auto px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Mentorship &amp; Code Reviews</h2>
          
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
                <CircleDollarSign className="h-10 w-10 text-emerald-400 mt-1 flex-shrink-0" />
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
                <Users className="h-10 w-10 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-100">Expert Engineers</h3>
                  <p className="text-gray-300 mt-1">
                    Our mentors have real-world experience in backend, DevOps,
                    and more. They've tackled the same challenges you're facing—learn 
                    directly from their expertise.
                  </p>
                </div>
              </div>

              {/* 3. Actionable Feedback */}
              <div className="flex items-start gap-4">
                <MessageSquareText className="h-10 w-10 text-emerald-400 mt-1 flex-shrink-0" />
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
        <section className="mt-16 sm:mt-24 max-w-4xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Build Something Real?
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8">
            Start your first project at no cost and discover how quickly your skills can grow.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full flex-1 px-4 sm:px-6 py-3 rounded-lg bg-gray-800/50 border border-emerald-500/20 focus:border-emerald-500/60 focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-500 font-semibold flex items-center justify-center sm:justify-start gap-2 transition-all border border-emerald-500/40 hover:border-emerald-500/60 terminal-header disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Get Early Access'}
              <ChevronRight className="h-5 w-5" />
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 sm:mt-24 border-t border-emerald-500/20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Brand Column - Full width on mobile */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              <div className="flex items-center space-x-2">
                <Terminal className="h-6 w-6 text-emerald-500" />
                <span className="text-lg font-bold terminal-header">Skill404</span>
              </div>
              <p className="text-gray-400 text-sm">
                Level up your software engineering skills with real-world projects and expert mentorship.
              </p>
            </div>

            {/* Resources */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Challenges</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Blog</a></li>
              </ul>
            </div> */}

            {/* Company */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              </ul>
            </div> */}

            {/* Legal */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div> */}
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-emerald-500/20 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Skill404. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
