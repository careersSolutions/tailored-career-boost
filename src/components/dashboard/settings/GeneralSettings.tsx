
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from "@/components/ui/use-toast";

const GeneralSettings = () => {
  const supabase = useSupabaseClient();
  const [name, setName] = React.useState('Admin User');
  const [email, setEmail] = React.useState('admin@example.com');
  const [company, setCompany] = React.useState('Career Services Inc.');
  const [website, setWebsite] = React.useState('https://careerservices.example.com');
  const [isSaving, setIsSaving] = React.useState(false);

  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      // Update user profile in Supabase
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: (await supabase.auth.getUser()).data.user?.id,
          name: name,
          company: company,
          website: website,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      
      toast({
        title: "Settings saved",
        description: "Your profile information has been updated.",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
        <CardDescription>
          Manage your account settings and preferences.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
                disabled
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Company Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <input
                id="website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full p-2 border rounded-md"
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

export default GeneralSettings;
