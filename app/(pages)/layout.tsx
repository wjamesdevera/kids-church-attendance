import AuthProvider from "@/components/auth/auth-provider";
import ProtectedRoute from "@/components/auth/protected-route";
import SidebarLayout from "@/components/layouts/sidebar-layout";
import React, { ReactNode } from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarLayout>
      <AuthProvider>
        <ProtectedRoute>{children}</ProtectedRoute>
      </AuthProvider>
    </SidebarLayout>
  );
};

export default layout;
