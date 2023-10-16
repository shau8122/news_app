"use client";
import { SetStateAction, useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Loading from "./Loading";
import Select from "./Select";


type Article =
  | {
      author: null;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  | {
      author: string;
      title: string;
      description: null;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    };

interface PageLayoutProps {
  category: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ category }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [articlesCat, setArticlesCat] = useState([]);
  const [country, setCountry] = useState("in");
  const [state, setState] = useState("general");

  const options1 = [
    { label: "United Arab Emirates", value: "ae" },
    { label: "Argentina", value: "ar" },
    { label: "Austria", value: "at" },
    { label: "Australia", value: "au" },
    { label: "Belgium", value: "be" },
    { label: "Bulgaria", value: "bg" },
    { label: "Brazil", value: "br" },
    { label: "Canada", value: "ca" },
    { label: "Switzerland", value: "ch" },
    { label: "China", value: "cn" },
    { label: "Colombia", value: "co" },
    { label: "Cuba", value: "cu" },
    { label: "Czech Republic", value: "cz" },
    { label: "Germany", value: "de" },
    { label: "Egypt", value: "eg" },
    { label: "France", value: "fr" },
    { label: "United Kingdom", value: "gb" },
    { label: "Greece", value: "gr" },
    { label: "Hong Kong", value: "hk" },
    { label: "Hungary", value: "hu" },
    { label: "Indonesia", value: "id" },
    { label: "Ireland", value: "ie" },
    { label: "Israel", value: "il" },
    { label: "India", value: "in" },
    { label: "Italy", value: "it" },
    { label: "Japan", value: "jp" },
    { label: "South Korea", value: "kr" },
    { label: "Lithuania", value: "lt" },
    { label: "Latvia", value: "lv" },
    { label: "Morocco", value: "ma" },
    { label: "Mexico", value: "mx" },
    { label: "Malaysia", value: "my" },
    { label: "Nigeria", value: "ng" },
    { label: "Netherlands", value: "nl" },
    { label: "Norway", value: "no" },
    { label: "New Zealand", value: "nz" },
    { label: "Philippines", value: "ph" },
    { label: "Poland", value: "pl" },
    { label: "Portugal", value: "pt" },
    { label: "Romania", value: "ro" },
    { label: "Serbia", value: "rs" },
    { label: "Russia", value: "ru" },
    { label: "Saudi Arabia", value: "sa" },
    { label: "Sweden", value: "se" },
    { label: "Singapore", value: "sg" },
    { label: "Slovenia", value: "si" },
    { label: "Slovakia", value: "sk" },
    { label: "Thailand", value: "th" },
    { label: "Turkey", value: "tr" },
    { label: "Taiwan", value: "tw" },
    { label: "Ukraine", value: "ua" },
    { label: "United States", value: "us" },
    { label: "Venezuela", value: "ve" },
    { label: "South Africa", value: "za" },
  ];
  const options2 = [
    { label: "General", value: "general" },
    { label: "Andhra Pradesh", value: "andhra_pradesh" },
    { label: "Arunachal Pradesh", value: "arunachal_pradesh" },
    { label: "Assam", value: "assam" },
    { label: "Bihar", value: "bihar" },
    { label: "Chhattisgarh", value: "chhattisgarh" },
    { label: "Goa", value: "goa" },
    { label: "Gujarat", value: "gujarat" },
    { label: "Haryana", value: "haryana" },
    { label: "Himachal Pradesh", value: "himachal_pradesh" },
    { label: "Jharkhand", value: "jharkhand" },
    { label: "Karnataka", value: "karnataka" },
    { label: "Kerala", value: "kerala" },
    { label: "Madhya Pradesh", value: "madhya_pradesh" },
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Manipur", value: "manipur" },
    { label: "Meghalaya", value: "meghalaya" },
    { label: "Mizoram", value: "mizoram" },
    { label: "Nagaland", value: "nagaland" },
    { label: "Odisha", value: "odisha" },
    { label: "Punjab", value: "punjab" },
    { label: "Rajasthan", value: "rajasthan" },
    { label: "Sikkim", value: "sikkim" },
    { label: "Tamil Nadu", value: "tamil_nadu" },
    { label: "Telangana", value: "telangana" },
    { label: "Tripura", value: "tripura" },
    { label: "Uttar Pradesh", value: "uttar_pradesh" },
    { label: "Uttarakhand", value: "uttarakhand" },
    { label: "West Bengal", value: "west_bengal" },
  ];

  const handleSelectChange1 = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    if(e.target.value!=='in'){
      setState('general')
      setCountry(e.target.value);
    }else{
      setCountry(e.target.value);
    }
  };
  const handleSelectChange2 = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setState(e.target.value);
  };
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      try {
        const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/categoryNews?category=${category}&country=${country}`;
        const res = await fetch(url);
        const data = await res.json();
        setArticlesCat(data.articles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
      }
    }
    async function fetchNewsState() {
      setIsLoading(true)
      try {
        const query = `${state} ${category}`;
        const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/queryNews?query=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        setArticlesCat(data.articles);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally{
        setIsLoading(false)
      }
    }
      if(state==='general'){
        fetchNews();
      }else{
        fetchNewsState();
      }
  }, [category,country,state]);

  return (
    <div className="flex-1 flex-col flex mt-10 ml-5">
      <div className="flex justify-start mb-2 gap-2">
        <Select
          options={options1}
          value={country}
          onChange={handleSelectChange1}
        />
        {
          country === "in" && 
          <Select
          options={options2}
          value={state}
          onChange={handleSelectChange2}
        />
        }
        
      </div>
        {isLoading ? (
          <div className="flex flex-1 justify-center items-center">
            <Loading />
          </div>
        ) : 
            <div className="overflow-auto hide-scrollbar grid grid-cols-1 justify-center md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-4 flex-1 ">
          {articlesCat.map((item, index) => {
            return <NewsCard key={index} article={item as any} />;
          })}

      </div>
        }
    </div>
  );
};

export default PageLayout;
