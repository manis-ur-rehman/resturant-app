import { StorageType } from "@/globaltypes";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const cookieStore = cookies();
  cookieStore.set(StorageType.TOKEN, "1234");
  return NextResponse.json(body, { status: 200 });
}
