
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Search, UserPlus, RefreshCw } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { toast } from '@/components/ui/use-toast';

type Customer = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  orders_count: number;
  total_spent: number;
  last_order_date?: string;
};

const Customers = () => {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    setLoading(true);
    try {
      // First get all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*');
        
      if (profilesError) throw profilesError;
      
      if (!profiles || profiles.length === 0) {
        setCustomers([]);
        return;
      }
      
      // Then get order info for each user
      const customersWithOrders = await Promise.all(
        profiles.map(async (profile) => {
          // Get orders
          const { data: orders, error: ordersError } = await supabase
            .from('orders')
            .select('*')
            .eq('user_id', profile.id)
            .order('created_at', { ascending: false });
            
          if (ordersError) throw ordersError;
          
          const orderCount = orders?.length || 0;
          const totalSpent = orders?.reduce((sum, order) => sum + (order.price || 0), 0) || 0;
          const lastOrderDate = orders && orders.length > 0 ? orders[0].created_at : undefined;
          
          return {
            id: profile.id,
            name: profile.name || 'Unknown User',
            email: profile.email || 'No email',
            created_at: profile.created_at,
            orders_count: orderCount,
            total_spent: totalSpent,
            last_order_date: lastOrderDate
          } as Customer;
        })
      );
      
      setCustomers(customersWithOrders);
    } catch (error: any) {
      console.error('Error loading customers:', error);
      toast({
        title: "Error loading customers",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search customers..."
            className="h-10 w-[300px] rounded-md border border-input pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={loadCustomers} disabled={loading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center p-8">Loading customers...</div>
          ) : filteredCustomers.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-xs text-gray-500">Since {new Date(customer.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.orders_count}</TableCell>
                    <TableCell>${customer.total_spent.toFixed(2)}</TableCell>
                    <TableCell>{customer.last_order_date ? new Date(customer.last_order_date).toLocaleDateString() : 'Never'}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No customers found.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
