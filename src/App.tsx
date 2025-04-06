import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from '@/integrations/supabase/client';
import { AuthProvider } from './components/auth/AuthProvider';
import ScrollToTop from "./components/ScrollToTop";

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
import CVReviewDetail from "./pages/dashboard/CVReviewDetail";
import Customers from "./pages/dashboard/Customers";
import Settings from "./pages/dashboard/Settings";
import UserDashboard from "./pages/dashboard/UserDashboard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabase}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
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
                  <Route index element={<UserDashboard />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="cv-reviews" element={<CVReviews />} />
                  <Route path="cv-reviews/:reviewId" element={<CVReviewDetail />} />
                  <Route path="customers" element={<Customers />} />
                  <Route path="settings" element={<Settings />} />
                </Route>
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </SessionContextProvider>
    </QueryClientProvider>
  );
};

export default App;
