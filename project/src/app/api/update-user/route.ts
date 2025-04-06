import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const PATCH = async (req:NextRequest) => {
    // const {id,email,gender,isAdmin,password,category} = await req.json();
    const data = await req.json();
    console.log(data)
    return NextResponse.json({message:"User updated successfully"})
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