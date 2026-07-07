import { useState, useMemo } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
}

const products: Product[] = [
  { id: 1, name: 'Teclado mecánico',  category: 'Periféricos', price: 89.99 },
  { id: 2, name: 'Monitor 27"',       category: 'Monitores',   price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', category: 'Periféricos', price: 29.99 },
  { id: 4, name: 'Webcam HD',         category: 'Periféricos', price: 59.99 },
  { id: 5, name: 'Audífonos Bluetooth', category: 'Audio',     price: 79.99 },
  { id: 6, name: 'Base para monitor', category: 'Accesorios',  price: 39.99 },
  { id: 7, name: 'Cable USB-C',       category: 'Accesorios',  price: 12.99 },
  { id: 8, name: 'Parlante portátil', category: 'Audio',       price: 45.00 },
]

const categories = [...new Set(products.map((p) => p.category))]

export default function FilteredCatalog() {
  const [category, setCategory] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(500)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category && p.category !== category) return false
      if (p.price < minPrice) return false
      if (p.price > maxPrice) return false
      return true
    })
  }, [category, minPrice, maxPrice])

  const inputStyle: React.CSSProperties = {
    padding: '6px 10px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 13,
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
          <option value="">Todas las categorías</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Precio min"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          style={{ ...inputStyle, width: 100 }}
        />
        <input
          type="number"
          placeholder="Precio max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          style={{ ...inputStyle, width: 100 }}
        />
      </div>

      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>
        {filtered.length} producto{filtered.length !== 1 ? 's' : ''}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            <span>{p.name} <span style={{ color: '#6b7280', fontSize: 12 }}>({p.category})</span></span>
            <strong>${p.price.toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
