
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
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

// Auth components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import AuthLayout from "./components/layouts/AuthLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Dashboard imports
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/dashboard/Orders";
import CVReviews from "./pages/dashboard/CVReviews";
import Customers from "./pages/dashboard/Customers";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

// Initialize Supabase client with the provided credentials
const supabaseUrl = "https://qjboemhffxyuddtwkyin.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqYm9lbWhmZnh5dWRkdHdreWluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1OTQ0MzksImV4cCI6MjA1OTE3MDQzOX0.UI_COubAoMovm8ffJWP1H-RObbS8NP7pntMeCIvpEY4";

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabase}>
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
              
              {/* Auth Routes */}
              <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/reset-password" element={<ResetPassword />} />
              </Route>
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Dashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="cv-reviews" element={<CVReviews />} />
                <Route path="customers" element={<Customers />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SessionContextProvider>
    </QueryClientProvider>
  );
};

export default App;
