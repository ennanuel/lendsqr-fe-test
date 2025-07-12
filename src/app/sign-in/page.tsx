
import { Metadata } from "next";

import Image from "next/image";
import SignInForm from "@/components/SignInForm";

import "@/styling/sign-in.scss";

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Sign in to your Lendsqr account.',
};

export default function SignIn() {

    return (
        <div className="sign-in-body font-avenir">
            <div className="container">
                <div className="logo-and-image-container">
                    <Image src="/logo.svg" alt="Lendsqr logo" width={200} height={136} className="company-logo" />
                    <Image src="/sign-in.svg" alt="Log in image" width={1024} height={1024} className="sign-in-image" />
                </div>
            </div>
            <div className="container form-container">
                <SignInForm />
            </div>
        </div>
    )
}