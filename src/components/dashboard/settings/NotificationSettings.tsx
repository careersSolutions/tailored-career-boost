
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from "@/components/ui/use-toast";

const NotificationSettings = () => {
  const supabase = useSupabaseClient();
  const [notifications, setNotifications] = React.useState({
    newOrders: true,
    cvReviews: true,
    customerMessages: true,
    marketingUpdates: false
  });
  const [isSaving, setIsSaving] = React.useState(false);

  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      // Update notification preferences in Supabase
      const { error } = await supabase
        .from('notification_preferences')
        .upsert({
          user_id: (await supabase.auth.getUser()).data.user?.id,
          ...notifications,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      
      toast({
        title: "Settings saved",
        description: "Your notification preferences have been updated.",
      });
    } catch (error) {
      console.error('Error updating notification preferences:', error);
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Configure how you receive notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Orders</p>
                <p className="text-sm text-gray-500">Get notified when a new order is placed</p>
              </div>
              <Switch 
                checked={notifications.newOrders} 
                onCheckedChange={() => handleToggle('newOrders')} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">CV Reviews</p>
                <p className="text-sm text-gray-500">Get notified when a new CV is submitted for review</p>
              </div>
              <Switch 
                checked={notifications.cvReviews} 
                onCheckedChange={() => handleToggle('cvReviews')} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Customer Messages</p>
                <p className="text-sm text-gray-500">Get notified when a customer sends a message</p>
              </div>
              <Switch 
                checked={notifications.customerMessages} 
                onCheckedChange={() => handleToggle('customerMessages')} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Marketing Updates</p>
                <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
              </div>
              <Switch 
                checked={notifications.marketingUpdates} 
                onCheckedChange={() => handleToggle('marketingUpdates')} 
              />
            </div>
          </div>
        </div>
        
        <Button onClick={handleSaveChanges} disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
