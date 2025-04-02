
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

// Initialize Supabase client with fallback values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-supabase-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

// Create Supabase client only if both URL and key are provided (and not fallbacks)
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Simple component to show when Supabase credentials are missing
const SupabaseConfigMissing = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
    <h1 className="text-2xl font-bold mb-4">Supabase Configuration Missing</h1>
    <p className="mb-4">
      The application requires Supabase credentials to function properly.
      Please set the following environment variables:
    </p>
    <ul className="list-disc text-left mb-6 inline-block">
      <li><code>VITE_SUPABASE_URL</code> - Your Supabase project URL</li>
      <li><code>VITE_SUPABASE_ANON_KEY</code> - Your Supabase anonymous key</li>
    </ul>
    <p>
      These can be found in your Supabase project settings under "API".
    </p>
  </div>
);

const App = () => {
  // Check if we have real Supabase credentials (not our fallbacks)
  const hasValidSupabaseConfig = 
    supabaseUrl !== 'https://placeholder-supabase-url.supabase.co' && 
    supabaseAnonKey !== 'placeholder-anon-key';

  // If we don't have valid credentials, show the config missing page
  if (!hasValidSupabaseConfig) {
    return <SupabaseConfigMissing />;
  }

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
