import NavBar from '../navBar';

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
