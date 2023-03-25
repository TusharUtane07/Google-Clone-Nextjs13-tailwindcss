import Link from "next/link";
import React from "react";
import Parser from 'html-react-parser'
import PaginationButton from "./PaginationButton";

const WebSearchResult = ({ result }) => {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52 ">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {result.searchInformation?.formattedTotalResults} results (
        {result.searchInformation?.formattedSearchTime} seconds)
      </p>
      {
        result.items?.map((item)=>(
            <div className="mb-8 max-w-xl" key={item.link}>
                <div className="group flex flex-col ">
                    <Link className="text-sm truncate" href={item.link}>{item.formattedUrl}</Link>
                    <Link className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800" href={item.title}>{item.formattedUrl}</Link>
                </div>
                <p className="text-gray-600">{Parser(item.htmlSnippet)}</p>
            </div>
        ))
      }
      
        <PaginationButton/>
      
    </div>
  );
};

export default WebSearchResult;
