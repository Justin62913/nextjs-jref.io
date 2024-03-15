import { NextResponse } from 'next/server';

// API Routes
export async function GET(){
    // Form Data
    // Api JSON POST DATA
    return NextResponse.json({ items: [{id:1, title:'Hello from the API route! '}]});
}

// API Routes
//  export async function POST(){
//     // Form Data
//     // Api JSON POST DATA
//     return NextResponse.json({ message: 'Hello from the POST API route!' });
// } 