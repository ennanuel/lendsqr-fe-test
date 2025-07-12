"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "./SignInFormInput";


export default function SignInForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const signUserIn: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        router.push('/dashboard');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <form onSubmit={signUserIn} className="form">
            <div className="form-heading flex flex-col">
                <h2 className="title">Welcome!</h2>
                <p className="description">Enter details to login</p>
            </div>
            <div>
                <div className="form-input-container">
                    <Input 
                        inputType="text" 
                        placeholder="Email" 
                    />
                    <Input 
                        includeButton
                        inputType={showPassword ? 'text' : 'password'}
                        placeholder="Password" 
                        buttonText="SHOW" 
                        buttonAction={togglePasswordVisibility} 
                    />
                    <a href="#" className="forgot-password-link">Forgot password?</a>
                </div>
                <button className="submit-button">
                    <span className="font-avenir">Log in</span>
                </button>
            </div>
        </form>
    )
}