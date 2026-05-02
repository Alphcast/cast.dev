import { Outlet } from '@tanstack/react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen bg-surface-950 text-surface-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
