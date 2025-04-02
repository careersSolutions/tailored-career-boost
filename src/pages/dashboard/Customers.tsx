
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Search, UserPlus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const customerData = [
  { id: '1001', name: 'John Smith', email: 'john.smith@example.com', orders: 3, spent: '$349.97', lastOrder: '2023-10-15' },
  { id: '1002', name: 'Jane Doe', email: 'jane.doe@example.com', orders: 1, spent: '$49.99', lastOrder: '2023-10-16' },
  { id: '1003', name: 'Michael Johnson', email: 'michael.j@example.com', orders: 2, spent: '$299.98', lastOrder: '2023-10-17' },
  { id: '1004', name: 'Emily Wilson', email: 'emily.w@example.com', orders: 4, spent: '$549.96', lastOrder: '2023-10-18' },
  { id: '1005', name: 'David Brown', email: 'david.b@example.com', orders: 1, spent: '$99.99', lastOrder: '2023-10-19' },
  { id: '1006', name: 'Sarah Miller', email: 'sarah.m@example.com', orders: 2, spent: '$249.98', lastOrder: '2023-10-20' },
  { id: '1007', name: 'Robert Davis', email: 'robert.d@example.com', orders: 3, spent: '$399.97', lastOrder: '2023-10-21' },
  { id: '1008', name: 'Jennifer Garcia', email: 'jennifer.g@example.com', orders: 1, spent: '$199.99', lastOrder: '2023-10-22' },
];

const Customers = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search customers..."
            className="h-10 w-[300px] rounded-md border border-input pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
        </CardHeader>
        <CardContent>
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
              {customerData.map((customer) => (
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
                        <p className="text-xs text-gray-500">ID: #{customer.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
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

export default Customers;
