import { Navbar } from "../components/Navbar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <div className="pt-16 h-screen overflow-y-auto">
        {children}
      </div>
    </>
  )
}
