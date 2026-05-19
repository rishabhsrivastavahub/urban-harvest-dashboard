export default function ProductCard({ name, category, price, inventory, yield: yieldInfo, status }) {
  return (
    <article className="product-card">
      <div className="product-card-top">
        <div>
          <p className="product-name">{name}</p>
          <span className="product-category">{category}</span>
        </div>
        <span className={`status-tag ${status === 'Available' ? 'available' : 'out-of-stock'}`}>
          {status}
        </span>
      </div>
      <p className="product-price">{price}</p>
      <div className="product-meta">
        <span>{inventory} in stock</span>
        <span>{yieldInfo}</span>
      </div>
    </article>
  )
}
