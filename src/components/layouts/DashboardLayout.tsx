
import React from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger 
} from '@/components/ui/sidebar';
import { FileText, LayoutDashboard, Settings, ShoppingCart, Users } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header';

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-6">
            <div className="container mx-auto">
              <div className="flex items-center justify-between mb-6">
                <SidebarTrigger className="lg:hidden" />
                <h1 className="text-2xl font-bold">Dashboard</h1>
              </div>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function DashboardSidebar() {
  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { title: 'Orders', icon: ShoppingCart, path: '/dashboard/orders' },
    { title: 'CV Reviews', icon: FileText, path: '/dashboard/cv-reviews' },
    { title: 'Customers', icon: Users, path: '/dashboard/customers' },
    { title: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <div className="py-4 px-6 border-b">
          <h2 className="font-bold text-xl">Career Services</h2>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
