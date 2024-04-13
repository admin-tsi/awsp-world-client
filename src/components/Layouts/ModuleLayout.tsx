import NavBar from '../NavBar/NavBar';

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main lang="en">
      <NavBar />
      <div className="">{children}</div>
    </main>
  );
}
