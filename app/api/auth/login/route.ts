import { StorageType } from "@/globaltypes";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const bcript = require("bcrypt");

export async function POST(req: Request) {
  const body = await req.json();
  const cookieStore = cookies();
  const { email, password } = body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    if (bcript.compareSync(password, user.password)) {
      const payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      let token = jwt.sign(payload, "secret", {
        expiresIn: 1440,
      });
      cookieStore.set(StorageType.TOKEN, token);
      return NextResponse.json(body, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "you have enter wrong password" },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json({ message: "user not found" }, { status: 400 });
  }
}
