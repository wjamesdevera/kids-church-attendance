import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  validatePassword,
} from "firebase/auth";
import { registrationErrorMessages } from "@/app/constants/error-messages";
import { useState } from "react";

interface UseSignUpType {
  email: string;
  password: string;
}
export const useSignUp = async ({ email, password }: UseSignUpType) => {
  const [error, setError] = useState();
  createUserWithEmailAndPassword(auth, email, password);
  return { error };
};

