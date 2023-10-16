
import axios from "axios"
import { NextResponse } from "next/server"
import { URL } from "url";

export async function GET(
  request:Request
){
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    if(!query){
      return new NextResponse('Query is required',{status:400})
    }
    const response = await axios.get('https://newsapi.org/v2/everything',{
      params:{
        q:query,
        apiKey:process.env.API_KEY
      }
    })
    return NextResponse.json(response.data)
  } catch (error) {
    return new NextResponse('Failed to fetch news',{status:500})
  }
}
