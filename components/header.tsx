"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { toTitleCase } from "@/util/string-case";

const Header = () => {
  const pathname = usePathname();
  const directories = pathname.slice(1).split("/");

  const linkItems = directories.map((directory, i) => {
    const prevDirectories = directories.slice(0, i + 1);
    const linkString = prevDirectories.reduce((acc, x) => acc + `/${x}`, "");
    return {
      label: toTitleCase(directory),
      link: linkString,
    };
  });
  return (
    <div className="flex items-center gap-3">
      <SidebarTrigger />
      <Breadcrumb>
        <BreadcrumbList>
          {linkItems.map((link, i) => (
            <>
              {i === linkItems.length - 1 ? (
                <BreadcrumbItem key={link.label}>
                  <BreadcrumbPage>{link.label}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem key={link.label}>
                    <BreadcrumbLink href={`/${link.link}`}>
                      {link.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Header;
