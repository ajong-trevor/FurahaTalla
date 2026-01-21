import type { ReactNode } from "react";
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <DashboardSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col h-full">
            <DashboardHeader />
            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                {children}
            </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
