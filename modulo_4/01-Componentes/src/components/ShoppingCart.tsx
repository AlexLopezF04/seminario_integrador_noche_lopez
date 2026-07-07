import { useReducer } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
}

type Action =
  | { type: 'add'; product: CartItem }
  | { type: 'remove'; id: number }
  | { type: 'clear' }

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case 'add':
      if (state.some((item) => item.id === action.product.id)) return state
      return [...state, action.product]
    case 'remove':
      return state.filter((item) => item.id !== action.id)
    case 'clear':
      return []
  }
}

const products: CartItem[] = [
  { id: 1, name: 'Teclado mecánico', price: 89.99 },
  { id: 2, name: 'Monitor 27"', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99 },
  { id: 4, name: 'Webcam HD', price: 59.99 },
]

export default function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, [])

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const btnBase: React.CSSProperties = {
    padding: '6px 14px',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 600,
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>Productos</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {products.map((p) => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
            <span>{p.name} — ${p.price.toFixed(2)}</span>
            <button
              onClick={() => dispatch({ type: 'add', product: p })}
              style={{ ...btnBase, background: '#22c55e' }}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>Carrito ({cart.length})</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#f0fdf4', borderRadius: 6 }}>
                <span>{item.name} — ${item.price.toFixed(2)}</span>
                <button
                  onClick={() => dispatch({ type: 'remove', id: item.id })}
                  style={{ ...btnBase, background: '#e00' }}
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Total: ${total.toFixed(2)}</strong>
            <button
              onClick={() => dispatch({ type: 'clear' })}
              style={{ ...btnBase, background: '#6b7280' }}
            >
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  )
}
