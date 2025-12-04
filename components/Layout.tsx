import { Header } from "./Header";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import FloatingHelp from "./FloatingHelp";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingHelp />
    </div>
  );
}
