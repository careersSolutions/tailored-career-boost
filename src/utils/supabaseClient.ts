
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with the provided credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://qjboemhffxyuddtwkyin.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqYm9lbWhmZnh5dWRkdHdreWluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1OTQ0MzksImV4cCI6MjA1OTE3MDQzOX0.UI_COubAoMovm8ffJWP1H-RObbS8NP7pntMeCIvpEY4";

// Validate Supabase credentials
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export type User = {
  id: string;
  email: string;
  name: string;
  created_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  service: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  price: number;
  created_at: string;
};

export type CVReview = {
  id: string;
  user_id: string;
  status: 'Pending' | 'In Review' | 'Completed';
  reviewer_id?: string;
  submitted_at: string;
  deadline: string;
  cv_url: string;
  feedback?: string;
};

// Database service functions
export const dbService = {
  // User related functions
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },
  
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
      
    if (error) throw error;
    return data;
  },
  
  async updateUserProfile(userId: string, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId);
      
    if (error) throw error;
    return data;
  },
  
  // Order related functions
  async getOrders(userId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },
  
  async createOrder(order: Omit<Order, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('orders')
      .insert([order])
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // CV Review related functions
  async getCVReviews(userId: string) {
    const { data, error } = await supabase
      .from('cv_reviews')
      .select('*')
      .eq('user_id', userId)
      .order('submitted_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },
  
  async submitCVForReview(cvReview: Omit<CVReview, 'id' | 'submitted_at'>) {
    const { data, error } = await supabase
      .from('cv_reviews')
      .insert([{
        ...cvReview,
        submitted_at: new Date().toISOString()
      }])
      .select();
      
    if (error) throw error;
    return data[0];
  },
  
  // Admin functions
  async getAllOrders() {
    const { data, error } = await supabase
      .from('orders')
      .select('*, profiles:user_id(name, email)')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },
  
  async getAllCVReviews() {
    const { data, error } = await supabase
      .from('cv_reviews')
      .select('*, profiles:user_id(name, email), reviewers:reviewer_id(name)')
      .order('submitted_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },
  
  async getAllCustomers() {
    const { data, error } = await supabase
      .from('profiles')
      .select('*, orders(count), cv_reviews(count)')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },
};
