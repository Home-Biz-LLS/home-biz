import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/prisma";


export const GET = async (req: NextRequest) =>{
  console.log("in Get req")
  const owners = await prisma.owner.findMany()
  console.log(owners);

  return NextResponse.json(owners);
};

// export const POST = async (req: NextRequest) => {
//   console.log("in the post req")
//   const newOwner = await axios.post('http://localhost:3000/newOwner', {
//     data: {
//       name: "Alice",
//       email: "alice@prisma.io",
//       }
//   })

//   const data = await req.json();

//   return NextResponse.json(data)

//   console.log(newOwner)
// }
