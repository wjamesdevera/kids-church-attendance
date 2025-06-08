import { registrationErrorMessages } from "@/app/constants/error-messages";
import { auth } from "@/lib/firebase";
import { validatePassword } from "firebase/auth";

export const useValidatePassword = async (password: string) => {
  const status = await validatePassword(auth, password);
  const errors = [];
  const { password: passwordErrorMessage } = registrationErrorMessages;
  if (!status.isValid) {
    if (!status.containsLowercaseLetter) {
      errors.push({
        message: passwordErrorMessage.lowerCase,
      });
    }
    if (!status.containsUppercaseLetter) {
      errors.push({
        message: passwordErrorMessage.upperCase,
      });
    }
    if (!status.containsNumericCharacter) {
      errors.push({
        message: passwordErrorMessage.numeric,
      });
    }
    if (!status.containsNumericCharacter) {
      errors.push({
        message: passwordErrorMessage.nonNumeric,
      });
    }
  }
  return { errors };
};