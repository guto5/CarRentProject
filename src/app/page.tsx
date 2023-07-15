import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <Link
        href={"./home"}
        className="text-[150px] uppercase font-semibold text-blue-700"
      >
        Home
      </Link>
    </div>
  );
}
