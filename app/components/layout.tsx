import SideNavBar from "@/app/components/sidenavbar";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

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
