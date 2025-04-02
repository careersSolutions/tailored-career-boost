
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EyeIcon, MoreHorizontal } from 'lucide-react';

const orderData = [
  { id: '001', customer: 'John Smith', date: '2023-10-15', service: 'CV Writing', price: '$99.99', status: 'Completed' },
  { id: '002', customer: 'Jane Doe', date: '2023-10-16', service: 'Cover Letter', price: '$49.99', status: 'In Progress' },
  { id: '003', customer: 'Michael Johnson', date: '2023-10-17', service: 'LinkedIn Optimization', price: '$149.99', status: 'Pending' },
  { id: '004', customer: 'Emily Wilson', date: '2023-10-18', service: 'Interview Coaching', price: '$199.99', status: 'Completed' },
  { id: '005', customer: 'David Brown', date: '2023-10-19', service: 'CV Writing', price: '$99.99', status: 'In Progress' },
  { id: '006', customer: 'Sarah Miller', date: '2023-10-20', service: 'Cover Letter', price: '$49.99', status: 'Pending' },
  { id: '007', customer: 'Robert Davis', date: '2023-10-21', service: 'LinkedIn Optimization', price: '$149.99', status: 'Completed' },
  { id: '008', customer: 'Jennifer Garcia', date: '2023-10-22', service: 'Interview Coaching', price: '$199.99', status: 'In Progress' },
];

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
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Orders</CardTitle>
          <Button variant="outline">Export</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>#{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.service}</TableCell>
                  <TableCell>{order.price}</TableCell>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
