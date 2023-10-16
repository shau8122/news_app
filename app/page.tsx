'use client'
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import TopHeadline from "@/components/TopHeadline";
import PageLayout from "@/components/pageLayout";
import { useState, useEffect } from "react";

const Home = () => {
  
  const [selectedItem,setSelectedItem]= useState('general');
  const [isFormOpen,setIsFormOpen]=useState(false);
  useEffect(() => {
    if(isFormOpen){
      setSelectedItem("none");
    }
  
  }, [isFormOpen])
  
  return (
    <>
      <Navbar onSelect={setSelectedItem} selectedItem={selectedItem} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <main className="h-[90%] w-full flex">
        <TopHeadline />
        {isFormOpen && <Form  />}
        {selectedItem === "technology" && <PageLayout category="technology" />}
        {selectedItem === "science" && <PageLayout category="science" />}
        {selectedItem === "health" && <PageLayout category="health" />}
        {selectedItem === "sports" && <PageLayout category="sports" />}
        {selectedItem === "entertainment" && <PageLayout category="entertainment" />}
        {selectedItem === "business" && <PageLayout category="business" />}
        {selectedItem==='general' &&  <PageLayout category="general" />        }
      </main>
    </>
  );
};
export default Home;
