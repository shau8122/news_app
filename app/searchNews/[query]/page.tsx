'use client'
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import TopHeadline from "@/components/TopHeadline";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchNewsPage = ({ params }: { params: { query: string } }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem,setSelectedItem]=useState("");
  const query = params.query;
  const router=useRouter();
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true)
      try {
        const url= `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/queryNews?query=${query}`
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally{
        setIsLoading(false)
      }
    }
    fetchNews();
  }, [query]);
 
  return (
    <>
    <Navbar onSelect={setSelectedItem} selectedItem={selectedItem} />
      <main className="h-[90%] w-full flex">
        <TopHeadline />
        <div className="flex-1 flex-col flex  ml-5">
           <button className=" hover:bg-slate-900 text-white m-0 p-0 w-[100px] font-bold self-center bg-black   rounded-md" onClick={()=>router.replace('/')}>Back </button>
           <h1 className=" top-0 text-2xl font-bold text-blue-800 mb-4">Top Healines on <span className="top-0 text-2xl font-bold text-red-600 mb-4">{`"${decodeURIComponent(query)}"`}</span></h1>
      { isLoading ? <div className="flex flex-1 justify-center items-center">
        <Loading/>
      </div>:

    <div className="overflow-auto hide-scrollbar grid grid-cols-1 justify-center md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-4 flex-1 ">
        {articles.map((item,index)=>{
          return(
            <NewsCard key={index} article={item as any}/>
          )
        })}
    </div>
      }
      
    </div>
      </main>
    </>
  );
}
 
export default SearchNewsPage;