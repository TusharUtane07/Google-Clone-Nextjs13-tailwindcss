// import dynamic from "next/dynamic";
import WebSearchResult from "@/Components/WebSearchResult";
import Link from "next/link";
import React from "react";

const WebSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1"; 
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{results && <WebSearchResult result={data}/>}</>;
};

export default WebSearchPage;

// export const dynamic = "force-dynamic"