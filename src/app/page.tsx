import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { placeholderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Users, FileText, Truck, Leaf, Banknote } from "lucide-react";

export default function Home() {
  const heroImage = placeholderImages.find(img => img.id === "hero");
  const farmerImage = placeholderImages.find(img => img.id === "farmer-smiling");
  const buyerImage = placeholderImages.find(img => img.id === "market-stall");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
           {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover z-0"
                priority
                data-ai-hint={heroImage.imageHint}
             />
           )}
           <div className="absolute inset-0 bg-primary/80 z-10" />
           <div className="container mx-auto px-4 md:px-6 relative z-20 text-center text-primary-foreground">
             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
               Secure Your Harvest, Stabilize Your Future
             </h1>
             <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl">
               FurahaTalla connects smallholder farmers with buyers through forward contracts, ensuring predictable income and reliable supply chains.
             </p>
             <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
               <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                 <Link href="/signup">Get Started</Link>
               </Button>
               <Button asChild size="lg" variant="secondary">
                 <Link href="/browse">Browse Harvests</Link>
               </Button>
             </div>
           </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">How FurahaTalla Works</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A simple, transparent process for a thriving agricultural ecosystem.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">1. List Future Harvests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Farmers list their upcoming produce, setting their price and timeline, long before harvest day.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <FileText className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">2. Secure with Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Buyers browse listings and initiate smart, digitally-signed forward contracts with an advance payment.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Truck className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">3. Fulfill & Get Paid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Upon delivery, the contract is completed, and the final payment is released to the farmer.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* For Farmers Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">For Farmers: Grow with Confidence</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Lock in your prices, secure your income, and get access to advance payments to fund your operations. Say goodbye to market uncertainty.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Predictable Income:</strong> Sell your harvest months in advance at a guaranteed price.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Access to Capital:</strong> Receive an advance payment upon signing a contract to cover costs.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Wider Market Access:</strong> Connect with a network of verified, reliable buyers beyond your local market.</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/signup?role=farmer">Start Selling</Link>
                </Button>
              </div>
            </div>
            <div className="h-80 w-full relative rounded-lg overflow-hidden shadow-xl">
              {farmerImage && <Image src={farmerImage.imageUrl} alt={farmerImage.description} layout="fill" objectFit="cover" data-ai-hint={farmerImage.imageHint}/>}
            </div>
          </div>
        </section>

        {/* For Buyers Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
             <div className="h-80 w-full relative rounded-lg overflow-hidden shadow-xl md:order-last">
               {buyerImage && <Image src={buyerImage.imageUrl} alt={buyerImage.description} layout="fill" objectFit="cover" data-ai-hint={buyerImage.imageHint} />}
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">For Buyers: Source with Stability</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Secure your future supply of fresh produce directly from farmers. Enjoy price stability and transparent, traceable supply chains.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Reliable Supply:</strong> Guarantee your produce supply chain against price volatility and shortages.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Stable Pricing:</strong> Lock in prices for future deliveries and manage your budget effectively.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Direct & Transparent:</strong> Build relationships with farmers and gain full visibility into your supply source.</span>
                </li>
              </ul>
               <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/signup?role=buyer">Start Buying</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
