import ProfilesPage from '@/components/ProfilesPage';
import { authOptions } from '@/lib/serverAuth/authOptions';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';


const ProfilesView = async () => {

    const session = await getServerSession(authOptions);
    if (!session || !session?.user) {
        redirect('/auth')
    }

    return (
        <ProfilesPage />
    )
}

export default ProfilesView