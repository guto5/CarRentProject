"use client";
import Link from "next/link";
import { useState } from "react";
import { RiCarLine, RiEBikeLine } from 'react-icons/ri';
import { PiUsersThreeBold, PiUserBold, PiShieldBold } from 'react-icons/pi';

export function Navbar() {

  const buyList = [
    { title: "Carros Usados", url: "./buy/used_car", icon: <RiCarLine className="text-xl" /> },
    { title: "Carros Novos", url: "./buy/new_car", icon: <RiCarLine className="text-xl" /> },
    { title: "Motos Usadas", url: "./buy/used_bike", icon: <RiEBikeLine className="text-xl" /> },
    { title: "Motos Novas", url: "./buy/new_bike", icon: <RiEBikeLine className="text-xl" /> },
  ]

  const retList = [
    { title: "Carro", url: "./rent/car", icon: <RiCarLine className="text-xl" /> },
    { title: "Moto", url: "./rent/bike", icon: <RiEBikeLine className="text-xl" /> },
  ]

  const helpList = [
    { title: "Para você", url: "./help/me", icon: <PiUserBold className="text-xl" /> },
    { title: "Para sua loja", url: "./help/store", icon: <PiUsersThreeBold className="text-xl" /> },
    { title: "Segurança", url: "./security", icon: <PiShieldBold className="text-xl" /> },
  ]

  return (
    <>
      <div className="w-full flex justify-between px-16 shadow-md items-center h-16 bg-white fixed">
        <div>Logo</div>
        <div className="flex font-medium text-sm h-full">
          <LinkButton title="Comprar" url="./buy" list={buyList} />
          <LinkButton title="Alugar" url="./rent" list={retList} />
          <LinkButton title="Ajuda" url="./rent" list={helpList} />
        </div>
        <div>User</div>
      </div>
    </>

  )
}

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

function LinkButton({ title, url, list }: LinkButtonProps) {
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
