import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, firstName, lastName, password: userPassword }: any = body;

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: userPassword,
    };
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      const hash = await bcrypt.hash(userPassword, 10);
      userData.password = hash;
      const user = await prisma.user.create({
        data: userData,
      });
      const { password, ...restOfUser } = user;
      return NextResponse.json(restOfUser, { status: 201 });
    } else {
      return NextResponse.json(
        { message: "userAlready exist" },
        { status: 422 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 }
    );
  }
}
