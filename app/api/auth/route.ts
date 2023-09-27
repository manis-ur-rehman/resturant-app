import { StorageType } from "@/globaltypes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  const cookieStore = cookies();
  if (cookieStore.get(StorageType.TOKEN)) {
    return NextResponse.json(
      {
        authStatus: true,
        getToken: cookieStore.get(StorageType.TOKEN)?.value,
      },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { authStatus: false, getToken: "" },
    { status: 200 }
  );
}
