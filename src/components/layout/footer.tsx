import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-primary" />
            <p className="text-sm font-semibold font-headline">FurahaTalla</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FurahaTalla. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
