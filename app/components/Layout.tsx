import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* <SideNavBar /> */}
      <div className="flex-1 h-screen relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
