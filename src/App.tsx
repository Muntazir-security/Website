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
        <div className="relative min-h-screen w-full overflow-hidden">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {showWelcome ? (
              <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
            ) : (
              <div className="min-h-screen bg-[#0B0B1E]">
                <MainNav onLogoClick={() => setShowWelcome(true)} />
                <div className="scroll-smooth pt-16">
                  <section id="home" className="min-h-screen">
                    <Home />
                  </section>
                  <section id="about" className="min-h-screen">
                    <About />
                  </section>
                  <section id="portfolio" className="min-h-screen">
                    <Portfolio />
                  </section>
                  <section id="contact" className="min-h-screen">
                    <Contact />
                  </section>
                </div>
              </div>
            )}
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;