import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Sprout, Calendar, DollarSign, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockListings = [
    { id: '1', crop: 'Heirloom Tomatoes', quantity: '200 kg', price: 'FCFA 550/kg', date: '2026-08-25', status: 'available' },
    { id: '2', crop: 'Sweet Corn', quantity: '1.5 tonnes', price: 'FCFA 300/kg', date: '2026-09-10', status: 'contracted' },
    { id: '3', crop: 'Hass Avocados', quantity: '500 kg', price: 'FCFA 800/kg', date: '2026-10-05', status: 'available' },
    { id: '4', crop: 'Ginger', quantity: '100 kg', price: 'FCFA 750/kg', date: '2026-09-20', status: 'completed' },
];

const statusVariant = {
    available: "default",
    contracted: "secondary",
    completed: "outline"
} as const;


export default function FarmerListingsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold font-headline">My Harvest Listings</h1>
                    <p className="text-muted-foreground mt-1">Manage your current and upcoming harvest listings.</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/farmer/listings/new">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create New Listing
                    </Link>
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockListings.map(listing => (
                    <Card key={listing.id} className="flex flex-col">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="flex items-center gap-2"><Sprout className="h-5 w-5 text-primary" />{listing.crop}</CardTitle>
                                    <CardDescription>{listing.quantity}</CardDescription>
                                </div>
                                <Badge variant={statusVariant[listing.status as keyof typeof statusVariant] || 'outline'} className="capitalize">
                                    {listing.status}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 grid gap-3 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Harvest: {listing.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold">{listing.price}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button variant="outline" size="sm" className="w-full">
                                <Edit className="mr-2 h-4 w-4" /> Edit
                            </Button>
                            <Button variant="destructive" size="sm" className="w-full">
                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
