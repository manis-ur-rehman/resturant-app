import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  await prisma.user.createMany({
    data: [
      {
        firstName: "anees",
        lastName: "ur rehman",
        email: "abc@gmail.com",
        password: "12345",
      },
    ],
  });

  return NextResponse.json({ name: "hello" }, { status: 200 });
}
