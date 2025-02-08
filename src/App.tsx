
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import MainNav from "./components/MainNav";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-[#0B0B1E] overflow-y-auto snap-y snap-mandatory">
            <MainNav />
            <div className="h-screen snap-start" id="index">
              <Index />
            </div>
            <div className="h-screen snap-start" id="home">
              <Home />
            </div>
            <div className="h-screen snap-start" id="about">
              <About />
            </div>
            <div className="h-screen snap-start" id="portfolio">
              <Portfolio />
            </div>
            <div className="h-screen snap-start" id="contact">
              <Contact />
            </div>
            <Analytics />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>
);

export default App;
