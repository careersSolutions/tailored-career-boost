
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CVReview from "./pages/CVReview";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import CVWriting from "./pages/services/CVWriting";
import CoverLetter from "./pages/services/CoverLetter";
import LinkedInOptimization from "./pages/services/LinkedInOptimization";
import InterviewCoaching from "./pages/services/InterviewCoaching";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cv-review" element={<CVReview />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Services Routes */}
          <Route path="/services/cv-writing" element={<CVWriting />} />
          <Route path="/services/cover-letter" element={<CoverLetter />} />
          <Route path="/services/linkedin-optimization" element={<LinkedInOptimization />} />
          <Route path="/services/interview-coaching" element={<InterviewCoaching />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
