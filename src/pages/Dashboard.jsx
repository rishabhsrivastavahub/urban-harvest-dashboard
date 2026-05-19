import { useSelector } from 'react-redux'
import StatCard from '../components/StatCard.jsx'
import OrdersTable from '../components/OrdersTable.jsx'
import { stats } from '../data/mockData.js'

export default function Dashboard() {
  const orders = useSelector((state) => state.products.orders)
  const user = useSelector((state) => state.auth.user)

  return (
    <div className="dashboard-grid">
      <section className="profile-card">
        <div className="profile-card-header">
          <div className="profile-avatar">
            {user?.name
              ? user.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
              : 'UH'}
          </div>
          <div>
            <p className="eyebrow">Welcome back</p>
            <h2>{user?.name || 'Harvest Manager'}</h2>
            <p>{user?.email || 'manager@urbanharvest.com'}</p>
          </div>
        </div>
        <div className="profile-card-body">
          <p>Great to see you again! Your team is tracking deliveries and user demand in real time.</p>
          <div className="profile-highlights">
            <div>
              <p>Total orders</p>
              <strong>1,820</strong>
            </div>
            <div>
              <p>Open tasks</p>
              <strong>8</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-panel">
        <div className="section-header">
          <h2>Performance overview</h2>
          <p>Monitor the latest harvest metrics and distribution orders.</p>
        </div>
        <div className="stat-grid">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </section>

      <OrdersTable orders={orders} />
    </div>
  )
}
