"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { AuthError, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { validatePassword } from "@/util/auth";

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Password is too short").max(4096),
    confirmPassword: z.string().min(8).max(4096),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { errors } = await validatePassword(values.password);
    if (errors.length > 0) {
      form.setError("password", {
        message:
          "Please choose a stronger password. Try a mix of letters, numbers, and symbols.",
      });
    } else {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          router.push("/");
        })
        .catch((error: AuthError) => {
          if (error.code === "auth/email-already-in-use") {
            form.setError("email", {
              message: "Email already in use",
            });
          }
        });
    }
  };

  return (
    <Card className="w-lg max-w-sm">
      <Form {...form}>
        <CardHeader>
          <CardTitle>Create Your Account</CardTitle>
          <CardDescription>
            Set up your new administrator account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      type="email"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Create Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Create a strong password"
                      type="password"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Re-enter your password"
                      type="password"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center flex-col mt-8">
              <Button type="submit" className="w-full " variant="default">
                Register
              </Button>
              <p>or</p>
              <Button className="w-full" variant="outline">
                Google
              </Button>
              <Link
                href="/"
                className="text-xs underline-offset-4 hover:underline"
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </CardContent>
      </Form>
    </Card>
  );
};

export default RegisterForm;
