import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import addUser from "../../../../scripts/append";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async (req:NextRequest) => {
    const {id,email,gender,isAdmin,password,category} = await req.json();
    // const data = await req.json();
    // console.log(data)
    const cookie = await cookies();
    const token = jwt.sign({email:email, password:password},process.env.JWT_AUTH_SECRET!)
    console.log(token);
    return NextResponse.json({message:"User added successfully"})
}

/*
**Sample data :**
  {
    "id": 41,
    "email": "newuser@example.com",
    "gender": "Non-binary",
    "isAdmin": false,
    "password": "securePassword123",
    "category": "Student"
  }
 */