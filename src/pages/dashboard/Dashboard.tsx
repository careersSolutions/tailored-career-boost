
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, FileText, ShoppingCart, Users } from 'lucide-react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Order, CVReview } from '@/utils/supabaseClient';
import { toast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const user = useUser();
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [reviews, setReviews] = useState<CVReview[]>([]);
  const [recentActivity, setRecentActivity] = useState<Array<{ type: 'order' | 'review', id: string, time: string }>>([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Get user's orders
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id);
        
      if (orderError) throw orderError;
      setOrders(orderData || []);
      
      // Get user's CV reviews
      const { data: reviewData, error: reviewError } = await supabase
        .from('cv_reviews')
        .select('*')
        .eq('user_id', user?.id);
        
      if (reviewError) throw reviewError;
      setReviews(reviewData || []);
      
      // Combine and sort recent activity
      const activity = [
        ...(orderData || []).map(order => ({
          type: 'order' as const,
          id: order.id,
          time: order.created_at
        })),
        ...(reviewData || []).map(review => ({
          type: 'review' as const,
          id: review.id,
          time: review.submitted_at
        }))
      ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
       .slice(0, 5);
       
      setRecentActivity(activity);
      
      // Create monthly data for chart
      generateMonthlyData(orderData || []);
    } catch (error: any) {
      console.error('Error loading dashboard data:', error);
      toast({
        title: "Error loading dashboard data",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const generateMonthlyData = (orderData: Order[]) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentMonth = new Date().getMonth();
    
    const last6Months = Array.from({ length: 6 }, (_, i) => {
      const monthIndex = (currentMonth - i + 12) % 12;
      return {
        name: months[monthIndex],
        value: 0
      };
    }).reverse();
    
    // Count orders by month
    orderData.forEach(order => {
      const orderDate = new Date(order.created_at);
      const monthIndex = orderDate.getMonth();
      const monthName = months[monthIndex];
      
      const monthData = last6Months.find(m => m.name === monthName);
      if (monthData) {
        monthData.value += 1;
      }
    });
    
    setMonthlyData(last6Months);
  };

  const getTotalRevenue = () => {
    if (!orders.length) return "$0";
    const total = orders.reduce((sum, order) => sum + order.price, 0);
    return `$${total.toFixed(2)}`;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Orders" 
          value={orders.length.toString()}
          change="Based on your activity" 
          icon={<ShoppingCart className="h-6 w-6" />} 
        />
        <StatCard 
          title="CV Reviews" 
          value={reviews.length.toString()}
          change="Based on your submissions" 
          icon={<FileText className="h-6 w-6" />} 
        />
        <StatCard 
          title="Completed Services" 
          value={orders.filter(o => o.status === 'Completed').length.toString()}
          change="Orders completed" 
          icon={<Users className="h-6 w-6" />} 
        />
        <StatCard 
          title="Total Spent" 
          value={getTotalRevenue()}
          change="Across all orders" 
          icon={<ArrowUpRight className="h-6 w-6" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Orders</CardTitle>
            <CardDescription>
              Number of orders processed per month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0D2E5C" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest orders and reviews
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center p-8">Loading activity...</div>
            ) : recentActivity.length > 0 ? (
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                    <div className={`p-2 rounded-full ${activity.type === 'order' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                      {activity.type === 'order' ? <ShoppingCart className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium">
                        {activity.type === 'order' ? 'New order' : 'CV Review'} #{activity.id.substring(0, 8)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(activity.time).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No recent activity to display
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, change, icon }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 mt-1">{change}</p>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
