import SignUp from "@signup/page";
import Login from "@login/page";
import SideNavBar from "@components/SideNavBar";
import Header from "@components/Header";
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
