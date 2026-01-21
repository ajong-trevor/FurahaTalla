import {
  DollarSign,
  Users,
  FileText,
  ShieldCheck,
  MessageSquareWarning,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$234,831.00</div>
            <p className="text-xs text-muted-foreground">
              Total value of all contracts
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contracts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">
              Farmers and buyers awaiting approval
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
            <CardHeader>
                <CardTitle>User Verification Queue</CardTitle>
                <CardDescription>New users awaiting verification.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Juma Omondi</div>
                                <div className="text-sm text-muted-foreground">juma@example.com</div>
                            </TableCell>
                            <TableCell><Badge>Farmer</Badge></TableCell>
                            <TableCell>2024-05-23</TableCell>
                            <TableCell><Button size="sm">Verify</Button></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>
                                <div className="font-medium">AgriCorp Inc.</div>
                                <div className="text-sm text-muted-foreground">contact@agricorp.com</div>
                            </TableCell>
                            <TableCell><Badge variant="secondary">Buyer</Badge></TableCell>
                            <TableCell>2024-05-22</TableCell>
                            <TableCell><Button size="sm">Verify</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card className="lg:col-span-3">
             <CardHeader>
                <CardTitle className="flex items-center gap-2"><MessageSquareWarning className="h-5 w-5"/>Disputes</CardTitle>
                <CardDescription>Contracts with active disputes.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Contract ID</TableHead>
                        <TableHead>Reason</TableHead>
                        <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell><div className="font-mono text-sm">#C48-3A1</div></TableCell>
                            <TableCell>Delivery Quality</TableCell>
                            <TableCell><Button size="sm" variant="outline">Review</Button></TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell><div className="font-mono text-sm">#B91-7E4</div></TableCell>
                            <TableCell>Late Delivery</TableCell>
                            <TableCell><Button size="sm" variant="outline">Review</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
