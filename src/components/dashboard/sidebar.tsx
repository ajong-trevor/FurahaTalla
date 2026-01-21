"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  Package,
  FileText,
  Settings,
  ShieldCheck,
  Landmark,
  ShoppingCart,
  LayoutDashboard,
  Sprout,
} from "lucide-react";
import { Button } from "../ui/button";

const farmerNav = [
  { href: "/dashboard/farmer", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/farmer/listings", label: "My Listings", icon: Sprout },
  { href: "/dashboard/contracts", label: "Contracts", icon: FileText },
  { href: "/dashboard/payments", label: "Payments", icon: Landmark },
];

const buyerNav = [
  { href: "/dashboard/buyer", label: "Dashboard", icon: LayoutDashboard },
  { href: "/browse", label: "Browse Harvests", icon: ShoppingCart },
  { href: "/dashboard/contracts", label: "My Contracts", icon: FileText },
  { href: "/dashboard/payments", label: "Payments", icon: Landmark },
];

const adminNav = [
  { href: "/dashboard/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/admin/users", label: "User Management", icon: Users },
  { href: "/dashboard/admin/verifications", label: "Verifications", icon: ShieldCheck },
  { href: "/dashboard/admin/contracts", label: "All Contracts", icon: FileText },
  { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  // This is a mock. In a real app, you'd get the user role from an auth context.
  const userRole = pathname.split("/")[2] || 'farmer';

  const navItems = userRole === 'farmer' ? farmerNav : userRole === 'buyer' ? buyerNav : adminNav;

  return (
    <>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline">FurahaTalla</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  className="w-full justify-start"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <div className="flex flex-col gap-2 p-2">
            <span className="text-sm font-semibold">Jane Doe</span>
            <span className="text-xs text-muted-foreground capitalize">{userRole}</span>
        </div>
      </SidebarFooter>
    </>
  );
}
