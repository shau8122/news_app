
import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(
  request:Request
){
  try {
    
    const response = await axios.get('https://newsapi.org/v2/top-headlines',{
      params:{
        country:'in',
        apiKey:process.env.API_KEY
      }
    })
    return NextResponse.json(response.data)
  } catch (error) {
    return new NextResponse('Failed to fetch news',{status:500})
  }
}
