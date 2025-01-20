import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleLoadingComplete = () => {
    setShowWelcome(false);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      <WelcomeScreen onLoadingComplete={handleLoadingComplete} />
    </div>
  );
};

export default Index;