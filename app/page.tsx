import SignUp from "@signup/page";
import Login from "@login/page";
import SideNavBar from "@components/SideNavBar";
import Header from "@components/Header";

export default function Home() {
  return (
    <main>
      {/* <Login /> */}
      <SignUp />
      {/* <div className="flex">
        <SideNavBar />
        <div className="flex-1 md:flex h-screen relative">
          <Header />
        </div>
      </div> */}
    </main>
  );
}
