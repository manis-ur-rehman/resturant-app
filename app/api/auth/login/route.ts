import { StorageType } from "@/globaltypes";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const bcript = require("bcrypt");

export async function POST(req: Request) {
  const cookieStore = cookies();
  try {
    const body = await req.json();
    const { email, password } = body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      if (bcript.compareSync(password, user.password)) {
        const { password, ...restOfUser } = user;
        let token = jwt.sign(restOfUser, StorageType.SECRET, {
          expiresIn: 8440,
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
  } catch (error) {
    return NextResponse.json({ message: "not working" }, { status: 400 });
  }
}
