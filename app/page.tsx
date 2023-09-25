import SignUp from "@signup/page";
import Login from "@login/page";
import SideNavBar from "@/app/components/sidenavbar";
import Header from "@/app/components/header";
import Layout from "@components/layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { StorageType } from "@/globaltypes";
import Dashboard from "@dashboard/page";

export default async function Home() {
  const cookieStore = cookies();
  if (cookieStore.get(StorageType.TOKEN)) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
  return <main></main>;
}
