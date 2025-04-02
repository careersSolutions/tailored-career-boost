
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSessionContext } from '@supabase/auth-helpers-react';
import Header from '../Header';
import Footer from '../Footer';

const AuthLayout = () => {
  const { isLoading, session } = useSessionContext();

  // If authenticated, redirect to dashboard
  if (!isLoading && session) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
