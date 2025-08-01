import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import MainNav from "./components/MainNav";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ScrollablePage from "./pages/ScrollablePage";

const queryClient = new QueryClient();

const App = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-[#0B0B1E]">
            <MainNav />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/main" element={<ScrollablePage />} />
              {/* Keep original routes for backward compatibility */}
              <Route path="/home" element={<ScrollablePage />} />
              <Route path="/about" element={<ScrollablePage />} />
              <Route path="/portfolio" element={<ScrollablePage />} />
              <Route path="/contact" element={<ScrollablePage />} />
            </Routes>
            <Analytics />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>
);

export default App;