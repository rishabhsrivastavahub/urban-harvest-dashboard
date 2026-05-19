import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="app-shell">
      <Sidebar
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <div className="page-shell">
        <Header title="Urban Harvest" onMenuToggle={() => setMobileOpen((state) => !state)} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
      <div
        className={`backdrop ${mobileOpen ? 'visible' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </div>
  )
}
