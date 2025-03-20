import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import DoctorSection from '../components/DoctorSection';
import EmergencySection from '../components/EmergencySection';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <DoctorSection />
      <EmergencySection />
    </>
  );
}

export default Home;