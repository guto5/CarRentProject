
export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      {children}
    </div>
  )
}
