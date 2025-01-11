import { useState } from 'react';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-[#030014]">
      <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      
      {!showWelcome && (
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-white">
            Your Portfolio Content Here
          </h1>
        </div>
      )}
    </div>
  );
};

export default Index;