import User from "@/model/User";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// creating a post request for register route 
export async function POST(
  request: Request
) {
  try {
    const body = await request.json();
    // destructuring data from body
    const { name, email } = body;
    console.log(body);
    // check if all exits
    await connectToDB();
    if (!name || !email ) {
      return new NextResponse('Missing Fields', { status: 400 })
    }
    // check if user already exists
    const userExists = await User.findOne({ email: email });
        console.log(userExists);
        // If not, create a new user
        if (!userExists) {
          await User.create({
            email: email,
            name:name
          });
        }else{
          return new NextResponse('User Already Exists', { status: 400 })
        }
    return new NextResponse('User Created', { status: 200 })
  } catch (error: any) {
    console.log(error, 'SUBSCRIPTION_ERROR')
    return new NextResponse('Internal Error',{status:500})

  }
}