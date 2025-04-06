
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import UserCVReviews from '@/components/UserCVReviews';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@supabase/auth-helpers-react';
import { useUserProfile } from '@/hooks/useUserProfile';

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = useUser();
  const { profile } = useUserProfile();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {profile?.name || user?.email?.split('@')[0] || 'User'}!</CardTitle>
          <CardDescription>
            View your CV review requests and track their status
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate('/cv-review')}
              className="bg-cs-navy hover:bg-cs-navy/90"
            >
              Request New CV Review
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/services/cv-writing')}
            >
              Explore Professional Services
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <UserCVReviews />
    </div>
  );
};

export default UserDashboard;
