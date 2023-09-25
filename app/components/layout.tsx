import SideNavBar from "@components/SideNavBar";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 md:flex h-screen relative ml-20">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
