'use client'
import {  useEffect, useState } from "react";
import TopHeadlineCard from "./TopHeadlineCard";
import Loading from "./Loading";


const TopHeadline = () => {
  const [articles, setArticles] = useState([ ]); 
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true)
      try {
        const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/topHeadlines`;
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setIsLoading(false)
      }
    }
    fetchNews();
  }, []);
  
  return (
    <div className="h-[100%] w-[300px] overflow-auto hide-scrollbar mt-5 shadow-xl p-2 hidden lg:block">
      <h1 className="text-xl fixed ml-20 font-bold text-center bg-gray-100 rounded-md p-2">Top Headline</h1>
      {
        isLoading ? <div className="flex flex-1 mt-20 justify-center items-center">
          <Loading/>
        </div>:
        <div className="mt-10 text-justify p-2 border-slate-700">
        {
          articles.map((item, index)=>{
            return(
              <TopHeadlineCard key={index} article={item as any}/>
            )
          })
        }
      </div>
      }
      
    </div>
  );
};

export default TopHeadline;
