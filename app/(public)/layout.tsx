import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}