import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { links } from "@/lib/links";

const HomeSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="font-semibold text-lg">
          <Link href={"/"}>Kids Church Attendance</Link>
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {links.map((link) => (
              <SidebarMenuItem key={link.label}>
                <SidebarMenuButton asChild>
                  <Link href={link.url} className="text-lg">
                    {link.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default HomeSidebar;
