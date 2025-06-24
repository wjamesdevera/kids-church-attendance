import Header from "../header";
import HomeSidebar from "../home-sidebar";
import { SidebarProvider } from "../ui/sidebar";

const SidebarLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <HomeSidebar />
      <main className="w-full p-4">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default SidebarLayout;
