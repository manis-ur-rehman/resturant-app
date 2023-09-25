import { timeMoke } from "@/utils";
import { NextResponse } from "next/server";

export async function GET() {
  await timeMoke(3000);
  return NextResponse.json("api signup route", { status: 200 });
}
