
import { useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { toast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';

export type CVReviewSubmission = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  cvFile: File;
};

export type CVReview = {
  id: string;
  user_id: string;
  cv_url: string;
  status: 'Pending' | 'In Review' | 'Completed';
  submitted_at: string;
  deadline: string;
  feedback: string | null;
  reviewer_id: string | null;
};

export function useCVReview() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState<CVReview[]>([]);
  const [loading, setLoading] = useState(true);

  const submitCVForReview = async (data: CVReviewSubmission): Promise<{ success: boolean; message: string }> => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit your CV for review",
        variant: "destructive",
      });
      return { success: false, message: "Authentication required" };
    }

    setIsSubmitting(true);
    
    try {
      // Upload CV file to storage
      const fileExt = data.cvFile.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('cv-reviews')
        .upload(filePath, data.cvFile);
      
      if (uploadError) {
        throw uploadError;
      }
      
      // Get public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from('cv-reviews')
        .getPublicUrl(filePath);
      
      // Insert CV review record
      const { error: insertError } = await supabase
        .from('cv_reviews')
        .insert({
          user_id: user.id,
          cv_url: urlData.publicUrl,
          status: 'Pending',
        });
      
      if (insertError) {
        throw insertError;
      }
      
      toast({
        title: "CV Submitted Successfully!",
        description: "Our team will review your CV and get back to you within 48 hours.",
      });
      
      return { success: true, message: "CV submitted successfully" };
    } catch (error: any) {
      console.error("Error submitting CV for review:", error);
      toast({
        title: "Error submitting CV",
        description: error.message || "There was a problem submitting your CV.",
        variant: "destructive",
      });
      return { success: false, message: error.message || "Error submitting CV" };
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchUserCVReviews = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('cv_reviews')
        .select('*')
        .eq('user_id', user.id)
        .order('submitted_at', { ascending: false });
      
      if (error) throw error;
      setReviews(data as CVReview[]);
    } catch (error: any) {
      console.error("Error fetching CV reviews:", error);
      toast({
        title: "Error fetching reviews",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchCVReviewById = async (reviewId: string) => {
    try {
      const { data, error } = await supabase
        .from('cv_reviews')
        .select('*')
        .eq('id', reviewId)
        .single();
      
      if (error) throw error;
      return data as CVReview;
    } catch (error: any) {
      console.error("Error fetching CV review:", error);
      toast({
        title: "Error fetching review",
        description: error.message,
        variant: "destructive",
      });
      return null;
    }
  };

  const fetchAllCVReviews = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('cv_reviews')
        .select(`
          *,
          profiles:user_id (name, email)
        `)
        .order('submitted_at', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (error: any) {
      console.error("Error fetching all CV reviews:", error);
      toast({
        title: "Error fetching reviews",
        description: error.message,
        variant: "destructive",
      });
      return [];
    } finally {
      setLoading(false);
    }
  };

  const updateCVReviewStatus = async (reviewId: string, status: 'Pending' | 'In Review' | 'Completed') => {
    try {
      const { error } = await supabase
        .from('cv_reviews')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', reviewId);
        
      if (error) throw error;
      
      toast({
        title: "Status updated",
        description: `CV review status changed to ${status}`,
      });
      
      return true;
    } catch (error: any) {
      console.error("Error updating CV review status:", error);
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
      return false;
    }
  };

  const provideFeedback = async (reviewId: string, feedback: string) => {
    try {
      const { error } = await supabase
        .from('cv_reviews')
        .update({ 
          feedback,
          status: 'Completed',
          updated_at: new Date().toISOString()
        })
        .eq('id', reviewId);
        
      if (error) throw error;
      
      toast({
        title: "Feedback provided",
        description: "Your feedback has been submitted successfully",
      });
      
      return true;
    } catch (error: any) {
      console.error("Error providing feedback:", error);
      toast({
        title: "Error submitting feedback",
        description: error.message,
        variant: "destructive",
      });
      return false;
    }
  };

  const assignReviewer = async (reviewId: string, reviewerId: string) => {
    try {
      const { error } = await supabase
        .from('cv_reviews')
        .update({ 
          reviewer_id: reviewerId,
          status: 'In Review',
          updated_at: new Date().toISOString()
        })
        .eq('id', reviewId);
        
      if (error) throw error;
      
      toast({
        title: "Reviewer assigned",
        description: "Reviewer has been assigned to this CV review",
      });
      
      return true;
    } catch (error: any) {
      console.error("Error assigning reviewer:", error);
      toast({
        title: "Error assigning reviewer",
        description: error.message,
        variant: "destructive",
      });
      return false;
    }
  };

  return {
    isSubmitting,
    reviews,
    loading,
    submitCVForReview,
    fetchUserCVReviews,
    fetchCVReviewById,
    fetchAllCVReviews,
    updateCVReviewStatus,
    provideFeedback,
    assignReviewer
  };
}
