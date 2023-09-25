import { timeMoke } from "@/utils";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { StorageType } from "@/globaltypes";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete(StorageType.TOKEN);
  await timeMoke(3000);
  return NextResponse.json("api logout route", { status: 200 });
}
