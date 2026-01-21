import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sprout, MapPin, Calendar, DollarSign, ListFilter, ArrowRight } from "lucide-react";
import Link from "next/link";

const listings = [
    { id: '1', crop: 'Tomatoes', farmer: 'Abebe Bikila', location: 'Oromia, Ethiopia', quantity: '500 kg', price: '$0.80/kg', date: '2024-08-15' },
    { id: '2', crop: 'Maize', farmer: 'Fatima Zahra', location: 'Rift Valley, Kenya', quantity: '2 tonnes', price: '$350/tonne', date: '2024-09-01' },
    { id: '3', crop: 'Coffee Beans', farmer: 'Kofi Annan Farms', location: 'Sidama, Ethiopia', quantity: '1 tonne', price: '$4.50/kg', date: '2024-11-20' },
    { id: '4', crop: 'Green Beans', farmer: 'Grace Mumbi', location: 'Nyeri, Kenya', quantity: '300 kg', price: '$1.20/kg', date: '2024-07-30' },
];

export default function BrowsePage() {
    return (
        <div className="container mx-auto py-8 px-4 md:px-6">
            <header className="mb-8">
                <h1 className="text-4xl font-bold font-headline">Browse Future Harvests</h1>
                <p className="text-lg text-muted-foreground mt-2">Secure your supply chain by purchasing tomorrow's harvest today.</p>
            </header>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Filters */}
                <aside className="w-full md:w-1/4 lg:w-1/5">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ListFilter className="h-5 w-5" />
                                Filters
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="crop-type">Crop Type</Label>
                                <Input id="crop-type" placeholder="e.g., Tomatoes" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" placeholder="e.g., Kenya" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="sort-by">Sort By</Label>
                                <Select>
                                    <SelectTrigger id="sort-by">
                                        <SelectValue placeholder="Relevance" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="relevance">Relevance</SelectItem>
                                        <SelectItem value="date">Harvest Date</SelectItem>
                                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                             <Button className="w-full">Apply Filters</Button>
                        </CardContent>
                    </Card>
                </aside>

                {/* Listings */}
                <main className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listings.map(listing => (
                         <Card key={listing.id} className="flex flex-col">
                         <CardHeader>
                           <CardTitle className="flex items-center gap-2"><Sprout className="h-5 w-5 text-primary"/>{listing.crop}</CardTitle>
                           <CardDescription>by {listing.farmer}</CardDescription>
                         </CardHeader>
                         <CardContent className="flex-1 grid gap-3 text-sm">
                           <div className="flex items-center gap-2">
                             <MapPin className="h-4 w-4 text-muted-foreground" />
                             <span className="text-muted-foreground">{listing.location}</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <Calendar className="h-4 w-4 text-muted-foreground" />
                             <span className="text-muted-foreground">Harvest: {listing.date}</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <DollarSign className="h-4 w-4 text-muted-foreground" />
                             <span className="font-semibold">{listing.price}</span>
                           </div>
                         </CardContent>
                         <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/dashboard/contracts/initiate?listingId=${listing.id}`}>
                                    Initiate Contract <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                           </Button>
                         </CardFooter>
                       </Card>
                    ))}
                </main>
            </div>
        </div>
    );
}
