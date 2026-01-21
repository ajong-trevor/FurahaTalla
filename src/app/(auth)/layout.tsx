import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/icons";
import { placeholderImages } from "@/lib/placeholder-images";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bgImage = placeholderImages.find(p => p.id === 'login-background');
  return (
    <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold font-headline">FurahaTalla</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        {bgImage && (
            <Image
                src={bgImage.imageUrl}
                alt={bgImage.description}
                data-ai-hint={bgImage.imageHint}
                layout="fill"
                objectFit="cover"
                className="opacity-90"
            />
        )}
         <div className="absolute inset-0 bg-primary/30" />
      </div>
    </div>
  );
}
