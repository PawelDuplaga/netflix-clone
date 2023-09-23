import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/serverAuth/authOptions';
import ButtonLogout from '@/components/ButtonLogout/ButtonLogout';
import LoggedAs from '@/components/LoggedAs/LoggedAs';

export default async function HomeView() {

  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    redirect('/auth')
  }

  return (
      <div className="flex flex-col gap-2">
        <LoggedAs />
        <ButtonLogout />
      </div>
  )
}
