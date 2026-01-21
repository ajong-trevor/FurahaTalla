"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { useUser, useFirestore } from "@/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();

  useEffect(() => {
    if (isUserLoading) {
      return; // Wait until user status is resolved
    }

    if (!user) {
      router.push("/login");
      return;
    }

    const fetchUserRoleAndRedirect = async () => {
      const userDocRef = doc(firestore, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const userType = userData.userType;
        if (userType) {
          router.push(`/dashboard/${userType}`);
        } else {
          // Handle case where userType is not set
          console.error("User role not found.");
          router.push("/login"); // Or a page to select role
        }
      } else {
        console.error("User document not found.");
        // This might happen if Firestore doc creation failed after auth creation
        router.push("/login"); 
      }
    };

    fetchUserRoleAndRedirect();
  }, [user, isUserLoading, firestore, router]);

  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle>Welcome to FurahaTalla</CardTitle>
          <CardDescription>Please wait while we redirect you to your dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    </div>
  );
}
