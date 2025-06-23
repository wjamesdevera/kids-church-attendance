import AuthProvider from "@/components/auth/auth-provider";
import ProtectedRoute from "@/components/auth/protected-route";
import SignOutButton from "@/components/auth/sign-out-button";
import SidebarLayout from "@/components/layouts/sidebar-layout";
import Loader from "@/components/loader";
import Test from "@/components/test";

export default function Home() {
  return (
    <SidebarLayout>
      <AuthProvider>
        <ProtectedRoute>
          <SignOutButton />
        </ProtectedRoute>
      </AuthProvider>
    </SidebarLayout>
  );
}
