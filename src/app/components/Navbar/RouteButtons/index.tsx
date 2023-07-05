"use client";
import { RiCarLine, RiEBikeLine } from 'react-icons/ri';
import { PiUsersThreeBold, PiUserBold, PiShieldBold } from 'react-icons/pi';
import { LinkButton } from "./StyleButton";

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

export function RouteButtons() {
  return (
    <div className="flex font-medium text-sm h-full">
      <LinkButton title="Comprar" url="./buy" list={buyList} />
      <LinkButton title="Alugar" url="./rent" list={retList} />
      <LinkButton title="Ajuda" url="./rent" list={helpList} />
    </div>
  )
}
