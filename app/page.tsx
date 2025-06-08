import AuthProvider from "@/components/auth/auth-provider";
import LoginForm from "@/components/auth/login-form";
import ProtectedRoute from "@/components/auth/protected-route";
import SignOutButton from "@/components/auth/sign-out-button";
import SidebarLayout from "@/components/layouts/sidebar-layout";

export default function Home() {
  return (
    <SidebarLayout>
      <AuthProvider>
        <ProtectedRoute>
          <LoginForm />
          <SignOutButton/>
        </ProtectedRoute>
      </AuthProvider>
    </SidebarLayout>
  );
}
