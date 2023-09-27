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
    return NextResponse.json({ user }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "user does not exist" },
      { status: 400 }
    );
  }
}
