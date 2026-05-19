export default function OrdersTable({ orders }) {
  return (
    <section className="table-card">
      <div className="table-card-header">
        <div>
          <h2>Recent orders</h2>
          <p>Latest shipment activity for the delivery pipeline.</p>
        </div>
        <span className="orders-count">{orders.length} orders</span>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>
                <span className={`order-pill ${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
