import { HeadersKeys, StorageType } from "@/globaltypes";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const token = req.headers.get(HeadersKeys.TOKEN);
  let decoded = await jwt.verify(token, StorageType.SECRET);
  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (user) {
    const { password, ...restOfUser } = user;
    return NextResponse.json(restOfUser, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "user does not exist" },
      { status: 400 }
    );
  }
}

export async function PUT(req: Request) {
  const body = await req.json();

  const { firstName, lastName, id }: any = body;
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
      },
    });
    const { password, ...restOfUser } = user;

    return NextResponse.json(restOfUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "something wrong" }, { status: 400 });
  }
}
