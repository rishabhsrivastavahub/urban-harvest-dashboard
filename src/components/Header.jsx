import { FiBell, FiMenu, FiSearch } from 'react-icons/fi'
import { useSelector } from 'react-redux'

export default function Header({ title, onMenuToggle }) {
  const user = useSelector((state) => state.auth.user)

  return (
    <header className="header-bar">
      <button type="button" className="mobile-menu-button" onClick={onMenuToggle}>
        <FiMenu size={20} />
      </button>
      <div className="header-copy">
        <p className="eyebrow">Dashboard</p>
        <h1>{title}</h1>
        <p className="header-detail">
          A quick overview of delivery pipelines, product status, and customer activity.
        </p>
      </div>

      <div className="header-actions">
        <label className="search-field">
          <FiSearch size={16} />
          <input type="search" placeholder="Search dashboard" aria-label="Search dashboard" disabled />
        </label>
        <button type="button" className="icon-button" aria-label="Alerts">
          <FiBell size={18} />
        </button>
        <div className="user-chip">
          <span>{user?.name || 'Guest'}</span>
        </div>
      </div>
    </header>
  )
}
