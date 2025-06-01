import CenterLayout from "@/components/layouts/center-layout";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <CenterLayout>{children}</CenterLayout>;
};

export default layout;
