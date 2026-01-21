// For now, this is a placeholder. In a real app, this would be a server component
// that checks the user's role from a session and redirects accordingly.
// e.g., redirect('/dashboard/farmer') or redirect('/dashboard/buyer')

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle>Welcome to FurahaTalla</CardTitle>
                <CardDescription>Select your role to view the dashboard.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
                <Button asChild><Link href="/dashboard/farmer">Farmer Dashboard</Link></Button>
                <Button asChild><Link href="/dashboard/buyer">Buyer Dashboard</Link></Button>
                <Button asChild variant="secondary"><Link href="/dashboard/admin">Admin Dashboard</Link></Button>
            </CardContent>
        </Card>
    </div>
  )
}
