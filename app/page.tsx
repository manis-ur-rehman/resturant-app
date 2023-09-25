import SignUp from "@signup/page";
import Login from "@login/page";
import SideNavBar from "@/app/components/sidenavbar";
import Header from "@/app/components/header";
import Layout from "@components/layout";
import { cookies } from "next/headers";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { StorageType } from "@/globaltypes";

export default async function Home() {
  const cookieStore = cookies();
  // cookieStore.set(StorageType.TOKEN, "1234");
  console.log("get cookies: ", cookieStore.get(StorageType.TOKEN));
  if (cookieStore.get(StorageType.TOKEN)) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }

  return (
    <main>
      {/* <SignUp /> */}
      {/* <Login /> */}
    </main>
  );
}
