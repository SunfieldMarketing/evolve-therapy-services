'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem('evolve_admin_auth');
    if (auth !== 'true') {
      router.push('/portal');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
}
