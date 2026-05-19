import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProduct,
  setSearchQuery,
  setStatusFilter,
} from '../features/products/productSlice.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const query = useSelector((state) => state.products.searchQuery)
  const statusFilter = useSelector((state) => state.products.statusFilter)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesQuery =
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery)
      const matchesStatus =
        statusFilter === 'All' || product.status === statusFilter
      return matchesQuery && matchesStatus
    })
  }, [products, query, statusFilter])

  const addNewProduct = () => {
    const id = `p${products.length + 1}`
    const newProduct = {
      id,
      name: `Harvest Blend ${products.length + 1}`,
      category: 'Seasonal',
      price: '$6.75 / unit',
      inventory: products.length % 2 === 0 ? 28 : 0,
      yield: 'Local demand rising',
      status: products.length % 2 === 0 ? 'Available' : 'Out of Stock',
    }
    dispatch(addProduct(newProduct))
  }

  return (
    <div className="page-grid products-grid">
      <section className="products-panel">
        <div className="product-top-row">
          <div>
            <h2>Product management</h2>
            <p>Manage inventory, add items, and track availability.</p>
          </div>
          <button type="button" className="primary-button" onClick={addNewProduct}>
            Add product
          </button>
        </div>

        <div className="product-filters">
          <label>
            Search products
            <input
              type="search"
              value={query}
              onChange={(event) => dispatch(setSearchQuery(event.target.value))}
              placeholder="Search by name or category"
            />
          </label>
          <label>
            Status
            <select
              value={statusFilter}
              onChange={(event) => dispatch(setStatusFilter(event.target.value))}
            >
              <option>All</option>
              <option>Available</option>
              <option>Out of Stock</option>
            </select>
          </label>
        </div>

        <div className="product-summary">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <div className="empty-state">No products match your search.</div>
          )}
        </div>
      </section>
    </div>
  )
}
