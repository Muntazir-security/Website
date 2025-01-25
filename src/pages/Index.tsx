import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleLoadingComplete = () => {
    console.log('Welcome screen complete, navigating to home');
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      {showWelcome && <WelcomeScreen onLoadingComplete={handleLoadingComplete} />}
    </div>
  );
};

export default Index;