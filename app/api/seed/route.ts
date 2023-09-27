import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { restaurantApplication: "running" },
    { status: 200 }
  );
}
