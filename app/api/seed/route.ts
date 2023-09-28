import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       firstName: "anees",
  //       lastName: "ur rehman",
  //       email: "abc@gmail.com",
  //       password: "12345",
  //     },
  //   ],
  // });

  // await prisma.products.createMany({
  //   data: [
  //     {
  //       title: "title of product",
  //       image: "https://picsum.photos/640/640?r=2123",
  //       description: "description of product",
  //     },
  //     {
  //       title: "title of product",
  //       image: "https://picsum.photos/640/640?r=2123",
  //       description: "description of product",
  //     },
  //     {
  //       title: "title of product",
  //       image: "https://picsum.photos/640/640?r=2123",
  //       description: "description of product",
  //     },
  //     {
  //       title: "title of product",
  //       image: "https://picsum.photos/640/640?r=2123",
  //       description: "description of product",
  //     },
  //     {
  //       title: "title of product",
  //       image: "https://picsum.photos/640/640?r=2123",
  //       description: "description of product",
  //     },
  //   ],
  // });

  // await prisma.items.createMany({
  //   data: [
  //     {
  //       title: "title of item",
  //       product_id: 1,
  //       description: "description of product",
  //       images: [
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //       ],
  //     },
  //     {
  //       title: "title of item",
  //       product_id: 2,
  //       description: "description of product",
  //       images: [
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //       ],
  //     },
  //     {
  //       title: "title of item",
  //       product_id: 3,
  //       description: "description of product",
  //       images: [
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //       ],
  //     },
  //     {
  //       title: "title of item",
  //       product_id: 4,
  //       description: "description of product",
  //       images: [
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //       ],
  //     },
  //     {
  //       title: "title of item",
  //       product_id: 5,
  //       description: "description of product",
  //       images: [
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //         "https://picsum.photos/640/640?r=2123",
  //       ],
  //     },
  //   ],
  // });

  return NextResponse.json({ name: "seeding" }, { status: 200 });
}
