import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import WelcomeScreen from "./components/WelcomeScreen";

const queryClient = new QueryClient();

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    console.log('App mounted, showing welcome screen');
    const timer = setTimeout(() => {
      console.log('5 seconds elapsed, hiding welcome screen');
      setShowWelcome(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {showWelcome ? (
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          ) : (
            <div className="min-h-screen bg-[#0B0B1E]">
              <MainNav onLogoClick={() => setShowWelcome(true)} />
              <div className="scroll-smooth">
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="portfolio">
                  <Portfolio />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </div>
            </div>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;