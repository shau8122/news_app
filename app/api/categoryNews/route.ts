
import axios from "axios"
import { NextResponse } from "next/server"
import { URL } from "url";

export async function GET(
  request:Request
){
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const country = url.searchParams.get('country');
    if(!category){
      return new NextResponse('Category is required',{status:400})
    }
    const response = await axios.get('https://newsapi.org/v2/top-headlines',{
      params:{
        country:country || 'in',
        category:category,
        apiKey:process.env.API_KEY 
      }
    })
    return NextResponse.json(response.data)
  } catch (error) {
    return new NextResponse('Failed to fetch news',{status:500})
  }
}
