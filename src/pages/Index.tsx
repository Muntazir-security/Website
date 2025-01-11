import { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import Home from './Home';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-[#030014]">
      <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      
      {!showWelcome && <Home />}
    </div>
  );
};

export default Index;