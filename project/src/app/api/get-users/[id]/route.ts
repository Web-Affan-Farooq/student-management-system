import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Users from "../../../../../data/data.json";

interface Params {
    params:Promise<{id:string}>
} 
export const GET = async (req:NextRequest, params:Params) => {
    let id = (await params.params).id;
    
    return NextResponse.json({data:Users[Number(id)-1]})
}