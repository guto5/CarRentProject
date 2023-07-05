import Link from "next/link";
import { useState } from "react";

interface ListProps {
  title: string;
  url: string;
  icon?: JSX.Element;
}
interface LinkButtonProps {
  title: string;
  url: string;
  list: ListProps[];
}

export function LinkButton({ title, url, list }: LinkButtonProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="hover:border-b-2 hover:pt-[2px] border-red-500 h-full flex items-center duration-[50ms] relative"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Link className="h-full w-full flex items-center px-4" href={url}>{title}</Link>
      {hover && (
        <div className="absolute top-[calc(100%+2px)] left-0 bg-white shadow-md flex-col">
          {list.map((item, i) => (
            <Link
              className="px-6 py-4 whitespace-nowrap flex items-center gap-4 hover:bg-gray-100"
              key={i}
              href={item.url}
            >
              {item.icon}
              <p className="text-sm">{item.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
