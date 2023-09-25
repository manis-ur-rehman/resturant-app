import { StorageType } from "@/globaltypes";
import { timeMoke } from "@/utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.set(StorageType.TOKEN, "1234");
  await timeMoke(3000);
  return NextResponse.json("api login route", { status: 200 });
}
