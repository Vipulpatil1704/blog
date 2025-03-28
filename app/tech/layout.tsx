import PageHeader from "../components/PageHeader/PageHeader";

export default function TechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <PageHeader title="Tech"/>
        {children}
    </div>
  );
}
