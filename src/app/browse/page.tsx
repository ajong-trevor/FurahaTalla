"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OldBrowsePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard/browse');
  }, [router]);

  return null;
}