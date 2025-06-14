import HomeSidebar from "../home-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const SidebarLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <HomeSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default SidebarLayout;
