import { Outlet } from '@tanstack/react-router'
import { ThemeProvider, useTheme } from '../hooks/useTheme'
import { Header } from './Header'
import { Footer } from './Footer'

function LayoutContent() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-surface-950 text-surface-100' : 'bg-surface-50 text-surface-900'
    }`}>
      <Header />
      <main className="w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export function Layout() {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  )
}
