import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { About } from './components/About';
import { TechnicalStack } from './components/TechnicalStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { Mentorship } from './components/Mentorship';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080A0D] text-[#F3F4F0] flex flex-col selection:bg-[#C4F36B] selection:text-[#080A0D]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ImpactMetrics />
        <About />
        <TechnicalStack />
        <Projects />
        <Experience />
        <Research />
        <Mentorship />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
