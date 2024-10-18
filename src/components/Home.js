import React from 'react';
import Playstore from './Playstore';
import InfoSection from './InfoSection';
import PhoneSection from './PhoneSection';
import TeamSection from './TeamSection';
import ContributorsSection from './ContributorsSection';

const Home = () => {
  return (
    <div>
      <h1>Hola inicio</h1>
      <Playstore />
      <InfoSection />
      <PhoneSection />
      <TeamSection />
      <ContributorsSection />
    </div>
  );
};

export default Home;