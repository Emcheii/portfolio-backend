import Navbar from "./Navbar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />

      <main className="w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;