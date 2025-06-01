const CenterLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex justify-center items-center min-h-dvh">
      {children}
    </main>
  );
};

export default CenterLayout;
