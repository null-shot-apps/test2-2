'use client';

import { useState } from 'react';

export default function Landing() {
  const [isDark, setIsDark] = useState(false);
  const [toggleWord, setToggleWord] = useState('experiences');

  const handleToggle = () => {
    setIsDark(!isDark);
    setToggleWord(toggleWord === 'experiences' ? 'moods' : 'experiences');
  };

  return (
    <div 
      className="relative h-[100dvh] w-full overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: isDark ? '#121212' : '#ffffff' }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <h1 
          className="text-2xl font-bold tracking-tight transition-colors duration-700"
          style={{ color: isDark ? '#ffffff' : '#000000' }}
        >
          STUDIO
        </h1>
        
        <nav className="flex items-center gap-8">
          <a 
            href="#work" 
            className="text-sm font-medium transition-colors duration-700 hover:opacity-60"
            style={{ color: isDark ? '#ffffff' : '#000000' }}
          >
            Work
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium transition-colors duration-700 hover:opacity-60"
            style={{ color: isDark ? '#ffffff' : '#000000' }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium transition-colors duration-700 hover:opacity-60"
            style={{ color: isDark ? '#ffffff' : '#000000' }}
          >
            Contact
          </a>
          
          <div 
            className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-700"
            style={{ 
              backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
              color: isDark ? '#ffffff' : '#000000'
            }}
          >
            Dev Mode
          </div>
        </nav>
      </header>
      
      {/* Hero - centered */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <h2 
            className="text-[clamp(48px,8vw,96px)] font-light tracking-tight leading-[1.1] transition-colors duration-700"
            style={{ color: isDark ? '#ffffff' : '#000000' }}
          >
            We craft digital
          </h2>
          <div className="flex items-center justify-center mt-2">
            <button
              onClick={handleToggle}
              className="text-[clamp(48px,8vw,96px)] font-light tracking-tight leading-[1.1] transition-colors duration-700 hover:opacity-70 cursor-pointer inline-block"
              style={{ 
                color: isDark ? '#ffffff' : '#000000',
                width: '420px',
                textAlign: 'center'
              }}
            >
              {toggleWord}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

