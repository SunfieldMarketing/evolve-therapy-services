import { ReactNode } from 'react';

/**
 * AdminLayout
 * 
 * Note: The authentication gate is now handled server-side 
 * in the [[...tina]]/page.tsx file for better security and performance.
 */
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
