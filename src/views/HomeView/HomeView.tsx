import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/serverAuth/authOptions';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieListWrapper from '@/components/MovieListWrapper';

export default async function HomeView() {

  const session = await getServerSession(authOptions);
  if (!session || !session?.user) {
    redirect('/auth')
  }


  return (
      <div className="flex flex-col gap-2">
        <Navbar />
        {/* <LoggedAs />
        <ButtonLogout /> */}
        <Billboard />
        <MovieListWrapper title="Trending Now" />
        <MovieListWrapper title="My List" />
      </div>
  )
}
