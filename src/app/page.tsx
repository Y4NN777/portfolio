"use client";

import {
  Background,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  Navigation,
  OverviewSection,
  ProjectsSection,
  ScrollControl,
  TechStackSection,
  // TestimonialsSection
} from "@/components/portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navigation />

      {/* Position-aware scroll control */}
      <ScrollControl />

      <div className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Overview Section */}
        <OverviewSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
} 