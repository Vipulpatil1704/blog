import PageHeader from "../components/PageHeader/PageHeader";

export default function WindowsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <PageHeader title="Windows"/>
        {children}
    </div>
  );
}
