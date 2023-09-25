import { NextResponse } from "next/server";
import { timeMoke } from "@/utils";

export async function GET() {
  await timeMoke(3000);
  return NextResponse.json("api main route", { status: 200 });
}

// export async function GET() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
//       // headers: {
//       //   "Content-Type": "application/json",
//       //   "API-Key": "1234",
//       // },
//     });
//     const data = await res.json();
//     console.log("data: ", data);
//     return NextResponse.json({ data }, { status: 200 });
//   } catch (error) {
//     console.log("error: ", error);
//     return NextResponse.error();
//   }
// }

// export async function POST() {
//   const res = await fetch("https://data.mongodb-api.com/...", {
//     method: "POST",
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //     'API-Key': process.env.DATA_API_KEY,
//     //   },
//     body: JSON.stringify({ time: new Date().toISOString() }),
//   });

//   const data = await res.json();

//   return NextResponse.json(data);
// }

// export async function POSTForm(request: Request) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   return NextResponse.json({ name, email });
// }
