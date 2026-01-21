"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function InitiateContractPage() {
    const searchParams = useSearchParams();
    const listingId = searchParams.get('listingId');

    // In a real app, you'd fetch listing details using the listingId
    
    return (
        <div className="container mx-auto max-w-3xl py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Initiate Contract</CardTitle>
                    <CardDescription>
                        You are about to initiate a contract for listing #{listingId}.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-6">
                        <div className="grid gap-2">
                           <p className="text-sm text-muted-foreground">Listing ID: <strong>{listingId}</strong></p>
                           {/* Display more fetched listing details here */}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="quantity">Quantity to Purchase</Label>
                            <Input id="quantity" type="number" placeholder="Enter quantity" />
                        </div>
                        
                        <div className="grid gap-2">
                            <Label htmlFor="offer-price">Offer Price (per unit)</Label>
                            <Input id="offer-price" type="number" placeholder="Your price offer" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="message">Message to Farmer (optional)</Label>
                            <Textarea id="message" placeholder="Add a personal message or ask a question."/>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Send Contract Proposal</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
