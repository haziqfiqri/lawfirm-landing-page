import Image from "next/image";
import Link from "next/link";

export interface INewsItem {
  title: string;
  src: string;
  alt: string;
  description: string;
  link: string;
}

export default function NewsItem({ item }: { item: INewsItem }) {
  return (
    <Link
      href={item.link}
      target="_blank"
      className="flex flex-col gap-10 group"
    >
      <div className="flex flex-col gap-4">
        <div className="p-1.5 bg-[#8F6F4C]">
          <Image
            src={item.src}
            width={0}
            height={0}
            sizes="100vw 100vh"
            className="w-full h-full object-contain"
            alt={item.alt}
          />
        </div>
        <h1 className="font-tinos-regular font-normal text-xl text-[#8F6F4C] line-clamp-2">
          {item.title}
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-instrument-sans-regular text-base font-normal text-[#072240] line-clamp-3">
          {item.description}
        </p>
        <button className="py-1.5 w-fit font-tinos-regular text-sm font-light text-[#8F6F4C] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#072240] after:transition-all after:duration-300 group-hover:after:w-full">
          Read More
        </button>
      </div>
    </Link>
  );
}
