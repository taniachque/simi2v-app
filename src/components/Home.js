import React from 'react';
import Playstore from './Playstore';
import InfoSection from './InfoSection';
import PhoneSection from './PhoneSection';
import TeamSection from './TeamSection';
import ContributorsSection from './ContributorsSection';
import HeroForm from './HeroForm';

const Home = () => {
  return (
    <div>
      <Playstore />
      <InfoSection />
      <PhoneSection />
      <TeamSection />
      <ContributorsSection />
      <HeroForm />
    </div>
  );
};

export default Home;