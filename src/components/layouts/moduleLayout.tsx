export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main lang="en">
      <div>
        <span>oloni</span>
        {children}
      </div>
    </main>
  );
}
