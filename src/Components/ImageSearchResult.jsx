import Link from "next/link";
import React from "react";

const ImageSearchResult = ({ result }) => {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {result.items.map((item) => (
          <div className="mb-8 " key={item.link}>
            <div className="group">
                <Link href={item.image.contextLink}>
                    <img src={item.link} alt={item.title} className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"/>
                </Link>
                <Link href={item.image.contextLink}>
                   <h2 className="group-hover:underline truncate text-xl">{item.title}</h2>
                </Link>
                <Link href={item.image.contextLink}>
                    <p className="group-hover:underline text-gray-600">{item.displayLink}</p>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchResult;
