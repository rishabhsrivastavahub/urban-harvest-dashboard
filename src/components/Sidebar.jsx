import { NavLink, useNavigate } from 'react-router-dom'
import { FiHome, FiBox, FiLogOut } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice.js'

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: FiHome },
  { label: 'Products', path: '/products', icon: FiBox },
]

export default function Sidebar({ isOpen, onClose }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
    onClose?.()
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="brand">
        <span className="brand-mark">UH</span>
        <div>
          <p className="brand-title">Urban Harvest</p>
          <p className="brand-subtitle">Inventory dashboard</p>
        </div>
      </div>

      <nav className="nav-list">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <button type="button" className="logout-button" onClick={handleLogout}>
        <FiLogOut size={16} />
        <span>Sign out</span>
      </button>
    </aside>
  )
}
