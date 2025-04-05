
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Starting welcome screen timer');
    const timer = setTimeout(() => {
      console.log('Welcome screen timer complete, navigating to home');
      setShowWelcome(false);
      navigate('/home');
    }, 5000); // Increased to 5 seconds to allow animations to complete

    return () => clearTimeout(timer);
  }, [navigate]);
  
  const handleSkip = () => {
    console.log('Skip button clicked, navigating to home');
    setShowWelcome(false);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#030014]">
      {showWelcome && <WelcomeScreen onSkip={handleSkip} />}
    </div>
  );
};

export default Index;
