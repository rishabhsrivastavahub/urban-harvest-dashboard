import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice.js'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  useEffect(() => {
    const savedEmail = localStorage.getItem('urbanHarvestEmail')
    if (savedEmail) {
      setEmail(savedEmail)
      setRemember(true)
    }
  }, [])

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (remember) {
      localStorage.setItem('urbanHarvestEmail', email)
    } else {
      localStorage.removeItem('urbanHarvestEmail')
    }
    dispatch(login({ name: 'Harvest Manager', email }))
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-hero">
          <p className="eyebrow">Urban Harvest</p>
          <h1>Sign in to your account</h1>
          <p>Welcome back. Manage deliveries, orders, and products from one dashboard.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-input-grid">
            <label>
              Email address
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@domain.com"
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                required
              />
            </label>
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            Remember me
          </label>

          <button type="submit" className="primary-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
