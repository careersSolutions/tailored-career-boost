
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '@/components/ui/table';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useQuery } from '@tanstack/react-query';

const BillingSettings = () => {
  const supabase = useSupabaseClient();
  
  // Fetch billing history from Supabase
  const { data: invoices, isLoading } = useQuery({
    queryKey: ['billing-history'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Settings</CardTitle>
        <CardDescription>
          Manage your billing information and subscription.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Current Plan</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-xl">Professional Plan</p>
                <p className="text-gray-500">$99/month - Billed monthly</p>
              </div>
              <Button variant="outline">Upgrade</Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Payment Method</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded border">
                  <svg width="40" height="28" viewBox="0 0 40 28" className="h-5 w-auto">
                    <rect width="40" height="28" rx="4" fill="#016FD0" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 21.5245L23.8627 16.5735H16.1373L20 21.5245Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.0274 11.1713H23.9695L23.7861 10.675C23.2933 9.32362 22.8687 8.17612 22.8687 8.17362L20.0018 11.1713H16.0274Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M32.1942 17.3054V16.8054H32.5169L32.6512 17.0991L32.785 16.8054H33.1077V17.3054H32.8887V16.9304L32.7402 17.2379H32.5622L32.4132 16.9298V17.3054H32.1942ZM31.7099 17.3054V16.9991H31.4904V16.8054H32.1486V16.9991H31.9296V17.3054H31.7099Z" fill="white" />
                    <path d="M33.5 13.9179C33.5 16.3554 31.5376 18.3179 29.1 18.3179C26.6624 18.3179 24.7 16.3554 24.7 13.9179C24.7 11.4803 26.6624 9.51788 29.1 9.51788C31.5376 9.51788 33.5 11.4803 33.5 13.9179Z" fill="white" />
                    <path d="M34.5 14C34.5 16.7615 32.2616 19.0001 29.5001 19.0001C26.7387 19.0001 24.5 16.7615 24.5 14C24.5 11.2387 26.7387 9 29.5001 9C32.2616 9 34.5 11.2387 34.5 14Z" stroke="white" strokeWidth="0.4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.9908 12.8988H14.6824L14.8081 14.2188L14.976 15.8375H19.8926H24.8094L26.144 12.8988H20.9908Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">American Express ending in 1234</p>
                  <p className="text-sm text-gray-500">Expires 12/2026</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Change</Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Billing History</h3>
          {isLoading ? (
            <div className="text-center py-4">Loading billing history...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Invoice</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices && invoices.length > 0 ? (
                  invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell>{new Date(invoice.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>{invoice.status}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Download</Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-4">
                      No billing history available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingSettings;
