import Sidebar from "../_components/side-bar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="ml-64 p-12 max-w-4xl">{children}</main>
    </div>
  );
}
