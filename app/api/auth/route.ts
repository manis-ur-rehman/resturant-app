import { timeMoke } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  await timeMoke(3000);
  return NextResponse.json("api auth route", { status: 200 });
}
