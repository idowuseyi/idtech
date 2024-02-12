"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

console.log("Hi");

type Props = {
    text: string
}

const SignInButton = ({ text }: Props) => {
    return (
        <Button onClick={() => {
            console.log("Clicked");
            signIn("google").catch(console.error);
        }}>
            { text }
        </Button>
    );
}

export default SignInButton;
