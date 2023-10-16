"use client";
import { usePathname, useRouter } from "next/navigation";
import { SetStateAction,  useState } from "react";
import Select from "./Select";
import logoImage from '@/public/newLogo.png'
import Image from 'next/image'

interface NavbarProps {
  onSelect: (item: string) => void;
  selectedItem: string;
  isFormOpen?: boolean;
  setIsFormOpen?: (value: SetStateAction<boolean>) => void;
}

const navDetails = [
  {
    name: "Latest",
    href: "general",
  },
  {
    name: "Technology",
    href: "technology",
  },
  {
    name: "Science",
    href: "science",
  },
  {
    name: "Health",
    href: "health",
  },
  {
    name: "Sports",
    href: "sports",
  },
  {
    name: "Entertainment",
    href: "entertainment",
  },
  {
    name: "Business",
    href: "business",
  },
];
const Navbar: React.FC<NavbarProps> = ({ onSelect, selectedItem, isFormOpen,setIsFormOpen }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleClick = () => {
    if (query.length === 0) return alert("Please Enter a Keyword");
    router.push(`/searchNews/${query}`);
  };
  const handleItemClick = (href: string) => {
    if (pathname === "/") {
      onSelect(href);
      if(setIsFormOpen)
      setIsFormOpen(false);
    } else {
      router.replace("/");
    }
  };
  const handleSunscriptionClick = () => {
    if(setIsFormOpen){
      setIsFormOpen(true);
    }
  }
  return (
    <nav className="flex w-full flex-col md:flex-row justify-between items-center">
      <div className=" ">
        <h1 className="px-5 font-bold text-4xl md:text-2xl lg:text-4xl font-helvetica text-blue-700">
          newsapp
        </h1>
      </div>
      <ul
        className={`${
          pathname === "/" ? "justify-between" : "justify-end"
        } flex  items-center xl:w-[80%] flex-col md:flex-row gap-1`}
      >
        {pathname === "/" &&
          navDetails.map((item) => {
            return (
              <li key={item.name}>
                <button
                  onClick={() => handleItemClick(item.href)}
                  className={`${
                    selectedItem === item.href &&
                    "font-bold underline text-orange-500"
                  } hidden xl:block sm:text-lg 2xl:text-xl transition-colors ease-in-out   hover:text-orange-500`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        {pathname === "/" && (
          <div className="flex justify-end items-center xl:hidden w-full">
            
            <Select
              options={navDetails.map((item) => {
                return {
                  label: item.name,
                  value: item.href,
                };
              })}
              value={selectedItem}
              onChange={(e) => handleItemClick(e.target.value)}
            />
          </div>
        )}
        <div className="flex justify-between items-center p-2 gap-1 md:gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ml-2 px-2 py-2 rounded-xl "
            type="text"
            placeholder="Enter Your Keyword "
          />
          <button
            onClick={handleClick}
            className="bg-slate-900 hover:bg-slate-700 text-white px-2 py-1 rounded-md"
          >
            Search
          </button>
          <button onClick={handleSunscriptionClick} className=" text-white  bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md">
            Subscribe
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
