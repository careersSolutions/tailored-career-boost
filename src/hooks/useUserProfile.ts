
import { useState, useEffect } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { toast } from '@/components/ui/use-toast';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
  created_at: string;
  updated_at?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
};

export function useUserProfile() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
      setLoading(false);
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // First check if profile exists
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        if (error.code === 'PGRST116') {
          // Profile doesn't exist, create one
          await createProfile();
          return;
        }
        throw error;
      }
      
      setProfile(data as UserProfile);
    } catch (err: any) {
      console.error('Error fetching profile:', err);
      setError(err);
      toast({
        title: "Error fetching profile",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createProfile = async () => {
    if (!user) return;
    
    try {
      // Create a new profile
      const newProfile = {
        id: user.id,
        name: user.user_metadata?.name || user.email?.split('@')[0] || 'New User',
        email: user.email,
        created_at: new Date().toISOString(),
      };
      
      const { data, error } = await supabase
        .from('profiles')
        .insert([newProfile])
        .select();
      
      if (error) throw error;
      
      setProfile(data[0] as UserProfile);
    } catch (err: any) {
      console.error('Error creating profile:', err);
      setError(err);
      toast({
        title: "Error creating profile",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user || !profile) return null;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)
        .select();
      
      if (error) throw error;
      
      setProfile(data[0] as UserProfile);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
      
      return data[0] as UserProfile;
    } catch (err: any) {
      console.error('Error updating profile:', err);
      setError(err);
      toast({
        title: "Error updating profile",
        description: err.message,
        variant: "destructive",
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { profile, loading, error, fetchProfile, updateProfile };
}
