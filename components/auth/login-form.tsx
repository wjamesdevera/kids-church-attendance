"use client";
import { loginSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAuth, validatePassword } from "firebase/auth";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import Link from "next/link";

type FormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (data: FormData) => {
    const status = await validatePassword(auth, data.password);
    console.log(data);
    console.log("status: ", status);
  };
  return (
    <Card className="w-lg max-w-sm">
      <Form {...form}>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
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
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center flex-col mt-8">
              <Button type="submit" className="w-full" variant="default">
                Login
              </Button>
              <p>or</p>
              <Button type="submit" className="w-full" variant="outline">
                Google
              </Button>
              <Link
                href="/register"
                className="text-xs underline-offset-4 hover:underline"
              >
                Create an account
              </Link>
            </div>
          </form>
        </CardContent>
      </Form>
    </Card>
  );
};

export default LoginForm;
