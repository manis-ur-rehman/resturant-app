import type { NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export async function GET(res: NextApiResponse<Data>) {
  console.log("prisma: ", prisma);
  //   await prisma.abcd.deleteMany();

  await prisma.abcd.createMany({
    data: [{ name: "anees" }, { name: "basit" }, { name: "shahzad" }],
  });

  res.status(200).json({ name: "hello" });
}
