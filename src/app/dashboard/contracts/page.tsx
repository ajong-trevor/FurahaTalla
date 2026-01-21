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
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mockContracts = [
    { id: '#C48-3A1', buyer: 'AgriCorp Inc.', crop: 'Heirloom Tomatoes', amount: 'FCFA 110,000', deliveryDate: '2026-08-25', status: 'Active' },
    { id: '#B91-7E4', buyer: 'Fresh Produce Ltd.', crop: 'Sweet Corn', amount: 'FCFA 450,000', deliveryDate: '2026-09-10', status: 'Pending Signature' },
    { id: '#D22-9F0', buyer: 'Grocers United', crop: 'Ginger', amount: 'FCFA 75,000', deliveryDate: '2026-09-20', status: 'Completed' },
    { id: '#A55-1C3', buyer: 'Urban Eats', crop: 'Hass Avocados', amount: 'FCFA 400,000', deliveryDate: '2026-10-05', status: 'Delivered' },
];

const statusVariant = {
    'Active': 'default',
    'Pending Signature': 'secondary',
    'Completed': 'outline',
    'Delivered': 'secondary',
} as const;

export default function ContractsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Contracts</CardTitle>
        <CardDescription>
          A list of all your active and past contracts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                Contract ID
              </TableHead>
              <TableHead>Buyer</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead className="hidden md:table-cell">
                Delivery Date
              </TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead>
                <span className="sr-only">Amount</span>
              </TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockContracts.map(contract => (
              <TableRow key={contract.id}>
                <TableCell className="hidden sm:table-cell font-mono">{contract.id}</TableCell>
                <TableCell className="font-medium">{contract.buyer}</TableCell>
                <TableCell>{contract.crop}</TableCell>
                <TableCell className="hidden md:table-cell">{contract.deliveryDate}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <Badge variant={statusVariant[contract.status as keyof typeof statusVariant] || 'outline'}>{contract.status}</Badge>
                </TableCell>
                <TableCell className="text-right">{contract.amount}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Request Payment</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Delivered</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
