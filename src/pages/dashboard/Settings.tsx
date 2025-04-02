
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
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
                      defaultValue="Admin User"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <input
                      id="email"
                      type="email"
                      defaultValue="admin@example.com"
                      className="w-full p-2 border rounded-md"
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
                      defaultValue="Career Services Inc."
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <input
                      id="website"
                      type="text"
                      defaultValue="https://careerservices.example.com"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Orders</p>
                      <p className="text-sm text-gray-500">Get notified when a new order is placed</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">CV Reviews</p>
                      <p className="text-sm text-gray-500">Get notified when a new CV is submitted for review</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Customer Messages</p>
                      <p className="text-sm text-gray-500">Get notified when a customer sends a message</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your password and security preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <input
                      id="current-password"
                      type="password"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <input
                      id="new-password"
                      type="password"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <input
                      id="confirm-password"
                      type="password"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              <Button>Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing">
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
                    <TableRow>
                      <TableCell>Oct 23, 2023</TableCell>
                      <TableCell>$99.00</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Download</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sep 23, 2023</TableCell>
                      <TableCell>$99.00</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Download</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Aug 23, 2023</TableCell>
                      <TableCell>$99.00</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Download</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
