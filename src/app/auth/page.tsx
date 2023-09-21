import AuthPage from "@/components/AuthPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Netflix Sign In",
    description: "Sign in to Netflix. Create acount at netflix ",
  };
}




export default AuthPage;