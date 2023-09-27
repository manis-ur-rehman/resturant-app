import { StorageType } from "@/globaltypes";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const bcript = require("bcrypt");

export async function POST(req: Request) {
  const body = await req.json();
  const cookieStore = cookies();
  const { email } = body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    console.log("exist: ", user);
  } else {
    console.log("not found");
  }
  cookieStore.set(StorageType.TOKEN, "1234");
  return NextResponse.json(body, { status: 200 });
}
