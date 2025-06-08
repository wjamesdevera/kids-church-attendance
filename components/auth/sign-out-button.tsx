"use client";
import { Button } from "../ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";

const SignOutButton = () => {
  const onSignOut = () => {
    signOut(auth).then(() => {
      redirect("/register");
    });
  };
  return (
    <Button variant={"default"} onClick={onSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
