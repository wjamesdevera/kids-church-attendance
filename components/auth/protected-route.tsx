"use client";
import React, { useEffect } from "react";
import { useAuth } from "./auth-provider";
import { redirect } from "next/navigation";

const ProtectedRoute = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && !user) {
      redirect("/login");
    }
  }, [user, loading]);

  if (user) {
    console.log("protected", user);
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
