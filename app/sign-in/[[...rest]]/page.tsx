"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <SignIn
                appearance={{
                    elements: {
                        formButtonPrimary: "bg-black text-white flex justify-center hover:bg-gray-800",
                    },
                }}
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
            />
        </div>)

}
