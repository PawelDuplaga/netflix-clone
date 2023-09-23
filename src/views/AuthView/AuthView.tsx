import { authOptions } from '@/lib/serverAuth/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation'
import AuthPage from "@/components/AuthPage";

const AuthView = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        redirect('/')
    }

    return (
        <AuthPage />
    )

}

export default AuthView;