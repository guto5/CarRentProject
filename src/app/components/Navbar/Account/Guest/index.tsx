import Link from "next/link";

export function Guest() {
  return (
    <div className="h-full flex items-center gap-5">
      <Link
        className="uppercase font-semibold text-xs px-2 py-1.5 border-2 rounded-md text-gray-500 border-gray-400 hover:bg-gray-100"
        href="./signin"
      >
        Criar conta
      </Link>
      <Link
        className="uppercase font-semibold text-xs px-2 py-1.5 rounded-md border-2 border-red-500 text-white bg-red-500 hover:bg-red-600 hover:border-red-600"
        href="./login"
      >
        Fazer login
      </Link>
    </div>
  )
}
