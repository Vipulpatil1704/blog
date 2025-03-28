import PageHeader from "../components/PageHeader/PageHeader";

export default function AndroidLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <PageHeader title="android"/>
        {children}
    </div>
  );
}
