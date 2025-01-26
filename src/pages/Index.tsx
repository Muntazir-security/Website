import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeScreen from '../components/WelcomeScreen';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Welcome screen displayed, starting 5 second timer');
    const timer = setTimeout(() => {
      console.log('5 seconds elapsed, redirecting to home');
      navigate('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0B0B1E]">
      <WelcomeScreen />
    </div>
  );
};

export default Index;