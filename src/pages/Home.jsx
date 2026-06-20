import React from 'react';
import HeroSection from '../components/home/Hero';
import AboutSection from '../components/home/About';
import PhilosophySection from '../components/home/Philosophy';
import ServicesSection from '../components/home/Services';
import WhyChooseComp from '../components/home/WhyChooseComp';
import AchievementsSection from '../components/home/Achievements';
import ReviewsSection from '../components/home/Reviews';
import CertificationsSection from '../components/home/Certifications';
import AwardsSection from '../components/home/Awards';
import GlobalFootprintSection from '../components/home/GlobalFootprint';

export default function Home() {
  return (
    <div className="grow">

      <HeroSection
        videoSrc="/videos/hero.mp4"
        posterSrc=""
      />

      <AboutSection />

      <PhilosophySection />

      <ServicesSection />

      <WhyChooseComp />

      <AchievementsSection />

      <ReviewsSection />

      <CertificationsSection />

      <AwardsSection />

      <GlobalFootprintSection />


    </div>
  );
}

