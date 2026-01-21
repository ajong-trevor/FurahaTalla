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
import { Badge } from "@/components/ui/badge"
import { DollarSign } from "lucide-react"

const mockPayments = [
    { id: '1', contractId: '#C48-3A1', type: 'Advance', amount: 'FCFA 22,000', date: '2026-06-01', status: 'Paid' },
    { id: '2', contractId: '#B91-7E4', type: 'Advance', amount: 'FCFA 90,000', date: '2026-06-15', status: 'Pending' },
    { id: '3', contractId: '#D22-9F0', type: 'Advance', amount: 'FCFA 15,000', date: '2026-05-20', status: 'Paid' },
    { id: '4', contractId: '#D22-9F0', type: 'Final', amount: 'FCFA 60,000', date: '2026-09-25', status: 'Paid' },
];

const statusVariant = {
    'Paid': 'default',
    'Pending': 'secondary',
} as const;

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-8">
        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Received</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">FCFA 97,000</div>
                    <p className="text-xs text-muted-foreground">
                    from all completed payments.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">FCFA 90,000</div>
                    <p className="text-xs text-muted-foreground">
                    Awaiting from buyers.
                    </p>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>A record of all your transactions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                        Payment ID
                    </TableHead>
                    <TableHead>Contract ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="hidden md:table-cell">
                        Date
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockPayments.map(payment => (
                    <TableRow key={payment.id}>
                        <TableCell className="hidden sm:table-cell font-mono">{payment.id}</TableCell>
                        <TableCell className="font-medium font-mono">{payment.contractId}</TableCell>
                        <TableCell>
                            <Badge variant={payment.type === 'Advance' ? 'outline' : 'default'}>{payment.type}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{payment.date}</TableCell>
                        <TableCell className="hidden md:table-cell">
                            <Badge variant={statusVariant[payment.status as keyof typeof statusVariant] || 'outline'}>{payment.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">{payment.amount}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  )
}
