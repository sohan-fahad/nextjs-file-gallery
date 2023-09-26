import Image from "next/image";
import Link from "next/link";
import React from "react";

const PdfFileCard = (props: { file: string }) => {
  return (
    <div className="p-5 bg-gray-100 rounded-md">
      <Link
        href="/edit"
        className="flex flex-col justify-center items-center gap-2"
      >
        <p className="text-xs text-black font-bold">
          {props?.file.slice(0, 15)}
        </p>
        <Image
          src="/images/pdf.png"
          width={100}
          height={100}
          alt="file"
          className="w-full"
        />
      </Link>
    </div>
  );
};

export default PdfFileCard;
