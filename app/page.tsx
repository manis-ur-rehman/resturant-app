import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { StorageType } from "@/globaltypes";

export default async function Home() {
  const cookieStore = cookies();
  if (cookieStore.get(StorageType.TOKEN)) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
  return <main></main>;
}
