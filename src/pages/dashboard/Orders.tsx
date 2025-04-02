
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EyeIcon, MoreHorizontal, RefreshCw } from 'lucide-react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Order } from '@/utils/supabaseClient';
import { toast } from '@/components/ui/use-toast';

const StatusBadge = ({ status }: { status: string }) => {
  let colorClass = '';
  
  switch (status) {
    case 'Completed':
      colorClass = 'bg-green-100 text-green-800';
      break;
    case 'In Progress':
      colorClass = 'bg-blue-100 text-blue-800';
      break;
    case 'Pending':
      colorClass = 'bg-yellow-100 text-yellow-800';
      break;
    default:
      colorClass = 'bg-gray-100 text-gray-800';
  }
  
  return <Badge className={colorClass}>{status}</Badge>;
};

const Orders = () => {
  const user = useUser();
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      loadOrders();
    }
  }, [user]);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setOrders(data || []);
    } catch (error: any) {
      console.error('Error loading orders:', error);
      toast({
        title: "Error loading orders",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Orders</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" onClick={loadOrders} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="outline">Export</Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center p-8">Loading orders...</div>
          ) : orders.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>#{order.id.substring(0, 8)}</TableCell>
                    <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>{order.service}</TableCell>
                    <TableCell>${order.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <StatusBadge status={order.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <EyeIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500">
              You haven't placed any orders yet.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
