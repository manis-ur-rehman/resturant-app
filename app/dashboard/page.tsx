import { StorageType } from "@/globaltypes";
import Layout from "@components/layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const cookieStore = cookies();
  if (!cookieStore.get(StorageType.TOKEN)) {
    redirect("/login");
  }
  return <Layout>{<div className="mt-20">page screen</div>}</Layout>;
};

export default Dashboard;
