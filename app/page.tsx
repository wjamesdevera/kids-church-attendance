import LoginForm from "@/components/auth/login-form";
import SidebarLayout from "@/components/layouts/sidebar-layout";

export default function Home() {
  return (
    <SidebarLayout>
      <LoginForm />
    </SidebarLayout>
  );
}
