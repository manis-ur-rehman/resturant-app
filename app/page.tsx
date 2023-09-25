import SignUp from "@signup/page";
import Login from "@login/page";
import SideNavBar from "@/app/components/sidenavbar";
import Header from "@/app/components/header";
import Layout from "@components/layout";

export default function Home() {
  return (
    <main>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Layout>
        <div className="mt-20">page screen</div>
      </Layout>
    </main>
  );
}
