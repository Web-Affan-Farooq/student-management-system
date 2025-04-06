import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Users from "../../../../data/data.json";

export const GET = async (req:NextRequest) => {
    return NextResponse.json({data:Users})
}