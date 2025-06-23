import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider } from "@/lib/auth-provider";
import { auth } from "@/lib/firebase";

const GoogleLoginButton = () => {
  const router = useRouter();
  const onGoogleLogin = async () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {});
  };
  return (
    <Button
      type="button"
      className="w-full"
      variant="outline"
      onClick={onGoogleLogin}
    >
      Google
    </Button>
  );
};

export default GoogleLoginButton;
