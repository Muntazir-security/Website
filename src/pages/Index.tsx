import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Starting welcome screen timer');
    const timer = setTimeout(() => {
      console.log('Welcome screen timer complete, navigating to main page');
      setShowWelcome(false);
      navigate('/main');
    }, 4500); // 4.5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      {showWelcome && <WelcomeScreen />}
    </div>
  );
};

export default Index;