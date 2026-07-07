import { useMemo } from 'react'

interface OrderItem {
  product: string
  quantity: number
  price: number
}

interface Order {
  id: number
  customer: string
  items: OrderItem[]
  date: string
}

const orders: Order[] = [
  {
    id: 1,
    customer: 'Ana García',
    date: '2026-06-01',
    items: [
      { product: 'Teclado', quantity: 1, price: 89.99 },
      { product: 'Mouse',   quantity: 1, price: 29.99 },
    ],
  },
  {
    id: 2,
    customer: 'Carlos López',
    date: '2026-06-02',
    items: [
      { product: 'Monitor', quantity: 2, price: 349.99 },
      { product: 'Cable',   quantity: 3, price: 12.99 },
    ],
  },
  {
    id: 3,
    customer: 'María Pérez',
    date: '2026-06-03',
    items: [
      { product: 'Webcam',    quantity: 1, price: 59.99 },
      { product: 'Audífonos', quantity: 2, price: 79.99 },
      { product: 'Base',      quantity: 1, price: 39.99 },
    ],
  },
  {
    id: 4,
    customer: 'Pedro Ruiz',
    date: '2026-06-04',
    items: [
      { product: 'Parlante', quantity: 1, price: 45.00 },
    ],
  },
]

interface Metrics {
  totalRevenue: number
  orderCount: number
  totalItems: number
  averageOrder: number
  maxOrder: number
  minOrder: number
}

export default function OrderMetrics() {
  const metrics = useMemo<Metrics>(() => {
    const totals = orders.map((o) =>
      o.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
    )
    return {
      totalRevenue: totals.reduce((a, b) => a + b, 0),
      orderCount: orders.length,
      totalItems: orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.quantity, 0), 0),
      averageOrder: totals.reduce((a, b) => a + b, 0) / orders.length,
      maxOrder: Math.max(...totals),
      minOrder: Math.min(...totals),
    }
  }, [])

  const cards: [string, string | number][] = [
    ['Órdenes totales', metrics.orderCount],
    ['Ingresos totales', `$${metrics.totalRevenue.toFixed(2)}`],
    ['Items vendidos', metrics.totalItems],
    ['Promedio por orden', `$${metrics.averageOrder.toFixed(2)}`],
    ['Orden máxima', `$${metrics.maxOrder.toFixed(2)}`],
    ['Orden mínima', `$${metrics.minOrder.toFixed(2)}`],
  ]

  return (
    <div style={{ maxWidth: 400 }}>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>Métricas de pedidos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {cards.map(([label, value]) => (
          <div
            key={label}
            style={{
              padding: 14,
              background: '#f9fafb',
              borderRadius: 8,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#6366f1' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
