import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { TinaAdmin } from './TinaAdminClient';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get('portal_auth');
  
  if (!auth || auth.value !== 'true') {
    redirect('/portal');
  }

  return <TinaAdmin />;
}
