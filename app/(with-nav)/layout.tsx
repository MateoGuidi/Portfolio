import { Header } from "@/app/ui/header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-12 py-12">
      <Header isCollapsed={true} />
      {children}
    </div>
  )
}
