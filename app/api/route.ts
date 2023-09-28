import { NextResponse } from "next/server";
import { timeMoke } from "@/utils";

export async function GET() {
  await timeMoke(3000);
  return NextResponse.json("api main route", { status: 200 });
}
