import { NextResponse } from 'next/server';

// API Routes
export async function GET(request, context){
    const {params} = context;
    const {slug} = params;
    
    return NextResponse.json({ slug: slug });
}