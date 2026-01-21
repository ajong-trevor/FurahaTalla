import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function NewListingPage() {
    return (
        <div className="container mx-auto max-w-3xl py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Harvest Listing</CardTitle>
                    <CardDescription>
                        List your future harvest to attract buyers and secure contracts early.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="crop-type">Crop Type</Label>
                            <Input id="crop-type" placeholder="e.g., Cherry Tomatoes, Hass Avocado" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="quantity">Expected Quantity</Label>
                                <Input id="quantity" type="number" placeholder="500" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="quantity-unit">Unit</Label>
                                <Select defaultValue="kg">
                                    <SelectTrigger id="quantity-unit">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kg">Kilograms (kg)</SelectItem>
                                        <SelectItem value="tonne">Tonnes</SelectItem>
                                        <SelectItem value="units">Units</SelectItem>
                                        <SelectItem value="box">Boxes</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                         <div className="grid md:grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="min-price">Minimum Acceptable Price</Label>
                                <Input id="min-price" type="number" placeholder="0.80" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="price-unit">Per Unit</Label>
                                <Select defaultValue="kg">
                                    <SelectTrigger id="price-unit">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kg">per kg</SelectItem>
                                        <SelectItem value="tonne">per tonne</SelectItem>
                                        <SelectItem value="unit">per unit</SelectItem>
                                        <SelectItem value="box">per box</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="harvest-date">Expected Harvest Date</Label>
                                <Input id="harvest-date" type="date" />
                            </div>
                             <div className="grid gap-2">
                                <Label htmlFor="location">Farm Location</Label>
                                <Input id="location" placeholder="e.g., Nyeri, Kenya" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Additional Details (optional)</Label>
                            <Textarea id="description" placeholder="Describe your produce, farming practices (e.g., organic), or any other relevant information."/>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Create Listing</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
